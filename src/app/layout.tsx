import type { Metadata } from "next";
import "./globals.css";

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
