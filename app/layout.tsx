import type { Metadata } from 'next/metadata'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CurisPro - Broker Engine',
  description: 'Financial Cockpit for Agents',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* NO HEADER/FOOTER YET TO AVOID BUILD ERRORS */}
        <main className="min-h-screen bg-slate-50">
          {children}
        </main>
      </body>
    </html>
  )
}
