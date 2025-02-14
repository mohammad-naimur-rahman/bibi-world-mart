import Link from "next/link"
import { ShoppingCart, Search } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              FashionStore
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Women
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Men
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Accessories
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Sale
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button aria-label="Search">
              <Search className="h-6 w-6" />
            </button>
            <button aria-label="Shopping Cart">
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

