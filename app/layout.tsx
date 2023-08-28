import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';

import './globals.css';
import { cn } from '@/lib/utils';
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme-provider"
import Header from '@/components/header';

const font = Inter({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ndrws.dev'),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Developer',
    'Fullstack',
    'Frontend',
    'Backend',
  ],
  authors: [
    {
      name: 'Raphael Andrews',
      url: 'https://ndrws.dev'
    }
  ],
  creator: 'Raphael Andrews',
  openGraph: {
    type: 'website',
    locale: 'en-US',
    title: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image.jpg`,
        width: 1920,
        height: 1080,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'ndrws',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("max-w-2xl m-auto", font.className)}>
        <ThemeProvider attribute="class">
          <main className="p-6 pt-3 md:pt-6 min-h-screen">
            <Header />
            {children}
          </main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
