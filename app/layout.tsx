import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://storehub.vercel.app"),
  title: {
    default: "StoreHub - Premium Product Catalog | Shop Quality Products Online",
    template: "%s | StoreHub",
  },
  description:
    "Discover amazing products across multiple categories including electronics, jewelry, men's and women's clothing. Shop quality products at competitive prices with fast shipping.",
  keywords: [
    "online shopping",
    "product catalog",
    "electronics",
    "jewelry",
    "fashion",
    "men's clothing",
    "women's clothing",
    "e-commerce",
  ],
  authors: [{ name: "StoreHub" }],
  creator: "StoreHub",
  publisher: "StoreHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://storehub.vercel.app",
    title: "StoreHub - Premium Product Catalog",
    description: "Discover amazing products across multiple categories. Shop quality products at competitive prices.",
    siteName: "StoreHub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StoreHub - Premium Product Catalog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StoreHub - Premium Product Catalog",
    description: "Discover amazing products across multiple categories. Shop quality products at competitive prices.",
    images: ["/og-image.png"],
    creator: "@storehub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
