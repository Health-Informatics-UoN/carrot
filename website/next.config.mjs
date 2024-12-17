/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  distDir: "out",
  output: "export",
  basePath: "",
  assetPrefix: "/carrot",
};

export default nextConfig;
