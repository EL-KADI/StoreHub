"use client"

import Link from "next/link"
import { ShoppingBag, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="StoreHub Home">
            <ShoppingBag className="h-6 w-6" aria-hidden="true" />
            <span className="text-xl font-bold">StoreHub</span>
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6 w-full" aria-label="Mobile navigation">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-primary w-full flex  hover:bg-yellow-200 pe-8  flex-row-reverse transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/#products"
                  className="text-lg font-medium hover:text-primary w-full flex  hover:bg-yellow-200 pe-5  flex-row-reverse transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium hover:text-primary w-full flex  hover:bg-yellow-200 pe-7  flex-row-reverse transition-colors"
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/#products" className="text-sm font-medium hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
