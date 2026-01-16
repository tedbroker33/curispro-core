'use client'

import { loadStripe } from '@stripe/stripe-js'
import { useState } from 'react'

// We are hardcoding this for now to avoid import errors
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    setIsLoading(true)
    try {
      const stripe = await stripePromise
      if (!stripe) throw new Error("Stripe failed")

      // Call our API
      const res = await fetch('/api/create-checkout-session', { method: 'POST' })
      const data = await res.json()

      if (data.id) {
        await stripe.redirectToCheckout({ sessionId: data.id })
      } else {
        alert("Error: " + data.error)
        setIsLoading(false)
      }
    } catch (e: any) {
      alert("Critical Failure: " + e.message)
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <div className="max-w-2xl bg-white rounded-2xl shadow-xl p-10 border border-slate-200">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          🚀 CurisPro Pro Tier
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Unlock the Financial Cockpit. Full market access. Automated commissions.
        </p>
        
        <div className="text-5xl font-bold text-indigo-600 mb-8">
          $97<span className="text-lg text-slate-400">/mo</span>
        </div>

        <button
          onClick={handleCheckout}
          disabled={isLoading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 disabled:opacity-50"
        >
          {isLoading ? "Processing..." : "Activate Now"}
        </button>
        
        <p className="text-xs text-slate-400 mt-4">
          Cancel anytime. No long-term contracts.
        </p>
      </div>
    </div>
  )
}
