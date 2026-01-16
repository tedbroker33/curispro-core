// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">🚀 CurisPro Is Live</h1>
      <p className="text-lg text-slate-600">
        Your broker platform has been deployed successfully.
      </p>
      <a 
        href="/admin/cockpit" 
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-xl transition-all"
      >Go to Admin Cockpit</a>
    </div>
  )
}
import CheckoutDemo from '@/components/CheckoutDemo'
