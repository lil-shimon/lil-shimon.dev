import type { Metadata } from "next";
import "./globals.css";

// NOTE: cloudflare pagesの設定
export const runtime = "edge";

export const metadata: Metadata = {
  title: "lil-shimon.dev",
  description: "思考と日記のブログ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
