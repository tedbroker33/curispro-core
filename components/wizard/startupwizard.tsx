'use client'
import { useState } from 'react'
import { ArrowDown } from 'lucide-react'

export default function StartupWizard({ onComplete }) {
  const [step, setStep] = useState(1)
  const [birthday, setBirthday] = useState('')

  const calculateLifePath = (date: string) => {
    const digits = date.replace(/\D/g, '').split('').map(Number)
    let sum = digits.reduce((a, b) => a + b, 0)
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0)
    }
    return sum
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      {/* Blur Backdrop */}
      <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" />
      
      {/* Wizard Card */}
      <div className="relative max-w-md w-full bg-slate-900 p-10 rounded-[3rem] border-2 border-indigo-500 shadow-[0_0_100px_rgba(79,70,229,0.4)]">
        {/* Animated Arrow */}
        {step === 1 && (
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown size={48} className="text-yellow-400" />
          </div>
        )}
        
        <h2 className="text-3xl font-black text-yellow-400 mb-4 tracking-tighter">
          Initiation: Phase {step}/3
        </h2>
        
        {step === 1 && (
          <>
            <p className="text-slate-300 mb-6 italic">
              Enter your birth date to calibrate your frequency.
            </p>
            <input
              type="text"
              placeholder="MM/DD/YYYY"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              className="w-full p-4 rounded-xl bg-slate-800 border-2 border-yellow-400 text-center text-lg font-black tracking-wider"
            />
            <button
              onClick={() => {
                const lifePath = calculateLifePath(birthday)
                localStorage.setItem('user_birthday', birthday)
                localStorage.setItem('user_lifepath', lifePath.toString())
                setStep(2)
              }}
              disabled={!birthday.match(/^\d{2}\/\d{2}\/\d{4}$/)}
              className="w-full mt-6 bg-indigo-600 py-4 rounded-xl font-black disabled:opacity-30"
            >
              Calibrate Frequency
            </button>
          </>
        )}
        
        {step === 2 && (
          <>
            <p className="text-slate-300 mb-6">
              Connect your bank account for instant payouts.
            </p>
            <button
              onClick={() => setStep(3)}
              className="w-full bg-indigo-600 py-4 rounded-xl font-black"
            >
              Link Bank Account
            </button>
          </>
        )}
        
        {step === 3 && (
          <>
            <p className="text-slate-300 mb-6">
              Agree to $88/month starting Month 2. Month 1 is free.
            </p>
            <button
              onClick={onComplete}
              className="w-full bg-emerald-600 py-4 rounded-xl font-black"
            >
              Agree & Enter Dashboard
            </button>
          </>
        )}
      </div>
    </div>
  )
}
