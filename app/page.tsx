import CheckoutDemo from '../components/CheckoutDemo'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6">
      <h1 className="text-4xl font-bold text-indigo-900 mb-4">🚀 CurisPro Live</h1>
      <p className="text-slate-600 mb-8">The system is ready. Click below to begin.</p>
      <CheckoutDemo />
    </main>
  )
}
}
