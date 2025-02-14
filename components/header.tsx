import Link from 'next/link'

export default function Header() {
  return (
    <header className='border-b'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-24'>
          <div className='flex items-center'>
            <Link href='/' className='text-2xl font-bold'>
              <img src='/logo/logo.png' alt='logo' className='h-20' />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
