import { ProductList } from "@/components/product-list"
import { Hero } from "@/components/hero"
import { Header } from "@/components/header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home - Shop Premium Products Online",
  description:
    "Browse our curated collection of premium products including electronics, jewelry, and fashion. Find the perfect items at competitive prices with fast shipping.",
  openGraph: {
    title: "StoreHub - Shop Premium Products Online",
    description: "Browse our curated collection of premium products including electronics, jewelry, and fashion.",
    url: "https://storehub.vercel.app",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductList />
      </main>
    </div>
  )
}
