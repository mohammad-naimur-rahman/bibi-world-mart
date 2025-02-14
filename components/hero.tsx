import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg?height=600&width=1600"
          alt="Hero background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">Summer Collection 2025</h1>
        <p className="text-xl max-w-xl mb-8">
          Discover the latest trends in fashion and explore our new summer collection. Refresh your wardrobe with
          vibrant colors and stylish designs.
        </p>
        <Button size="lg">Shop Now</Button>
      </div>
    </div>
  )
}

