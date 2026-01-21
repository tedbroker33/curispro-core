'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { DollarSign, Users, Briefcase, Sparkles, Settings, BookOpen, Target } from 'lucide-react'
import { OWNER_EMAIL } from '../../lib/constants'
import { getFrequencyNumber, getDailyQuote } from '../../lib/frequecy'

const LIFE_PATH_THEMES: Record<number, { primary: string; secondary: string; lucky: string }> = {
  1: { primary: '#EF4444', secondary: '#DC2626', lucky: 'Red' },
  2: { primary: '#F97316', secondary: '#EA580C', lucky: 'Orange' },
  3: { primary: '#FACC15', secondary: '#EAB308', lucky: 'Yellow' },
  4: { primary: '#22C55E', secondary: '#16A34A', lucky: 'Green' },
  5: { primary: '#06B6D4', secondary: '#0891B2', lucky: 'Turquoise' },
  6: { primary: '#3B82F6', secondary: '#2563EB', lucky: 'Blue' },
  7: { primary: '#8B5CF6', secondary: '#7C3AED', lucky: 'Purple' },
  8: { primary: '#EC4899', secondary: '#DB2777', lucky: 'Pink' },
  9: { primary: '#14B8A6', secondary: '#0D9488', lucky: 'Teal' },
  11: { primary: '#6366F1', secondary: '#4F46E5', lucky: 'Indigo' },
  22: { primary: '#8B5CF6', secondary: '#7C3AED', lucky: 'Violet' },
  33: { primary: '#F59E0B', secondary: '#D97706', lucky: 'Gold' }
}

function MetricCard({ title, value, subtitle, color }: { title: string; value: string; subtitle?: string; color: string }) {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700" style={{ borderLeftColor: color, borderLeftWidth: 4 }}>
      <p className="text-slate-400 text-sm uppercase tracking-wider">{title}</p>
      <p className="text-3xl font-black mt-2" style={{ color: color }}>{value}</p>
      {subtitle && <p className="text-slate-500 text-sm mt-1">{subtitle}</p>}
    </div>
  )
}

function NavButton({ icon: Icon, label, href }: { icon: React.ElementType; label: string; href: string }) {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push(href)}
      className="flex items-center gap-3 p-4 bg-slate-900 rounded-xl border border-slate-700 hover:border-indigo-500 hover:bg-slate-800 transition-all w-full"
    >
      <Icon className="w-5 h-5 text-indigo-400" />
      <span className="font-semibold">{label}</span>
    </button>
  )
}

