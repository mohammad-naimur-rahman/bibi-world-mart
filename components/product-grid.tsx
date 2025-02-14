import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { products } from '@/data/products'

// Mock product data

export default function ProductGrid() {
  return (
    <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-12' id='shop'>
      <h2 className='text-3xl font-bold mb-8'>Featured Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {products.map(product => (
          <Card key={product.id}>
            <CardContent className='p-4'>
              <img
                src={product.image || '/placeholder.svg'}
                alt={product.name}
                className='w-full h-64 object-cover mb-4'
              />
              <h3 className='text-lg font-semibold'>{product.name}</h3>
              <p className='text-sm text-gray-600'>
                ${product.price.toFixed(2)}
              </p>
            </CardContent>
            <CardFooter>
              <Button className='w-full'>Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
