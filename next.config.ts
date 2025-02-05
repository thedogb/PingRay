import type { NextConfig } from "next";
import generateRSS from "@/utils/genRss";

const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/feed',  // 旧路径
        destination: '/rss.xml',  // 新路径
        permanent: true,  // 是否是永久重定向（301），false 代表临时重定向（307）
      }
    ];
  },


  images: {
    domains: ["cdn.jsdelivr.net"], // 添加允许的域名
  },

  webpack: (config, { isServer }) => {
    if (isServer) {
      generateRSS(); // 只在构建时生成
    }
    return config;
  },
};



export default nextConfig;
