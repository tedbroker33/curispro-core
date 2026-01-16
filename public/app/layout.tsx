import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CurisPro - Group Benefits Engine',
  description: 'Platform for independent health & benefits brokers.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
