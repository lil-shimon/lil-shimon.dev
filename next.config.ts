import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
