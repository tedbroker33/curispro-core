'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ELITE_AGENTS } from '../lib/constants';

export default function Home() {
  const [email, setEmail] = useState('');
  const [elite, setElite] = useState<any>(null);
  const router = useRouter();

  const handleEntry = () => {
    const lower = email.toLowerCase().trim();
    if (!lower) return;
    window.localStorage.setItem('curispro_email', lower);
    const eliteData = ELITE_AGENTS[lower];
    if (eliteData) {
      setElite(eliteData);
    } else {
      router.push('/dashboard');
    }
  };

  if (elite) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white p-6">
        <div className="max-w-md w-full bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-2xl text-center border-t-indigo-500">
          <h1 className="text-5xl font-bold tracking-tighter text-indigo-500 mb-8 italic">CurisPro</h1>
          <h2 className="text-2xl font-bold text-yellow-400 mb-2 font-serif">Welcome Home, {elite.name}</h2>
          <p className="text-sm text-slate-400 mb-8 italic">{elite.quote}</p>
          <button onClick={() => router.push('/dashboard')} className="w-full bg-indigo-600 py-4 rounded-xl font-black tracking-widest uppercase hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)]">
            {elite.freeDays === 1095 ? '3 Years' : '88 Days'} ACCESS GRANTED
          </button>
          <p className="mt-8 text-[10px] tracking-[0.5em] text-slate-600 uppercase">CODE: 33 • 11 • 22 • 88</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white p-6">
      <div className="max-w-md w-full bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-2xl text-center">
        <h1 className="text-5xl font-bold tracking-tighter text-indigo-500 mb-10 italic">CurisPro</h1>
        <input type="email" placeholder="Agent Credentials" className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-center text-lg mb-6 focus:ring-2 focus:ring-indigo-500 outline-none" onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleEntry} className="w-full bg-indigo-600 hover:bg-indigo-700 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-[1.02]">Activate Frequency</button>
        <p className="mt-8 text-[10px] tracking-[0.5em] text-slate-600 uppercase">CODE: 33 • 11 • 22 • 88</p>
      </div>
    </main>
  );
}          />
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
}          />
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
