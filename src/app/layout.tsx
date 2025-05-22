import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import Header from '@/components/Header';
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
