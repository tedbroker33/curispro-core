   'use client'

import { useState, useEffect } from 'react'
import { STANDARD_PRICE, BETA_PRICE, BETA_LIST, ELITE_AGENTS } from '../lib/constants'

type Stage = 'welcome' | 'reminder' | 'dashboard'

export default function Home() {
  const [email, setEmail] = useState('')
  const [stage, setStage] = useState<Stage>('welcome')
  const [isBeta, setIsBeta] = useState(false)
  const [elite, setElite] = useState<any>(null)

  useEffect(() => {
    const lower = email.toLowerCase().trim()
    setIsBeta(BETA_LIST.includes(lower))
    setElite(ELITE_AGENTS[lower as keyof typeof ELITE_AGENTS] ?? null)
  }, [email])

  const handleContinue = () => {
    if (!email) return
    setStage('reminder')
  }

  const handleEnterDashboard = () => {
    setStage('dashboard')
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white p-6">
      {/* WELCOME CARD */}
      {stage === 'welcome' && (
        <div className="max-w-md w-full bg-slate-900 rounded-3xl border border-slate-800 px-8 py-10 text-center shadow-2xl">
          <h1 className="text-4xl font-bold mb-6 text-indigo-400">CurisPro</h1>

          {elite ? (
            <>
              <p className="text-lg font-semibold mb-2">Welcome Home, {elite.name}</p>
              <p className="text-sm text-slate-400 mb-6">"{elite.quote}"</p>
            </>
          ) : (
            <p className="text-sm text-slate-400 mb-6">
              Enter your email to continue to your CurisPro workspace.
            </p>
          )}

          <input
            type="email"
            placeholder="agent@yourdomain.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-center text-lg focus:ring-2 focus:ring-indigo-500 outline-none mb-4"
          />

          <button
            onClick={handleContinue}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl text-lg transition-all transform hover:scale-105 disabled:opacity-50"
            disabled={!email}
          >
            Continue
          </button>

          <div className="text-[10px] mt-6 tracking-[0.5em] text-slate-600 uppercase">
            Code: 33 • 11 • 22 • 88
          </div>
        </div>
      )}

      {/* SIMPLE TEST DASHBOARD */}
      {stage === 'dashboard' && (
        <div className="max-w-3xl w-full bg-slate-900 rounded-3xl border border-slate-800 px-8 py-10 shadow-2xl text-left">
          <h1 className="text-3xl font-bold text-indigo-400 mb-4">CurisPro Dashboard (Test Mode)</h1>
          <p className="text-slate-300 mb-6">
            You are inside the app now. This is where we will plug in onboarding, templates,
            lead gen, and the Financial Cockpit. For now, this is a safe place to click around
            and confirm the flow works.
          </p>

          <ul className="space-y-3 text-sm text-slate-200">
            <li>• Step 1 – Email Entry (no pricing)</li>
            <li>• Step 2 – Reminder Popup (pricing + terms)</li>
            <li>• Step 3 – Dashboard access (this screen)</li>
          </ul>

          <button
            onClick={() => setStage('welcome')}
            className="mt-8 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded-lg text-sm"
          >
            Back to Welcome Screen
          </button>
        </div>
      )}

      {/* REMINDER POPUP BEFORE DASHBOARD */}
      {stage === 'reminder' && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="max-w-md w-full bg-slate-900 rounded-2xl border border-slate-700 p-6 text-left shadow-2xl">
            <h2 className="text-xl font-bold text-indigo-400 mb-3">Quick Reminder</h2>

            {elite ? (
              <p className="text-sm text-slate-300 mb-3">
                You have a private arrangement: <span className="font-semibold">
                {elite.trial === 1095 ? '3 years' : '88 days'}
                </span>{' '}
                of complimentary CurisPro Pro access. After that, standard CurisPro rates apply.
              </p>
            ) : isBeta ? (
              <p className="text-sm text-slate-300 mb-3">
                As part of the beta group, you receive{' '}
                <span className="font-semibold">14 days complimentary access</span>. After that,
                your special beta rate is <span className="font-semibold">${BETA_PRICE}/mo</span>.
              </p>
            ) : (
              <p className="text-sm text-slate-300 mb-3">
                CurisPro Pro is <span className="font-semibold">${STANDARD_PRICE}/mo</span>.
                You can cancel anytime. By continuing, you agree to testing this platform with the
                intention of scaling your group benefits business.
              </p>
            )}

            <p className="text-xs text-slate-500 mb-5">
              You can change or cancel your subscription in your account settings. This reminder
              is shown once before your first time entering the dashboard.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setStage('welcome')}
                className="px-4 py-2 text-sm rounded-lg bg-slate-800 hover:bg-slate-700"
              >
                Go Back
              </button>
              <button
                onClick={handleEnterDashboard}
                className="px-4 py-2 text-sm rounded-lg bg-indigo-600 hover:bg-indigo-700 font-semibold"
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
