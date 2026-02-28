import type { Post } from "@/lib/posts";
import styles from "./post-detail.component.module.css";
import Link from "next/link"

type Props = {
  post: Post;
};

export const PostDetail = (props: Props) => {
  const { post } = props;

  return (
    <main className={styles.container}> 
      <article className={styles.article}>
      <header className={styles.header}>
        <h1 className={styles.heading}>{post.title}</h1>
        <time className={styles.time} dateTime={post.date}>
          {post.date}
        </time>
      </header>

      <div
        className={`article-content ${styles.content}`}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
     <nav className={styles.nav}
      >
        <Link href="/" className={styles.link}>
          ← トップへ戻る
        </Link>
      </nav>
    </main>

  );
};
