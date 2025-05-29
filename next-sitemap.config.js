/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://keitanakagawa.space', // あなたの本番URL
  generateRobotsTxt: true, // robots.txtも自動生成
  sitemapSize: 7000, // ページ数が多い場合に分割される上限
  exclude: [''], // 除外したいページがあればここに
};
