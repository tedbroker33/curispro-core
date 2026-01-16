'use client'

import { loadStripe } from '@stripe/stripe-js'
import { useState } from 'react'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CheckoutDemo() {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    setIsLoading(true)
    try {
      const stripe = await stripePromise
      if (!stripe) throw new Error("Stripe failed to initialize")

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const session = await response.json()
      await stripe.redirectToCheckout({ sessionId: session.id })
    } catch (error) {
      console.error('Checkout Error:', error)
      alert('Failed to start checkout. Please try again shortly.')
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
    >
      {isLoading ? "Loading..." : "Start CurisPro Pro Tier - \)97/month"}
    </button>
  )
}
      onClick={handleCheckout}
      disabled={isLoading}
      className="w-full max-w-md bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {isLoading ? "Loading..." : "Start CurisPro Pro Tier - \(97/month"}
    </button>
  )
}
