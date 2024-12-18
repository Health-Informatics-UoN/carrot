/** @type {import('next').NextConfig} */
import nextra from "nextra";

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  distDir: "out",
  output: "export",
  basePath: "/carrot",
  assetPrefix: "/carrot",
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra(nextConfig);
