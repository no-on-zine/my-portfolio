import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['images.microcms-assets.io'], // ← これを追加
  },
};

export default nextConfig;
