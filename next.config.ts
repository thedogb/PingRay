import type { NextConfig } from "next";
import generateRSS from "@/utils/genRss";

const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: true,

  images: {
    domains: ["cdn.jsdelivr.net"], // 添加允许的域名
  },

  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     generateRSS(); // 只在构建时生成
  //   }
  //   return config;
  // },
};



export default nextConfig;
