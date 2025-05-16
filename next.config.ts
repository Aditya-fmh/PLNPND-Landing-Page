import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  experimental: {
    // Enable caching for faster builds
    turbotrace: {
      logLevel: 'error'
    }
  }
};

export default nextConfig;
