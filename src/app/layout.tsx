import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Clervio - Behavioral Intelligence Platform',
  description: 'Clervio measures human depth — not just digital actions. A behavioral intelligence platform designed to help websites understand how users think, feel, and decide.',
  keywords: ['behavioral intelligence', 'user analytics', 'cognitive analytics', 'emotional intelligence', 'web analytics', 'user behavior', 'decision analytics'],
  authors: [{ name: 'Clervio Team' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  themeColor: '#6366F1',
  openGraph: {
    title: 'Clervio - Behavioral Intelligence Platform',
    description: 'Measure human depth — not just digital actions',
    url: 'https://clervio.com',
    siteName: 'Clervio',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Clervio - Behavioral Intelligence Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clervio - Behavioral Intelligence Platform',
    description: 'Measure human depth — not just digital actions',
    images: ['/og-image.svg'],
  },
};

import { ThemeProvider } from "@/components/layout/theme-provider";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Analytics } from "@/components/analytics/analytics";
import { AuthProvider } from "@/contexts/auth-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system">
          <AuthProvider>
            {children}
            <ScrollToTop />
            <Analytics />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
