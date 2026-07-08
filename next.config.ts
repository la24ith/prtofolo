import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['github.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;