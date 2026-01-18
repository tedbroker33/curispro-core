'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, Users, Zap, GraduationCap, ShieldCheck, Lock, UserCircle, Target, TrendingUp, DollarSign, Briefcase, FileText, Settings, Play, ArrowDown, ArrowLeft } from 'lucide-react';
import { OWNER_EMAIL } from '../../lib/constants';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('cockpit');
  const [tapCount, setTapCount] = useState(0);
  const [showHidden, setShowHidden] = useState(false);
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [wizardStep, setWizardStep] = useState(1);
  const [isWizardActive, setIsWizardActive] = useState(true);

  useEffect(() => {
    setEmail(localStorage.getItem('curispro_email') || '');
    if (tapCount >= 3) { setShowHidden(true); setTapCount(0); }
  }, [tapCount]);

  const isTed = email.toLowerCase().trim() === OWNER_EMAIL.toLowerCase().trim();

  // Sequential Logic
  const handleWizardNext = () => {
    if (wizardStep === 1 && !birthday) return; // Block if birthday empty
    if (wizardStep === 3) setIsWizardActive(false);
    else setWizardStep(wizardStep + 1);
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white font-sans overflow-hidden relative">
      
      {/* SIDEBAR */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col space-y-8 shadow-2xl z-20">
        <div className="text-3xl font-black text-indigo-500 italic tracking-tighter">CURISPRO</div>
        <nav className="flex-1 space-y-3">
          {[
            { id: 'cockpit', label: isTed ? 'Empire Cockpit' : 'Personal Alignment', icon: LayoutDashboard },
            { id: 'crm', label: 'CRM / Leads', icon: Briefcase },
            { id: 'armory', label: 'Templates', icon: FileText },
            { id: 'academy', label: 'Training Vault', icon: Play },
            { id: 'brand', label: 'Accelerator', icon: Zap },
            { id: 'payments', label: 'Stripe Bank', icon: DollarSign },
          ].map((item) => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} className={`flex items-center space-x-4 w-full p-4 rounded-2xl transition-all ${activeTab === item.id ? 'bg-indigo-600 shadow-lg' : 'text-slate-400 hover:bg-slate-800'}`}>
              <item.icon size={20} /> <span className="font-bold text-xs uppercase tracking-wider">{item.label}</span>
            </button>
          ))}
          {isTed && (
            <button onClick={() => setActiveTab('scanner')} className="mt-8 flex items-center space-x-4 w-full p-4 rounded-2xl bg-indigo-900/20 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-600 hover:text-white transition-all">
              <Target size={20} /> <span className="font-bold text-xs uppercase tracking-widest">GG-Scanner</span>
            </button>
          )}
        </nav>
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center space-x-3 text-emerald-400">
           <ShieldCheck size={20} /> <span className="text-[10px] font-black uppercase tracking-widest leading-tight">Identity:<br/>Sovereign</span>
        </div>
      </aside>

      {/* MAIN STAGE */}
      <main className="flex-1 p-12 relative overflow-y-auto">
        
        {/* SEQUENTIAL WIZARD WINDOW */}
        {isWizardActive && (
          <div className={`absolute z-[100] transition-all duration-1000 ${
            wizardStep === 1 ? "top-4 right-32" : 
            wizardStep === 2 ? "top-48 left-8" : 
            "top-96 left-8"
          }`}>
            <div className="bg-slate-900 border-2 border-yellow-400 p-6 rounded-3xl w-72 shadow-[0_0_50px_rgba(250,204,21,0.2)] relative">
               <div className={`absolute text-yellow-400 animate-bounce ${
                 wizardStep === 1 ? "-top-10 right-10" : 
                 "-left-12 top-1/2 -rotate-90"
               }`}>
                 <ArrowDown size={40} className={wizardStep > 1 ? "rotate-90" : ""} />
               </div>
               <h3 className="text-yellow-400 font-black text-xs uppercase tracking-widest mb-2 italic">Instruction Phase {wizardStep}</h3>
               <p className="text-white text-xs leading-relaxed mb-4">
                 {wizardStep === 1 && "The system is dead without your frequency. Enter your Birth Date above to activate."}
                 {wizardStep === 2 && "Verification: View your Personal Alignment cockpit to confirm your Month 1 goals."}
                 {wizardStep === 3 && "Indoctrination: Enter the Training Vault. Watch Module 1 to unlock the Lead Armory."}
               </p>
               <button onClick={handleWizardNext} className="w-full bg-yellow-400 text-black py-2 rounded-xl font-black uppercase text-[10px] tracking-tighter hover:bg-white transition-all">
                 {wizardStep === 1 && !birthday ? "Waiting for Birthday..." : "Execute Command"}
               </button>
            </div>
          </div>
        )}

        {/* TOP BAR */}
        <div className="absolute top-4 right-8 flex items-center space-x-8">
          <div className={`flex items-center space-x-3 bg-slate-900 p-2 px-4 rounded-2xl border ${wizardStep === 1 ? 'border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)]' : 'border-slate-800'}`}>
             <UserCircle size={16} className="text-slate-500" />
             <input type="text" placeholder="MM/DD/YYYY" value={birthday} onChange={(e) => setBirthday(e.target.value)} className="bg-transparent text-xs outline-none w-24 text-indigo-400 font-black tracking-tighter" />
          </div>
          <div className="text-[10px] text-slate-700 tracking-[0.4em] cursor-pointer hover:text-indigo-400 select-none font-black" onClick={() => setTapCount(c => c+1)}>CODE: 33 • 11 • 22 • 88</div>
        </div>

        <header className="mb-20">
          <h1 className="text-5xl font-black italic tracking-tighter uppercase text-slate-100 mb-2">The Armory</h1>
          <div className="h-1.5 w-32 bg-indigo-600"></div>
          <p className="text-slate-500 mt-6 font-serif italic text-xl max-w-2xl italic">"Wealth is attracted through perfect alignment with the clock."</p>
        </header>

        {activeTab === 'cockpit' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {isTed ? (
              <>
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden">
                   <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6">Homestead Fund Progress</h3>
                   <p className="text-9xl font-black italic tracking-tighter text-emerald-500 leading-none">24%</p>
                   <div className="mt-10 w-full bg-slate-800 h-4 rounded-full overflow-hidden p-1 shadow-inner">
                      <div className="bg-emerald-500 h-full w-[24%] rounded-full shadow-[0_0_20px_rgba(16,185,129,0.8)] animate-pulse"></div>
                   </div>
                   <p className="text-[10px] text-slate-600 font-bold mt-4 tracking-[0.2em] uppercase italic">Grant Milestone: $5,000</p>
                </div>
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl">
                   <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6 italic">Total Agency Fleet</h3>
                   <p className="text-9xl font-black italic tracking-tighter text-slate-100 leading-none">355</p>
                   <p className="text-emerald-500 text-xs font-black mt-10 tracking-widest uppercase">↑ 24% Activation Aligned</p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden">
                   <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6 italic text-indigo-400">Personal Revenue</h3>
                   <p className="text-9xl font-black italic tracking-tighter text-slate-100 leading-none">$0</p>
                   <p className="text-emerald-400 text-xs font-black mt-10 tracking-widest uppercase">Target: $5,000 Month 1 Bonus</p>
                </div>
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl">
                   <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6 italic text-emerald-500">Client Pulse</h3>
                   <p className="text-9xl font-black italic tracking-tighter text-emerald-500 leading-none">0</p>
                   <p className="text-slate-400 text-xs font-black mt-10 tracking-widest uppercase">Active Policies Locked</p>
                </div>
              </>
            )}
          </div>
        )}

        {/* OTHER MODULES PLACEHOLDER */}
        {activeTab !== 'cockpit' && (
          <div className="h-96 flex flex-col items-center justify-center text-center space-y-6">
             <div className="w-24 h-24 bg-slate-900 rounded-full border border-slate-800 flex items-center justify-center shadow-inner">
               <ShieldCheck className="text-indigo-500 animate-pulse" size={40} />
             </div>
             <h3 className="text-2xl font-black uppercase tracking-tighter italic">Module Active</h3>
             <p className="text-slate-500 max-w-sm font-medium italic">"The {activeTab} engine is running at 33/6 frequency. Align your habits to see results."</p>
          </div>
        )}
      </main>
    </div>
  );
}
