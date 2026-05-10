import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/m2-accounting',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
