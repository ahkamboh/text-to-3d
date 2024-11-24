import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "AI Avatar Generator - Create Magical Avatars",
  description: "Create stunning AI-generated avatars with our magical avatar generator. Transform your text descriptions into unique, personalized digital avatars.",
  keywords: "AI avatar generator, digital avatars, AI art, personalized avatars, avatar creation, AI generation, custom avatars",
  authors: [{ name: "Ali Hamza Kamboh", url: "https://alihamzakamboh.com" }],
  creator: "Ali Hamza Kamboh",
  publisher: "Ali Hamza Kamboh",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avatar-generator.vercel.app",
    title: "AI Avatar Generator - Create Magical Avatars",
    description: "Transform your ideas into stunning AI-generated avatars with our magical generator.",
    siteName: "AI Avatar Generator",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "AI Avatar Generator Preview"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Avatar Generator - Create Magical Avatars",
    description: "Transform your ideas into stunning AI-generated avatars with our magical generator.",
    creator: "@ahkamboh",
    images: ["/og-image.png"],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#020817",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#020817" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}