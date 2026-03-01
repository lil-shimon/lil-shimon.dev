import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import styles from "./post-list.component.module.css";

type Props = {
  posts: PostMeta[];
};

export const PostList = ({ posts }: Props) => {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>雑記帳</h1>
      <p className={styles.description}>特に意味のないことを書いています</p>
      {posts.length === 0 ? (
        <p>記事がありません</p>
      ) : (
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.slug} className={styles.item}>
              <Link href={`/blog/${post.slug}`}>
                <h2 className={styles.title}>{post.title}</h2>
                <time className={styles.date} dateTime={post.date}>
                  {post.date}
                </time>
                {post.description && (
                  <p className={styles.excerpt}>{post.description}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};
