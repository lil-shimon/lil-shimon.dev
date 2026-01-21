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
}

/**
 * 記事の完全データ（HTML化されたコンテンツを含む）
 */
export interface Post extends PostMeta {
  content: string;
}

const postsDirectory = path.join(process.cwd(), "src/content/posts");

/**
 * 全記事のメタデータを日付降順で取得
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
        date: data.date as string,
        description: data.description as string | undefined,
      };
    });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

/**
 * 特定記事の詳細を取得（HTML化されたcontent含む）
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string | undefined,
    content: contentHtml,
  };
}
