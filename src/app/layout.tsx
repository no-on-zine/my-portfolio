import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Oswald } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://keitanakagawa.space'),
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
        url: '/og-image.jpg',
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
    site: '@nakagawakeita',
    creator: '@nakagawakeita',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff',
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
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />

        {/* JSON-LD 構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Keita Nakagawa',
              url: 'https://keitanakagawa.space',
              image: 'https://keitanakagawa.space/og-image.jpg',
              sameAs: [
                'https://twitter.com/nakagawakeita',
                'https://github.com/no-on-zine',
                'https://www.instagram.com/nakagawakeita',
              ],
              jobTitle: 'Web Designer / Front-end Developer / Photographer',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Fukuoka',
                addressCountry: 'JP',
              },
            }),
          }}
        />
      </head>
      <body className={`${oswald.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Google Analytics scripts - afterInteractive */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2SGWQRGK84"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2SGWQRGK84');
            `,
          }}
        />
      </body>
    </html>
  );
}
