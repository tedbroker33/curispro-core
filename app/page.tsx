// app/page.tsx
import CheckoutDemo from '../components/CheckoutDemo'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-50 text-slate-900 text-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">
        🚀 CurisPro Is Live
      </h1>
      <p className="text-lg text-slate-600 max-w-xl">
        Your broker platform has been deployed successfully. Use the button below to test the Pro Tier checkout.
      </p>
      <div className="mt-6">
        <CheckoutDemo />
      </div>
    </main>
  )
}
