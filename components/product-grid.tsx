import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
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
              <Carousel>
                <CarouselContent>
                  {product.images.map(img => (
                    <CarouselItem key={img}>
                      <img
                        src={img}
                        alt={product.name}
                        className='aspect-[1/2] object-cover'
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className='ml-14' />
                <CarouselNext className='mr-14' />
              </Carousel>

              <h3 className='text-lg font-semibold py-1 mt-3'>
                {product.name}
              </h3>
              <p className='text-gray-600 font-medium'>{product.price}</p>
            </CardContent>
            <CardFooter>
              <a
                href='https://wa.me/+8801862266698'
                target='_blank'
                className='w-full'
              >
                <Button className='w-full' variant='yellow'>
                  Buy Now
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
