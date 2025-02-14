'use client'

import { Mail, Phone } from 'lucide-react'

export default function NewFooter() {
  return (
    <div className='footer bg-gray-100 py-10'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center text-center'>
          <h3 className='text-2xl font-semibold mb-2'>Contact Us</h3>
          <ul className='space-y-2 mb-4'>
            <li className='flex items-center gap-2'>
              <Mail />
              <a href='mailto:bibiworldmart@gmail.com'>
                bibiworldmart@gmail.com
              </a>
            </li>
            <li className='flex items-center gap-2'>
              <Phone />
              <a href='https://wa.me/+8801862266698'>+8801862266698</a>
            </li>
          </ul>
        </div>
        <p className='text-center mt-3 text-gray-600 font-medium'>
          &copy; {new Date().getFullYear()} Bibi World Mart. All rights
          reserved.
        </p>
      </div>
    </div>
  )
}
