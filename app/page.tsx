'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { BETA_LIST, ELITE_AGENTS } from '../lib/constants'

export default function Home() {
  const [email, setEmail] = useState('')
  const [showReminder, setShowReminder] = useState(false)
  const [welcomeTitle, setWelcomeTitle] = useState('Welcome Back')
  const router = useRouter()

  const handleActivate = () => {
    const lower = email.toLowerCase().trim()
    if (!lower) return

    const isElite = !!ELITE_AGENTS[lower as keyof typeof ELITE_AGENTS]
    const isBeta = BETA_LIST.includes(lower)

    if (isElite) {
      const elite = ELITE_AGENTS[lower as keyof typeof ELITE_AGENTS]
      setWelcomeTitle(`Welcome Home, ${elite.name}`)
    } else if (isBeta) {
      setWelcomeTitle('You Have Been Chosen')
    } else {
      setWelcomeTitle('Standard Access')
    }

    setShowReminder(true)
  }

  const enterDashboard = () => {
    setShowReminder(false)
    router.push('/dashboard')
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white p-6">
      <div className="max-w-md w-full bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-2xl text-center">
        <h1 className="text-5xl font-bold tracking-tighter text-indigo-500 mb-8">
          CurisPro
        </h1>

        <input
          type="email"
          placeholder="Agent Email"
          className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-center text-lg mb-6"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleActivate}
          className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-xl font-bold text-lg transition-transform hover:scale-105"
        >
          Continue
        </button>

        <p className="mt-6 text-[10px] tracking-[0.35em] text-slate-500 uppercase">
          Code: 33 • 11 • 22 • 88
        </p>
      </div>

      {/* Reminder Modal */}
      {showReminder && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="max-w-md w-full bg-slate-900 border border-slate-700 rounded-3xl p-8 text-left shadow-[0_0_50px_rgba(79,70,229,0.6)]">
            <h2 className="text-xl font-bold text-indigo-400 mb-3">{welcomeTitle}</h2>
            <p className="text-slate-200 text-sm mb-4">
              CurisPro Pro is a results‑first platform. No contracts. Cancel anytime.
              By entering the dashboard, you confirm you’re here to grow your group benefits business.
            </p>
            <p className="text-slate-400 text-xs mb-6">
              Hit <span className="font-semibold">$5,000</span> in paid commissions in your first month
              and we may waive Month 2. Hit <span className="font-semibold">$10,000</span>, and Month 3
              is on us. Coffee is for closers.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowReminder(false)}
                className="px-4 py-2 rounded-lg text-xs bg-slate-800 hover:bg-slate-700"
              >
                Go Back
              </button>
              <button
                onClick={enterDashboard}
                className="px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700"
              >
                Enter Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
