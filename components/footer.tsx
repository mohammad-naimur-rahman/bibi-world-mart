import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Women
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Men
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-3 py-2 text-sm border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-r-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          © 2025 FashionStore. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

