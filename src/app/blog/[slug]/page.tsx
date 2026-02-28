import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostDetail } from "@/features/blog/components/post-detail/post-detail.component";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

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
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `/blog/${slug}`,
      images: [
        {
          url: "https://lil-shimon.dev/og-image.png",
          width: 1424,
          height: 752,
          alt: post.title,
        },
      ],
    },
    twitter: {
      title: post.title,
      description: post.description,
      card: "summary_large_image",
      images: [
        {
          url: "https://lil-shimon.dev/og-image.png",
          width: 1424,
          height: 752,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <PostDetail post={post} />;
}
