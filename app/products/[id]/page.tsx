import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ArrowLeft, ShoppingCart, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    notFound()
  }

  return res.json()
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  try {
    const product = await getProduct(params.id)

    return {
      title: `${product.title} - $${product.price.toFixed(2)}`,
      description: product.description,
      keywords: [product.category, product.title, "buy online", "shop", "e-commerce"],
      openGraph: {
        title: product.title,
        description: product.description,
        type: "website",
        url: `https://storehub.vercel.app/products/${params.id}`,
        images: [
          {
            url: product.image,
            width: 800,
            height: 800,
            alt: product.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: product.title,
        description: product.description,
        images: [product.image],
      },
    }
  } catch {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
    }
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const product = await getProduct(params.id)

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.image,
    description: product.description,
    sku: product.id.toString(),
    category: product.category,
    offers: {
      "@type": "Offer",
      url: `https://storehub.vercel.app/products/${product.id}`,
      priceCurrency: "USD",
      price: product.price.toFixed(2),
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "StoreHub",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating.rate.toString(),
      reviewCount: product.rating.count.toString(),
    },
  }

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: "Products", href: "/#products" }, { label: product.title }]} />

        <Button variant="ghost" asChild className="mb-6">
          <Link href="/" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <article className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={`${product.title} - ${product.category}`}
              fill
              className="object-contain p-8"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <div>
              <Badge variant="secondary" className="mb-3">
                {product.category}
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-balance">{product.title}</h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  <span className="font-semibold">{product.rating.rate}</span>
                </div>
                <span className="text-muted-foreground">({product.rating.count} reviews)</span>
              </div>

              <p className="text-4xl font-bold mb-6" itemProp="price">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <Button size="lg" className="flex-1 gap-2">
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="flex-1 bg-transparent">
                Buy Now
              </Button>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
