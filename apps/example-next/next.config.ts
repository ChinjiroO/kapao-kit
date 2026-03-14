import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: ["@kapao-kit/ui"],
  webpack: (config) => {
    // In monorepo, resolve @kapao-kit/ui from source for proper
    // tree-shaking and avoiding react-server condition conflicts
    config.resolve.alias = {
      ...config.resolve.alias,
      "@kapao-kit/ui": path.resolve(__dirname, "../../packages/ui/src"),
    };
    return config;
  },
};

export default nextConfig;
