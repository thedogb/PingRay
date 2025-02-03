import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["cdn.jsdelivr.net"], // 添加允许的域名
  },
};

export default nextConfig;
