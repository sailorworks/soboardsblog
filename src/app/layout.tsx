// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Grow your outdoor advertising business with soboards",
  description:
    "Innovating, designing, and enabling AI for established OOH players.",
  keywords:
    "outdoor advertising mumbai, billboard advertising mumbai, hoarding advertising mumbai, digital billboard mumbai, outdoor media companies mumbai, outdoor advertising agencies mumbai suburbs, navi mumbai outdoor advertising, andheri billboard advertising, bandra outdoor advertising",
  authors: [{ name: "SoBoards" }],
  creator: "SoBoards",
  publisher: "SoBoards",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://soboards.com",
    siteName: "SoBoards",
    title: "SoBoards - Grow your outdoor advertising business with soboards",
    description:
      "Innovating, designing, and enabling AI for established OOH players.",
    images: [
      {
        url: "https://soboards.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SoBoards - Outdoor Advertising Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoBoards - Premium Outdoor Advertising Solutions in Mumbai",
    description:
      "Transform your business visibility with SoBoards - Mumbai's leading outdoor advertising platform.",
    images: ["https://soboards.com/og-image.png"],
    creator: "@soboards",
  },
  alternates: {
    canonical: "https://soboards.com",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
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
        <link rel="canonical" href="https://soboards.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
