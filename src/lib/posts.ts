import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

/**
 * 記事のfrontmatterメタデータ
 */
export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description?: string;
  draft?: boolean;
}

/**
 * 記事の完全データ（HTML化されたコンテンツを含む）
 */
export interface Post extends PostMeta {
  content: string;
}

const postsDirectory = path.join(process.cwd(), "src/content/posts");

/**
 * 日付をフォーマットされた文字列に変換
 * gray-matterはYAML日付をDateオブジェクトとして解析するため、
 * 明示的に文字列に変換する必要がある
 */
function formatDate(date: unknown): string {
  if (date instanceof Date) {
    return date.toISOString().split("T")[0];
  }
  return String(date);
}

/**
 * Draft記事を表示するかどうかを判定
 */
function shouldShowDrafts(): boolean {
  return process.env.SHOW_DRAFTS === "true";
}

/**
 * 全記事のメタデータを日付降順で取得
 * SHOW_DRAFTS環境変数が'true'でない場合、draft記事は除外される
 */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title as string,
        date: formatDate(data.date),
        description: data.description as string | undefined,
        draft: (data.draft as boolean) ?? false,
      };
    })
    .filter((post) => {
      // SHOW_DRAFTS !== 'true' の場合、draft記事を除外
      if (!shouldShowDrafts() && post.draft) {
        return false;
      }
      return true;
    });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

/**
 * 特定記事の詳細を取得（HTML化されたcontent含む）
 * SHOW_DRAFTS環境変数が'true'でない場合、draft記事はnullを返す
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const isDraft = (data.draft as boolean) ?? false;

  // SHOW_DRAFTS !== 'true' かつ draft記事の場合はnullを返す
  if (!shouldShowDrafts() && isDraft) {
    return null;
  }

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title as string,
    date: formatDate(data.date),
    description: data.description as string | undefined,
    draft: isDraft,
    content: contentHtml,
  };
}
