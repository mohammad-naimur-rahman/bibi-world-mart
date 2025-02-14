import Header from '@/components/header'
import Hero from '@/components/hero'
import ProductGrid from '@/components/product-grid'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <Hero />
        <ProductGrid />
      </main>
    </div>
  )
}
