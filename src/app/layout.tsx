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
  title: "CatalogCove - Simple Product Catalogs for WhatsApp Commerce",
  description: "Create beautiful product catalogs with AI-powered descriptions and automatic background removal. Perfect for small businesses selling through WhatsApp. No hosting or technical skills required.",
  keywords: "product catalog, whatsapp commerce, small business, online store, catalog builder, ai product descriptions, background removal",
  authors: [{ name: "CatalogCove" }],
  creator: "CatalogCove",
  publisher: "CatalogCove",
  
  // Open Graph (social sharing)
  openGraph: {
    title: "CatalogCove - Simple Product Catalogs for WhatsApp Commerce",
    description: "Create beautiful product catalogs with AI help. Perfect for small businesses selling through WhatsApp.",
    url: "https://catalogcove.com",
    siteName: "CatalogCove",
    type: "website",
    images: [
      {
        url: "/images/logo.png", // You'll need to create this
        width: 1200,
        height: 630,
        alt: "CatalogCove - Simple Product Catalogs",
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "CatalogCove - Simple Product Catalogs for WhatsApp Commerce",
    description: "Create beautiful product catalogs with AI help. Perfect for small businesses selling through WhatsApp.",
    images: ["/images/logo.png"],
  },
  
  // Favicon and icons
  icons: {
    icon: [
      { url: "/images/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon_io//favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/images/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/images/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/favicon_io/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  
  // Additional
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://catalogcove.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
