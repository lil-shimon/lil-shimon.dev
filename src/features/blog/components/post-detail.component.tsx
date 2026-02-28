import { Post } from "@/lib/posts";

type Props = {
  post: Post;
};

export const PostDetail = (props: Props) => {
  const { post } = props;

  return (
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
        className="article-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
        style={{ lineHeight: 1.8 }}
      />
    </article>
  );
};
