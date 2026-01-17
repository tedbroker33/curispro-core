       'use client'
import { useState, useEffect } from 'react';
// DIRECT PATH FIX BELOW
import { STANDARD_PRICE, BETA_PRICE, BETA_LIST, ELITE_AGENTS } from '../lib/constants';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isChosen, setIsChosen] = useState(false);
  const [eliteData, setEliteData] = useState<any>(null);

  useEffect(() => {
    const lowerEmail = email.toLowerCase().trim();
    setIsChosen(BETA_LIST.includes(lowerEmail));
    setEliteData(ELITE_AGENTS[lowerEmail as keyof typeof ELITE_AGENTS] || null);
  }, [email]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center bg-slate-950 text-white">
      <div className="max-w-xl w-full space-y-8 bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-2xl">
        <h1 className="text-6xl font-bold tracking-tighter text-indigo-500">CurisPro</h1>
        
        {eliteData ? (
          <div className="animate-pulse">
            <h2 className="text-2xl font-bold text-yellow-400">Welcome Home, {eliteData.name}</h2>
            <p className="italic text-slate-400 my-4">"{eliteData.quote}"</p>
            <div className="p-4 bg-indigo-600 rounded-xl font-bold">
              {eliteData.trial === 1095 ? '3 Years' : '88 Days'} ACCESS GRANTED
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <input 
              type="email" 
              placeholder="Enter Agent Email" 
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-center text-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            {isChosen ? (
              <div className="p-6 bg-emerald-600/20 border border-emerald-500 rounded-2xl">
                <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm">You Have Been Chosen</p>
                <p className="text-4xl font-bold mt-2">${BETA_PRICE}<span className="text-lg opacity-50">/mo</span></p>
                <p className="text-xs text-emerald-500/80 mt-2">14-Day Comped Initiation Active</p>
              </div>
            ) : (
              <div className="p-6 bg-slate-800/50 rounded-2xl">
                <p className="text-3xl font-bold">${STANDARD_PRICE}<span className="text-lg opacity-50">/mo</span></p>
                <p className="text-xs text-slate-500 mt-2">Aligned. Optimized. Unstoppable.</p>
              </div>
            )}
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105">
              {email ? 'Activate Frequency' : 'Enter Credentials'}
            </button>
          </div>
        )}
        <div className="pt-8 text-[10px] tracking-[0.5em] text-slate-600 uppercase">Code: 33 • 11 • 22 • 88</div>
      </div>
    </main>
  );
}
