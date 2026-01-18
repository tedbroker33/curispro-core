'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BETA_LIST, ELITE_AGENTS } from '../lib/constants';

export default function Home() {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [welcomeTitle, setWelcomeTitle] = useState('Welcome Back');
  const [quote, setQuote] = useState('');
  const router = useRouter();

  const handleEntry = () => {
    const lowerEmail = email.toLowerCase().trim();
    const elite = ELITE_AGENTS[lowerEmail as keyof typeof ELITE_AGENTS];
    if (elite || BETA_LIST.includes(lowerEmail)) {
      setWelcomeTitle(elite ? `Welcome Home, ${elite.name}` : 'You Have Been Chosen');
      setQuote(elite ? elite.quote : "You are part of the 5% that understands the code.");
      setShowModal(true);
    } else {
      alert("Calibrating Frequency for Standard Access...");
      router.push('/dashboard'); // Standard entry
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0a0f1e] text-white p-6 font-sans">
      <div className="max-w-md w-full bg-[#111827]/80 backdrop-blur-xl p-12 rounded-[40px] border border-slate-800 shadow-[0_0_80px_rgba(0,0,0,0.5)] text-center">
        <h1 className="text-6xl font-bold tracking-tighter text-[#4f46e5] mb-12">CurisPro</h1>
        
        <div className="space-y-4 mb-8">
          <input 
            type="email" 
            placeholder="Agent Credentials" 
            className="w-full p-5 rounded-2xl bg-[#1f2937] border border-slate-700 text-center text-xl focus:ring-2 focus:ring-[#4f46e5] outline-none transition-all"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button 
            onClick={handleEntry}
            className="w-full bg-[#4f46e5] hover:bg-[#4338ca] py-5 rounded-2xl font-bold text-xl shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
          >
            Activate Frequency
          </button>
        </div>
        <p className="text-[10px] tracking-[0.6em] text-slate-500 uppercase">Code: 33 • 11 • 22 • 88</p>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/98 backdrop-blur-md flex items-center justify-center z-50 p-6">
          <div className="bg-[#111827] border-2 border-[#4f46e5] p-10 rounded-[40px] max-w-sm w-full text-center shadow-[0_0_100px_rgba(79,70,229,0.3)]">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">{welcomeTitle}</h2>
            <p className="text-slate-300 text-lg italic mb-8">"{quote}"</p>
            <div className="p-4 bg-[#4f46e5]/10 rounded-2xl border border-indigo-500/30 mb-8">
              <p className="text-xs uppercase font-bold tracking-widest text-indigo-400">Status: Access Granted</p>
            </div>
            <button 
              onClick={() => router.push(`/dashboard?email=${email}`)}
              className="w-full bg-[#4f46e5] py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700"
            >
              ENTER DASHBOARD
            </button>
          </div>
        </div>
      )}
    </main>
  );
}}
