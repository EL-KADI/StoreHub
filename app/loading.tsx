import { Header } from "@/components/header"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Skeleton */}
        <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <Skeleton className="h-14 w-3/4 mx-auto" />
              <Skeleton className="h-6 w-2/3 mx-auto" />
              <Skeleton className="h-12 w-48 mx-auto mt-8" />
            </div>
          </div>
        </section>

        {/* Products Skeleton */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 space-y-3">
              <Skeleton className="h-10 w-64" />
              <Skeleton className="h-5 w-96" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="group space-y-4">
                  <div className="relative overflow-hidden rounded-lg bg-muted">
                    <Skeleton className="aspect-square w-full" />
                  </div>
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-4/5" />
                    <div className="flex items-center justify-between pt-2">
                      <Skeleton className="h-7 w-24" />
                      <Skeleton className="h-5 w-16" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Loading indicator */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="flex items-center gap-3 bg-background border border-border rounded-full px-6 py-3 shadow-lg">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-foreground rounded-full animate-bounce [animation-delay:-0.3s]" />
            <div className="w-2 h-2 bg-foreground rounded-full animate-bounce [animation-delay:-0.15s]" />
            <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" />
          </div>
          <span className="text-sm font-medium">Loading products...</span>
        </div>
      </div>
    </div>
  )
}
