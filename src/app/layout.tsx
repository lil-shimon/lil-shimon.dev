import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/header.component";

const siteUrl = "https://lil-shimon.dev";

export const metadata: Metadata = {
  title: {
    default: "lil-shimon.dev",
    template: "%s | lil-shimon.dev",
  },
  description: "特に意味のないことを書いています",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "lil-shimon.dev",
    description: "特に意味のないことを書いています",
    url: siteUrl,
    siteName: "lil-shimon.dev",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1456,
        height: 816,
        alt: "lil-shimon.dev - 雑記帳",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lil_shimon",
    creator: "@lil_shimon",
    images: ["/og-image.png"],
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
