import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

const SITE_URL = "https://lil-shimon.dev";
const SITE_TITLE = "lil-shimon.dev";
const SITE_DESCRIPTION = "lil-shimon's personal blog";

/**
 * XMLの特殊文字をエスケープする
 */
function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * 日付文字列をRFC 822形式に変換する
 * 入力: "2024-01-15" 形式
 * 出力: "Mon, 15 Jan 2024 00:00:00 GMT" 形式
 */
function toRfc822Date(dateString: string): string {
  const date = new Date(dateString);
  return date.toUTCString();
}

/**
 * RSS 2.0形式のXMLを生成する
 */
function generateRssFeed(): string {
  const posts = getAllPosts();

  const items = posts
    .map((post) => {
      const link = `${SITE_URL}/posts/${post.slug}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${toRfc822Date(post.date)}</pubDate>${
        post.description
          ? `
      <description>${escapeXml(post.description)}</description>`
          : ""
      }
    </item>`;
    })
    .join("\n");

  const lastBuildDate =
    posts.length > 0 ? toRfc822Date(posts[0].date) : new Date().toUTCString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>ja</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;
}

export async function GET() {
  const feed = generateRssFeed();

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
