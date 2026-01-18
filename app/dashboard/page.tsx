'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, Users, Zap, GraduationCap, ShieldCheck, Lock, HelpCircle, UserCircle } from 'lucide-react';
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
    <div className="flex min-h-screen bg-slate-950 text-white overflow-hidden font-sans">
      {/* SIDEBAR */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col space-y-8 shadow-2xl z-20">
        <div className="text-3xl font-black text-indigo-500 italic tracking-tighter">CURISPRO</div>
        <nav className="flex-1 space-y-3">
          <button onClick={() => setActiveTab('cockpit')} className={`group flex items-center space-x-4 w-full p-4 rounded-2xl transition-all ${activeTab === 'cockpit' ? 'bg-indigo-600' : 'text-slate-400 hover:bg-slate-800'}`}>
            <LayoutDashboard /> <span className="font-bold">Financial Cockpit</span>
            {wizardStep === 1 && <div className="ml-auto animate-ping w-2 h-2 bg-yellow-400 rounded-full"></div>}
          </button>
          
          {isTed ? (
            <button onClick={() => setActiveTab('scanner')} className={`flex items-center space-x-4 w-full p-4 rounded-2xl transition-all ${activeTab === 'scanner' ? 'bg-indigo-600' : 'text-slate-400 hover:bg-slate-800'}`}>
              <Users /> <span className="font-bold">Frequency Scanner</span>
            </button>
          ) : (
            <div className="flex items-center space-x-4 w-full p-4 rounded-2xl text-slate-700 cursor-not-allowed opacity-50 bg-slate-950/30">
              <Lock size={18}/> <span className="font-bold italic text-xs uppercase tracking-widest">Scanner Locked</span>
            </div>
          )}
          
          <button onClick={() => setActiveTab('academy')} className={`flex items-center space-x-4 w-full p-4 rounded-2xl transition-all ${activeTab === 'academy' ? 'bg-indigo-600' : 'text-slate-400 hover:bg-slate-800'}`}>
            <GraduationCap /> <span className="font-bold">Training Vault</span>
          </button>
        </nav>
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center space-x-3 text-emerald-400">
           <ShieldCheck size={20} /> <span className="text-[10px] font-black uppercase tracking-widest leading-tight text-emerald-500">Vault Status:<br/>Sovereign</span>
        </div>
      </aside>

      {/* MAIN STAGE */}
      <main className="flex-1 p-12 relative overflow-y-auto">
        {/* THE ORIENTATION WIZARD (Sequence Driven) */}
        <div className="fixed bottom-8 right-8 max-w-sm bg-slate-900 border-2 border-indigo-500/50 p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,1)] z-50 animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="flex justify-between items-center mb-4">
             <p className="text-yellow-400 font-bold text-[10px] uppercase tracking-[0.2em]">Initiation Phase: Step {wizardStep}/3</p>
             <button onClick={() => setWizardStep(prev => prev < 3 ? prev + 1 : 1)} className="text-[10px] bg-indigo-600 px-4 py-1 rounded-full font-black uppercase hover:bg-indigo-500">Next</button>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            {wizardStep === 1 && "Start here. Verify your legacy numbers in the Cockpit. It’s the baseline of your frequency."}
            {wizardStep === 2 && "Crucial: Enter your Birth Date in the top right. This calibrates your Daily Rhythm Quote."}
            {wizardStep === 3 && "Advanced: Those who know the code tap the footer text 3 times to unlock the Master Panel."}
          </p>
        </div>

        {/* EASTER EGG FOOTER (Tap to Unlock Hidden Panel) */}
        <div className="absolute top-4 right-8 flex items-center space-x-6">
          <div className="bg-slate-900 p-2 px-4 rounded-xl border border-slate-800 flex items-center space-x-3">
             <UserCircle size={16} className="text-slate-500" />
             <input type="text" placeholder="Birth Date" value={birthday} onChange={(e) => setBirthday(e.target.value)} className="bg-transparent text-xs outline-none w-20 text-indigo-400 font-bold" />
          </div>
          <div className="text-[10px] text-slate-700 tracking-[0.4em] cursor-pointer hover:text-indigo-400 transition-colors select-none font-black" onClick={() => setTapCount(c => c+1)}>CODE: 33 • 11 • 22 • 88</div>
        </div>

        <header className="mb-16">
          <h1 className="text-4xl font-black italic tracking-tighter uppercase text-slate-100">The Armory</h1>
          <div className="h-1 w-24 bg-indigo-600 mt-2 mb-4"></div>
          <p className="text-slate-400 font-serif italic text-lg max-w-2xl leading-relaxed">Today’s Rhythm: "Wealth isn't hunted; it is attracted through perfect alignment with the clock."</p>
        </header>

        {activeTab === 'cockpit' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-1000">
            <div className="bg-slate-900 p-12 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden group transition-all hover:border-indigo-500/30">
               <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><LayoutDashboard size={120} /></div>
               <h3 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Writing Agents</h3>
               <p className="text-8xl font-black italic tracking-tighter text-slate-100 leading-none">355</p>
               <p className="text-emerald-500 text-xs font-black mt-6 tracking-widest uppercase">↑ 24% Activation Aligned</p>
            </div>
            <div className="bg-slate-900 p-12 rounded-[3rem] border border-slate-800 shadow-2xl group transition-all hover:border-emerald-500/30">
               <h3 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Homestead Fund</h3>
               <p className="text-8xl font-black italic tracking-tighter text-emerald-500 leading-none">$0.00</p>
               <div className="mt-8 w-full bg-slate-800 h-3 rounded-full overflow-hidden shadow-inner"><div className="bg-indigo-500 h-full w-[2%] shadow-[0_0_20px_rgba(99,102,241,0.8)]"></div></div>
               <p className="text-[10px] text-slate-600 font-bold mt-4 tracking-widest uppercase italic">Target: $5,000 for Grant Activation</p>
            </div>
          </div>
        )}

        {/* THE HIDDEN PANEL (For those who tap the code) */}
        {showHidden && (
          <div className="fixed inset-0 bg-slate-950/98 flex items-center justify-center z-[100] p-6 animate-in zoom-in-95 duration-300">
            <div className="max-w-2xl w-full bg-slate-900 border-2 border-indigo-500 p-14 rounded-[4rem] text-center shadow-[0_0_150px_rgba(79,70,229,0.4)]">
              <h2 className="text-5xl font-black text-yellow-400 mb-4 italic uppercase tracking-tighter underline decoration-indigo-600 underline-offset-8">The Master Panel</h2>
              <p className="text-slate-200 text-2xl mb-12 font-serif italic leading-relaxed">"Are you prepared to raise your income by 300% by syncing your habits to the code?"</p>
              
              <div className="grid grid-cols-1 gap-6 text-left mb-12">
                 <div className="bg-slate-800/40 p-8 rounded-[2rem] border border-slate-700 hover:border-indigo-400 transition-colors group">
                    <p className="text-indigo-400 font-black uppercase text-xs mb-2 tracking-[0.2em]">Initiation Level: Master ($44/mo)</p>
                    <ul className="text-sm text-slate-400 space-y-2 font-medium">
                       <li>• Life Path 33 Expansion Lessons</li>
                       <li>• Gematria-Aligned Closing Scripts</li>
                       <li>• Universal Launch Timing Radar</li>
                    </ul>
                 </div>
              </div>
              
              <button className="w-full bg-indigo-600 py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-xl hover:bg-indigo-500 hover:scale-[1.02] transition-all shadow-2xl" onClick={() => setShowHidden(false)}>Accept Aligned Path</button>
              <p className="mt-6 text-[10px] text-slate-600 uppercase font-black tracking-widest">Access Private. Visibility: Sovereign.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
