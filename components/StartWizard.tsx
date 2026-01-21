'use client'
import { useState } from 'react'
import { ArrowUpRight, CheckCircle2, Lock } from 'lucide-react'

export default function StartupWizard({ onComplete }) {
  const [step, setStep] = useState(1)
  const [birthday, setBirthday] = useState('')

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl" />
      
      <div className="relative max-w-lg w-full bg-slate-900 p-12 rounded-[4rem] border-2 border-indigo-500 shadow-[0_0_150px_rgba(79,70,229,0.3)]">
        {/* Dynamic Arrow Logic */}
        <div className={`absolute text-yellow-400 animate-bounce transition-all duration-700 ${
          step === 1 ? "-top-20 right-10 rotate-[225deg]" : "-left-20 top-1/2 -rotate-90"
        }`}>
          <ArrowUpRight size={80} />
        </div>

        <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-4">Phase {step}: Initiation</h2>
        
        {step === 1 && (
          <div className="space-y-6">
            <p className="text-slate-400 font-medium italic">"Your frequency must be identified. Enter your Birth Date below to unlock the Armory."</p>
            <input 
              type="text" placeholder="MM/DD/YYYY" value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              className="w-full p-6 rounded-3xl bg-slate-800 border-2 border-yellow-400 text-center text-3xl font-black text-indigo-400"
            />
            <button onClick={() => setStep(2)} disabled={!birthday} className="w-full bg-indigo-600 py-5 rounded-3xl font-black uppercase tracking-widest disabled:opacity-20">Calibrate Frequency</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <p className="text-slate-400 font-medium italic">"The bank must be linked. Even in the trial, the handshake is mandatory."</p>
            <button onClick={() => setStep(3)} className="w-full bg-indigo-600 py-5 rounded-3xl font-black uppercase tracking-widest flex items-center justify-center space-x-3">
              <DollarSign /> <span>Link Stripe Connect</span>
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <p className="text-slate-400 font-medium italic">"Agree to the $88/mo frequency. Activation starts in 30 days."</p>
            <button onClick={onComplete} className="w-full bg-emerald-600 py-5 rounded-3xl font-black uppercase tracking-widest">Agree & Enter Dashboard</button>
          </div>
        )}
      </div>
    </div>
  )
}