export default function DashboardPage() {
  const [email, setEmail] = useState('')
  const [birthday, setBirthday] = useState('')
  const [showWizard, setShowWizard] = useState(false)
  const [wizardStep, setWizardStep] = useState(1)
  const [lifePath, setLifePath] = useState<number | null>(null)

  useEffect(() => {
    const storedEmail = localStorage.getItem('curispro_email') || ''
    const storedBirthday = localStorage.getItem('curispro_birthday')
    const wizardComplete = localStorage.getItem('curispro_wizard_complete')
    
    setEmail(storedEmail)
    
    if (!wizardComplete) {
      setShowWizard(true)
    }
    
    if (storedBirthday) {
      setBirthday(storedBirthday)
      const lp = getFrequencyNumber(storedBirthday)
      setLifePath(lp)
    }
  }, [])

  const handleWizardComplete = () => {
    localStorage.setItem('curispro_wizard_complete', 'true')
    localStorage.setItem('curispro_birthday', birthday)
    const lp = getFrequencyNumber(birthday)
    setLifePath(lp)
    setShowWizard(false)
  }

  const handleBirthdaySubmit = () => {
    if (birthday.match(/^\d{4}-\d{2}-\d{2}$/)) {
      setWizardStep(2)
    }
  }

  const isOwner = email.toLowerCase() === OWNER_EMAIL.toLowerCase()
  const theme = LIFE_PATH_THEMES[lifePath || 6]
  const dailyQuote = getDailyQuote(lifePath, new Date())

  if (showWizard) {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center">
        <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" />
        
        <div className="relative max-w-md w-full bg-slate-900 p-10 rounded-3xl border-2 border-indigo-500 shadow-[0_0_100px_rgba(79,70,229,0.4)] mx-4">
          <h2 className="text-3xl font-black text-yellow-400 mb-4 tracking-tighter">
            Initiation: Phase {wizardStep}/2
          </h2>
          
          {wizardStep === 1 && (
            <div>
              <p className="text-slate-300 mb-6 italic">
                Enter your birth date to calibrate your frequency.
              </p>
              <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className="w-full p-4 rounded-xl bg-slate-800 border-2 border-yellow-400 text-center text-lg font-medium tracking-wider text-white"
              />
              <button
                onClick={handleBirthdaySubmit}
                disabled={!birthday}
                className="w-full mt-6 bg-indigo-600 py-4 rounded-xl font-black disabled:opacity-30 hover:bg-indigo-500 transition-all"
              >
                Calibrate Frequency
              </button>
            </div>
          )}
          
          {wizardStep === 2 && (
            <div>
              <p className="text-slate-300 mb-6">
                Agree to $88/month starting Month 2. Month 1 is free trial.
              </p>
              <button
                onClick={handleWizardComplete}
                className="w-full bg-emerald-600 py-4 rounded-xl font-black hover:bg-emerald-500 transition-all"
              >
                Agree and Enter Dashboard
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <header className="mb-10">
        <h1 className="text-4xl font-black italic" style={{ color: theme.primary }}>CurisPro Dashboard</h1>
        <p className="text-slate-400 mt-2 italic max-w-xl">&quot;{dailyQuote}&quot;</p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <MetricCard 
            title="Personal Revenue" 
            value="$0" 
            subtitle="Target: $5,000 Month 1"
            color={theme.primary}
          />
          <MetricCard 
            title="Client Pulse" 
            value="0" 
            subtitle="Active Policies"
            color={theme.secondary}
          />
          <MetricCard 
            title="Referral Bank" 
            value="0" 
            subtitle="Stack to 33 Months"
            color="#6366F1"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-400 uppercase tracking-wider mb-4">Quick Actions</h2>
          <NavButton icon={Target} label="Lead Gen Hub" href="/dashboard/leadgen" />
          <NavButton icon={Sparkles} label="Brand Accelerator" href="/dashboard/branding" />
          <NavButton icon={Briefcase} label="Group Benefits" href="/dashboard/group" />
          <NavButton icon={BookOpen} label="Training Academy" href="/dashboard/training" />
          <NavButton icon={Settings} label="Settings" href="/dashboard/settings" />
        </div>

        <div className="space-y-4">
          {isOwner ? (
            <div>
              <h2 className="text-lg font-bold text-yellow-400 uppercase tracking-wider mb-4">Owner Tools</h2>
              <div className="space-y-4">
                <NavButton icon={Users} label="Agent Fleet" href="/admin/agents" />
                <NavButton icon={DollarSign} label="Financial Cockpit" href="/admin/finance" />
                <NavButton icon={Sparkles} label="Frequency Scanner" href="/admin/scanner" />
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-bold text-slate-400 uppercase tracking-wider mb-4">Your Frequency</h2>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700">
                <p className="text-slate-400 text-sm">Life Path Number</p>
                <p className="text-5xl font-black mt-2" style={{ color: theme.primary }}>
                  {lifePath || '?'}
                </p>
                <p className="text-slate-500 text-sm mt-2">Lucky Color: {theme.lucky}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <footer className="mt-16 text-center">
        <p className="text-[10px] tracking-[0.5em] text-slate-600 uppercase font-black">
          CODE: 33 • 11 • 22 • 88
        </p>
      </footer>
    </div>
  )
}
