import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
     domains: ['github.com', 'res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
