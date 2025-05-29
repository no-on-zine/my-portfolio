import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Keita Nakagawa | Web Designer, Front-end Developer & Photographer',
  description:
    'A multidisciplinary creative specializing in web design, front-end development, direction, and photography. Based in Fukuoka & Casablanca. English & Japanese OK.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Keita Nakagawa | Web Designer, Front-end Developer & Photographer',
    description:
      'A multidisciplinary creative specializing in web design, front-end development, direction, and photography. Based in Fukuoka & Casablanca. English & Japanese OK.',
    url: 'https://keitanakagawa.space/',
    siteName: 'Keita Nakagawa Portfolio',
    images: [
      {
        url: '/og-image.jpg', // 必要なら画像をpublicディレクトリに
        width: 1200,
        height: 630,
        alt: 'Keita Nakagawa Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keita Nakagawa Portfolio',
    description:
      'Web designer, front-end developer & photographer based in Fukuoka & Casablanca.',
    site: '@nakagawakeita', // 任意で差し替え
    creator: '@nakagawakeita',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* canonical */}
        <link rel="canonical" href="https://keitanakagawa.space/" />

        {/* Google Fonts preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2SGWQRGK84"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2SGWQRGK84');
            `,
          }}
        />
      </head>
      <body className={`${oswald.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
