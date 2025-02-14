import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <div className='relative bg-gray-900 text-white'>
      <div className='absolute inset-0'>
        <img
          src='/images/472811805_122100027464724851_8082660822562130182_n.jpg'
          alt='Hero background'
          className='w-full h-full object-cover opacity-50'
        />
      </div>
      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32'>
        <h1 className='text-4xl sm:text-5xl font-extrabold tracking-tight mb-4'>
          Bibi World Mart
        </h1>
        <p className='text-xl max-w-xl mb-8'>
          Discover the latest fashion trends with our elegant and modern styles.
          From chic essentials to statement pieces, elevate your wardrobe with
          timeless designs perfect for any occasion.
        </p>
        <a href='#shop'>
          <Button size='lg' className='bg-[#f59e0b] hover:bg-[#d97706]'>
            Shop Now
          </Button>
        </a>
      </div>
    </div>
  )
}
