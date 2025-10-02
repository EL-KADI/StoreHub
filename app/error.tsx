"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { AlertCircle, Home, RefreshCcw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Error occurred:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10">
            <AlertCircle className="w-10 h-10 text-destructive" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight mb-4">Something went wrong</h1>

          <p className="text-lg text-muted-foreground mb-8 text-balance">
            We encountered an unexpected error while loading this page. This could be due to a network issue or a
            temporary problem with our servers.
          </p>

          {error.message && (
            <div className="mb-8 p-4 bg-muted rounded-lg border border-border">
              <p className="text-sm font-mono text-left break-all">{error.message}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={reset} size="lg" className="w-full sm:w-auto">
              <RefreshCcw className="w-4 h-4 mr-2" />
              Try again
            </Button>

            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Back to home
              </Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              If this problem persists, please try refreshing the page or contact support.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
