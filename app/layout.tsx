import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CurisPro - Group Benefits Engine',
  description: 'Full market comparisons. Automated enrollment. Broker dominance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`\({inter.className} bg-slate-50 text-slate-900 antialiased`}>
        <main className="min-h-screen pt-8 pb-12 px-6">
          {children}
        </main>
      </body>
    </html>
  )
}
