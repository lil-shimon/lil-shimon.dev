import type { Post } from "@/lib/posts";
import styles from "./post-detail.component.module.css";

type Props = {
  post: Post;
};

export const PostDetail = (props: Props) => {
  const { post } = props;

  return (
    <article className={styles.container}>
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
  );
};
