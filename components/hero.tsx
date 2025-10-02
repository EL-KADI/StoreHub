export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-balance mb-6">Discover Amazing Products</h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Explore our curated collection of premium products. From fashion to electronics, find everything you need in
            one place.
          </p>
        </div>
      </div>
    </section>
  )
}
