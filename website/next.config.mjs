/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: "/website",
  output: "export",
};

export default nextConfig;
