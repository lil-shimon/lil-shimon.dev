import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main style={{ maxWidth: "640px", margin: "0 auto", padding: "2rem 1rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>雑記帳</h1>
      <p style={{ marginBottom: "2rem", color: "#666" }}>
        特に意味のないことを書いています
      </p>
      {posts.length === 0 ? (
        <p>記事がありません</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {posts.map((post) => (
            <li
              key={post.slug}
              style={{
                marginBottom: "1.5rem",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid #eee",
              }}
            >
              <Link
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h2 style={{ margin: "0 0 0.5rem 0", fontSize: "1.25rem" }}>
                  {post.title}
                </h2>
                <time
                  dateTime={post.date}
                  style={{ fontSize: "0.875rem", color: "#666" }}
                >
                  {post.date}
                </time>
                {post.description && (
                  <p style={{ margin: "0.5rem 0 0 0", color: "#444" }}>
                    {post.description}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
