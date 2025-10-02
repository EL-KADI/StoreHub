"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { AlertCircle, ArrowLeft, Home } from "lucide-react"

export default function ProductError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Product page error:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10">
            <AlertCircle className="w-10 h-10 text-destructive" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight mb-4">Product not found</h1>

          <p className="text-lg text-muted-foreground mb-8 text-balance">
            We couldn't load this product. It may have been removed or the link might be incorrect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Browse all products
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Back to home
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
