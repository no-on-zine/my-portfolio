import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ['images.microcms-assets.io'],
  },

  // i18nの設定：英語と日本語をサポート（英語がデフォルト）
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
  },

  // sitemap.xml をAPI経由で生成する場合の rewrites（例: /api/sitemap.ts）
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
};

export default nextConfig;
