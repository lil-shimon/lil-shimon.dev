import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

// NOTE: cloudflare pagesの設定
export const runtime = "edge";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "記事が見つかりません",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main style={{ maxWidth: "720px", margin: "0 auto", padding: "2rem 1rem" }}>
      <article>
        <header style={{ marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
            {post.title}
          </h1>
          <time
            dateTime={post.date}
            style={{ color: "#666", fontSize: "0.875rem" }}
          >
            {post.date}
          </time>
        </header>

        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{ lineHeight: 1.8 }}
        />
      </article>

      <nav
        style={{
          marginTop: "3rem",
          paddingTop: "1rem",
          borderTop: "1px solid #eee",
        }}
      >
        <Link href="/" style={{ color: "#0070f3", textDecoration: "none" }}>
          ← トップへ戻る
        </Link>
      </nav>
    </main>
  );
}
