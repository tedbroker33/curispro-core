'use client'

import { loadStripe } from '@stripe/stripe-js'
import { useState } from 'react'

// Initialize Stripe once for performance
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CheckoutDemo() {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    setIsLoading(true)
    try {
      const stripe = await stripePromise
      if (!stripe) throw new Error("Stripe failed to initialize")

      // Create secure checkout session via your private API route
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
      className="w-full max-w-md bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {isLoading ? "Loading..." : "Start CurisPro Pro Tier - \(97/month"}
    </button>
  )
}
