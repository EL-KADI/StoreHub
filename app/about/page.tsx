import { Header } from "@/components/header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Learn More About StoreHub",
  description:
    "Learn about StoreHub's mission to provide quality products at competitive prices. Discover why customers choose us for their online shopping needs.",
  openGraph: {
    title: "About StoreHub - Your Premier Shopping Destination",
    description:
      "Learn about StoreHub's mission to provide quality products at competitive prices with exceptional customer service.",
    url: "https://storehub.vercel.app/about",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-6">About StoreHub</h1>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Welcome to StoreHub, your premier destination for quality products across multiple categories. We're
              committed to bringing you the best shopping experience with carefully curated items.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To provide customers with access to high-quality products at competitive prices, backed by exceptional
              customer service and a seamless shopping experience.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Curated selection of premium products</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Competitive pricing and regular deals</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Fast and reliable shipping</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Dedicated customer support</span>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  )
}
