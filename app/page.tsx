'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ELITE_AGENTS } from '../lib/constants';

export default function Home() {
  const [email, setEmail] = useState('');
  const [elite, setElite] = useState<any>(null);
  const router = useRouter();

  const handleEntry = () => {
    const lowerEmail = email.toLowerCase().trim();
    if (!lowerEmail) return;
    window.localStorage.setItem('curispro_email', lowerEmail);
    const eliteData = ELITE_AGENTS[lowerEmail];
    if (eliteData) { setElite(eliteData); } 
    else { router.push('/dashboard'); }
  };

  if (elite) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white p-6">
        <div className="max-w-md w-full bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-2xl text-center border-t-indigo-500">
          <h1 className="text-5xl font-bold tracking-tighter text-indigo-500 mb-12 italic">CurisPro</h1>
          <div className="flex flex-col items-center justify-center space-y-2 mb-10">
            <h2 className="text-xl font-bold text-slate-400 uppercase tracking-[0.3em]">Welcome Home</h2>
            <h2 className="text-4xl font-black text-yellow-400 font-serif underline decoration-indigo-500/50 underline-offset-8 decoration-4 leading-tight">{elite.name}</h2>
          </div>
          <p className="text-sm text-slate-300 mb-12 italic font-light leading-relaxed px-4">"{elite.quote}"</p>
          <button onClick={() => router.push('/dashboard')} className="w-full bg-indigo-600 py-4 rounded-xl font-black tracking-widest uppercase hover:bg-indigo-500 transition-all shadow-[0_0_30px_rgba(79,70,229,0.5)] animate-pulse">
            {elite.freeDays === 1095 ? '3 Years' : '88 Days'} ACCESS GRANTED
          </button>
          <p className="mt-8 text-[10px] tracking-[0.5em] text-slate-600 uppercase font-black">CODE: 33 • 11 • 22 • 88</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white p-6 text-center">
      <div className="max-w-md w-full bg-slate-900 p-12 rounded-3xl border border-slate-800 shadow-2xl">
        <h1 className="text-5xl font-bold tracking-tighter text-indigo-500 mb-10 italic text-center">CurisPro</h1>
        <div className="space-y-4">
          <input type="email" placeholder="Agent Credentials" className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-center text-lg mb-2 focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:opacity-30" onChange={(e) => setEmail(e.target.value)} />
          <button onClick={handleEntry} className="w-full bg-indigo-600 hover:bg-indigo-700 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-[1.01]">Activate Frequency</button>
        </div>
        <p className="mt-10 text-[10px] tracking-[0.5em] text-slate-600 uppercase font-black">CODE: 33 • 11 • 22 • 88</p>
      </div>
    </main>
  );
}
