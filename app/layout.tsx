import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bibi World Mart',
  description: 'Bibi World Mart'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
