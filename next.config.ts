import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['github.com'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
