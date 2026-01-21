'use client'
import { Lock, Search, Linkedin, Facebook, MapPin, Database } from 'lucide-react'
import { useState, useEffect } from 'react'

const SCRAPERS = [
  { id: 'facebook', name: 'Facebook Groups', icon: Facebook },
  { id: 'linkedin', name: 'LinkedIn Sales Nav', icon: Linkedin },
  { id: 'google', name: 'Google Maps', icon: MapPin },
  { id: 'database', name: 'Employer Database', icon: Database },
  { id: 'search', name: 'Web Scraper', icon: Search }
]

export default function LeadGenPage() {
  const [tier, setTier] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('curispro_tier')
    if (stored) setTier(stored)
  }, [])

  const selectTier = (t: string) => {
    setTier(t)
    localStorage.setItem('curispro_tier', t)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-black italic text-indigo-400">Lead Generation Hub</h1>

      <div className="flex gap-4 mt-6">
        {['starter', 'pro', 'elite'].map(t => (
          <button
            key={t}
            onClick={() => selectTier(t)}
            className={`px-6 py-4 rounded-xl font-bold ${
              tier === t ? 'bg-indigo-600' : 'bg-slate-800'
            }`}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {SCRAPERS.map(s => (
          <div key={s.id} className="p-6 bg-slate-900 rounded-xl border border-slate-700">
            {!tier && <Lock className="text-yellow-400 mb-2" />}
            <s.icon className="w-8 h-8 text-indigo-400 mb-2" />
            <h3 className="font-bold">{s.name}</h3>
            <button
              disabled={!tier}
              className="mt-4 w-full py-2 rounded-lg bg-indigo-600 disabled:opacity-30"
            >
              Scrape Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
