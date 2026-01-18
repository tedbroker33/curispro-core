'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BETA_LIST, ELITE_AGENTS } from '../lib/constants';

export default function Home() {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleEntry = () => {
    const lowerEmail = email.toLowerCase().trim();
    if (BETA_LIST.includes(lowerEmail) || ELITE_AGENTS[lowerEmail as keyof typeof ELITE_AGENTS]) {
      setShowModal(true);
    } else { alert("Calibrating Frequency for Standard Access..."); }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white p-6">
      <div className="max-w-md w-full bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-2xl text-center">
        <h1 className="text-5xl font-bold tracking-tighter text-indigo-500 mb-8">CurisPro</h1>
        <input type="email" placeholder="Agent Credentials" className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-center text-xl mb-6" onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleEntry} className="w-full bg-indigo-600 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all">Activate Frequency</button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-6">
          <div className="bg-slate-900 border-2 border-indigo-500 p-8 rounded-3xl max-w-sm w-full text-center shadow-[0_0_50px_rgba(79,70,229,0.5)]">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">QUICK REMINDER</h2>
            <p className="text-slate-300 text-sm mb-6 italic">"Coffee is for Closers. Hit $5,000 in Month 1 to waive Month 2. Hit $10,000 to waive Month 3. You are part of the 5%."</p>
            <button onClick={() => router.push('/dashboard')} className="w-full bg-indigo-600 py-3 rounded-xl font-bold">ENTER DASHBOARD</button>
          </div>
        </div>
      )}
    </main>
  );
}
