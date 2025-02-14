import Header from '@/components/header'
import Hero from '@/components/hero'
import NewFooter from '@/components/new-footer'
import ProductGrid from '@/components/product-grid'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <Hero />
        <ProductGrid />
      </main>
      <NewFooter />
    </div>
  )
}
