'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, Users, Zap, GraduationCap, ShieldCheck, Lock, UserCircle, Target, TrendingUp } from 'lucide-react';
import { OWNER_EMAIL } from '../../lib/constants';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('cockpit');
  const [tapCount, setTapCount] = useState(0);
  const [showHidden, setShowHidden] = useState(false);
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [wizardStep, setWizardStep] = useState(1);

  useEffect(() => {
    setEmail(localStorage.getItem('curispro_email') || '');
    if (tapCount >= 3) { setShowHidden(true); setTapCount(0); }
  }, [tapCount]);

  const isTed = email === OWNER_EMAIL;

  return (
    <div className="flex min-h-screen bg-slate-950 text-white font-sans">
      {/* SIDEBAR */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col space-y-8 shadow-2xl z-20">
        <div className="text-3xl font-black text-indigo-500 italic tracking-tighter">CURISPRO</div>
        <nav className="flex-1 space-y-3">
          <button onClick={() => setActiveTab('cockpit')} className={`group flex items-center space-x-4 w-full p-4 rounded-2xl transition-all ${activeTab === 'cockpit' ? 'bg-indigo-600 shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-slate-800'}`}>
            <LayoutDashboard size={20} /> <span className="font-bold text-sm uppercase tracking-wider">Financial Cockpit</span>
            {wizardStep === 1 && <div className="ml-auto animate-ping w-2 h-2 bg-yellow-400 rounded-full"></div>}
          </button>
          
          {isTed ? (
            <button onClick={() => setActiveTab('scanner')} className={`flex items-center space-x-4 w-full p-4 rounded-2xl transition-all ${activeTab === 'scanner' ? 'bg-indigo-600 shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-slate-800'}`}>
              <Target size={20} /> <span className="font-bold text-sm uppercase tracking-wider">Frequency Scanner</span>
            </button>
          ) : (
            <div className="flex items-center space-x-4 w-full p-4 rounded-2xl text-slate-700 bg-slate-950/20 opacity-40 cursor-not-allowed">
              <Lock size={18}/> <span className="font-bold text-xs uppercase tracking-widest italic">Alignment Locked</span>
            </div>
          )}
          
          <button onClick={() => setActiveTab('academy')} className={`flex items-center space-x-4 w-full p-4 rounded-2xl transition-all ${activeTab === 'academy' ? 'bg-indigo-600' : 'text-slate-400 hover:bg-slate-800'}`}>
            <GraduationCap size={20} /> <span className="font-bold text-sm uppercase tracking-wider">Training Vault</span>
          </button>
        </nav>

        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center space-x-3 text-emerald-400">
           <ShieldCheck size={20} /> <span className="text-[10px] font-black uppercase tracking-widest leading-tight">Identity Status:<br/>Sovereign</span>
        </div>
      </aside>

      {/* MAIN STAGE */}
      <main className="flex-1 p-12 relative overflow-y-auto">
        
        {/* THE ORIENTATION WIZARD (Fixed Logic) */}
        <div className="fixed bottom-8 right-8 max-w-sm bg-slate-900 border-2 border-indigo-500/50 p-6 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-50 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex justify-between items-center mb-4">
             <p className="text-yellow-400 font-black text-[10px] uppercase tracking-[0.25em]">Sequence Phase: Step {wizardStep}/3</p>
             <button onClick={() => setWizardStep(prev => prev < 3 ? prev + 1 : 1)} className="text-[10px] bg-indigo-600 px-4 py-1 rounded-full font-black uppercase">Next</button>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-medium italic">
            {wizardStep === 1 && "Start here. Verify your legacy numbers in the Cockpit. It is the baseline of your rhythm."}
            {wizardStep === 2 && "Crucial: Set your Birth Date in the top right. This calibrates your daily outreach quotes."}
            {wizardStep === 3 && "Hidden: Those who know the rhythm tap the footer code 3 times to unlock the expansion panel."}
          </p>
        </div>

        {/* EASTER EGG TRIGGER */}
        <div className="absolute top-4 right-8 flex items-center space-x-8">
          <div className="flex items-center space-x-3 bg-slate-900 p-2 px-4 rounded-2xl border border-slate-800 shadow-inner">
             <UserCircle size={16} className="text-slate-500" />
             <input type="text" placeholder="Birth Date" value={birthday} onChange={(e) => setBirthday(e.target.value)} className="bg-transparent text-xs outline-none w-20 text-indigo-400 font-black tracking-tighter" />
          </div>
          <div className="text-[10px] text-slate-700 tracking-[0.4em] cursor-pointer hover:text-indigo-400 transition-colors select-none font-black" onClick={() => setTapCount(c => c+1)}>CODE: 33 • 11 • 22 • 88</div>
        </div>

        <header className="mb-20">
          <h1 className="text-5xl font-black italic tracking-tighter uppercase text-slate-100 mb-2">The Armory</h1>
          <div className="h-1.5 w-32 bg-indigo-600"></div>
          <p className="text-slate-500 mt-6 font-serif italic text-xl max-w-2xl">"Today's Rhythm: Wealth is not found in the hustle; it is found in the alignment of the clock."</p>
        </header>

        {activeTab === 'cockpit' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-indigo-500/30 transition-all">
               <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6">Active Portfolio Agents</h3>
               <p className="text-9xl font-black italic tracking-tighter text-slate-100 leading-none">355</p>
               <div className="mt-10 flex items-center space-x-2 text-emerald-400 font-black text-xs uppercase tracking-widest">
                  <TrendingUp size={16} /> <span>↑ 24% Activation Aligned</span>
               </div>
            </div>
            <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl group hover:border-emerald-500/30 transition-all">
               <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6">Homestead Reserve</h3>
               <p className="text-9xl font-black italic tracking-tighter text-emerald-500 leading-none">$0.00</p>
               <div className="mt-10 w-full bg-slate-800 h-4 rounded-full overflow-hidden p-1 shadow-inner">
                  <div className="bg-indigo-500 h-full w-[2%] rounded-full shadow-[0_0_20px_rgba(99,102,241,0.8)] animate-pulse"></div>
               </div>
               <p className="text-[10px] text-slate-600 font-bold mt-4 tracking-[0.2em] uppercase italic">Target: $5,000 for Grant Activation</p>
            </div>
          </div>
        )}

        {/* HIDDEN MASTER PANEL */}
        {showHidden && (
          <div className="fixed inset-0 bg-slate-950/98 flex items-center justify-center z-[100] p-6 animate-in zoom-in-95 duration-300">
            <div className="max-w-3xl w-full bg-slate-900 border-2 border-indigo-500 p-16 rounded-[5rem] text-center shadow-[0_0_150px_rgba(79,70,229,0.3)]">
              <h2 className="text-4xl font-black text-yellow-400 mb-6 italic uppercase tracking-tighter underline decoration-indigo-600 underline-offset-8 decoration-4">The Master Panel</h2>
              <p className="text-slate-200 text-2xl mb-12 font-serif italic leading-relaxed">"Are you prepared to raise your income by 300% by syncing your heartbeat to the timing of the world?"</p>
              
              <div className="grid grid-cols-1 gap-6 text-left mb-12">
                 <div className="bg-slate-800/40 p-8 rounded-[2.5rem] border border-slate-700 hover:border-indigo-400 transition-colors group">
                    <p className="text-indigo-400 font-black uppercase text-xs mb-3 tracking-[0.25em]">Expansion Module: Master ($44/mo)</p>
                    <ul className="text-sm text-slate-300 space-y-3 font-medium">
                       <li className="flex items-center space-x-3"><Zap size={14} className="text-yellow-400"/> <span>Life Path Lessons (1-33)</span></li>
                       <li className="flex items-center space-x-3"><Zap size={14} className="text-yellow-400"/> <span>Gematria-Aligned Prospecting Scripts</span></li>
                       <li className="flex items-center space-x-3"><Zap size={14} className="text-yellow-400"/> <span>Universal Timing Launch Radar</span></li>
                    </ul>
                 </div>
              </div>
              
              <button className="w-full bg-indigo-600 py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-xl hover:bg-indigo-500 hover:scale-[1.02] transition-all shadow-2xl active:scale-95" onClick={() => setShowHidden(false)}>Accept Aligned Path</button>
              <p className="mt-8 text-[10px] text-slate-600 uppercase font-black tracking-widest opacity-50">Sovereign Encryption: ON | Master Tier: Pending</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
