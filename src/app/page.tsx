import { PostList } from "@/features/blog/components/post-list/post-list.component";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  return <PostList posts={posts} />;
}
