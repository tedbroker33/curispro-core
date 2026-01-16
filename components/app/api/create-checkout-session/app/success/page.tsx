import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 text-center p-6">
      <CheckCircle className="text-green-600 w-24 h-24 mb-6" />
      <h1 className="text-4xl font-bold mb-4 text-slate-900">✅ Checkout Successful</h1>
      <p className="text-lg mb-8 text-slate-600">
        Welcome to CurisPro Pro Tier. Your account is now active and ready to use.
      </p>
      <Link 
        href="/dashboard"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition-all"
      >
        Go to Your Broker Dashboard
      </Link>
    </div>
  )
}
