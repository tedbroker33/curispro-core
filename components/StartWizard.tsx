'use client'
import { useState } from 'react'
import { ArrowUp, DollarSign, CheckCircle2 } from 'lucide-react'

export default function StartupWizard({ onComplete }: any) {
  const [step, setStep] = useState(1)
  const [birthday, setBirthday] = useState('')

  const handleNext = () => {
    if (step === 1 && !birthday) return;
    if (step === 3) onComplete();
    else setStep(step + 1);
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl" />
      <div className="relative max-w-md w-full bg-slate-900 border-2 border-yellow-400 p-10 rounded-[3rem] text-center shadow-[0_0_100px_rgba(250,204,21,0.2)]">
        
        {/* Dynamic Arrow */}
        <div className={`absolute text-yellow-400 animate-bounce transition-all duration-700 ${step === 1 ? "-top-20 right-0" : "-left-20 top-1/2 -rotate-90"}`}>
          <ArrowUp size={64} />
        </div>

        <h2 className="text-2xl font-black text-yellow-400 mb-2 uppercase italic">Initiation Phase {step}</h2>
        <p className="text-slate-300 text-sm mb-8 leading-relaxed font-medium">
          {step === 1 && "The system is dead without your frequency. Enter your Birth Date above to calibrate the Armory."}
          {step === 2 && "HANDSHAKE: Connect your bank. Even in trial, we only run with those who commit to the sequence."}
          {step === 3 && "AGREEMENT: You are entering a master-tier environment. $88/mo starts in 30 days. No excuses."}
        </p>

        {step === 1 ? (
            <input type="text" placeholder="MM/DD/YYYY" className="w-full p-4 rounded-2xl bg-slate-800 border border-slate-700 text-center text-xl mb-6 text-indigo-400 font-bold" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
        ) : null}

        <button onClick={handleNext} className="w-full bg-indigo-600 py-4 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-indigo-500 transition-all">
          {step === 1 && !birthday ? "Waiting for Birthday..." : "Execute Command"}
        </button>
      </div>
    </div>
  )
}
