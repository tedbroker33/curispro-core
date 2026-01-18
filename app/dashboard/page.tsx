'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, Users, Zap, GraduationCap, ShieldCheck, Lock, UserCircle, Target, TrendingUp, DollarSign, Briefcase, FileText, Settings, Play, ArrowUp } from 'lucide-react';
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

  // Wizard Logic
  const nextStep = () => {
    if (wizardStep === 1 && !birthday) { alert("Your frequency must be calibrated first."); return; }
    if (wizardStep < 3) setWizardStep(wizardStep + 1);
    else setIsWizardActive(false);
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white font-sans overflow-hidden">
      {/* SIDEBAR */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col space-y-8 shadow-2xl z-20">
        <div className="text-3xl font-black text-indigo-500 italic tracking-tighter">CURISPRO</div>
        <nav className="flex-1 space-y-3">
          {[
            { id: 'cockpit', label: isTed ? 'The Empire' : 'Financial Cockpit', icon: LayoutDashboard },
            { id: 'crm', label: 'CRM / Leads', icon: Briefcase },
            { id: 'armory', label: 'Armory (Templates)', icon: FileText },
            { id: 'academy', label: 'Training Vault', icon: Play },
            { id: 'brand', label: 'Brand Accelerator', icon: Zap },
            { id: 'payments', label: 'Payments (Stripe)', icon: DollarSign },
          ].map((item) => (
            <button key={item.id} id={`step-${item.id}`} onClick={() => { if(!isWizardActive) setActiveTab(item.id)}} className={`relative flex items-center space-x-4 w-full p-4 rounded-2xl transition-all ${activeTab === item.id ? 'bg-indigo-600 shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-slate-800'}`}>
              <item.icon size={20} /> <span className="font-bold text-xs uppercase tracking-wider">{item.label}</span>
            </button>
          ))}
          {isTed && (
            <button onClick={() => setActiveTab('scanner')} className="mt-8 flex items-center space-x-4 w-full p-4 rounded-2xl bg-indigo-900/20 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-900/50 transition-all">
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
        
        {/* FORCED STARTUP WIZARD */}
        {isWizardActive && (
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md z-[60] flex items-center justify-center p-6">
            <div className={`relative bg-slate-900 border-2 border-indigo-500 p-8 rounded-[3rem] max-w-sm text-center shadow-[0_0_100px_rgba(79,70,229,0.3)] transition-all duration-500`}>
              {/* Contextual Arrow Positioning */}
              <div className={`absolute text-yellow-400 animate-bounce transition-all duration-500 ${
                wizardStep === 1 ? "-top-16 right-[-20%] rotate-45" : 
                wizardStep === 2 ? "top-[10%] -left-32 -rotate-90" : 
                "top-[30%] -left-32 -rotate-90"
              }`}>
                <ArrowUp size={60} />
              </div>
              
              <h2 className="text-2xl font-black text-yellow-400 mb-4 uppercase italic">Phase {wizardStep}: Initiation</h2>
              <p className="text-slate-200 text-sm mb-8 leading-relaxed font-medium">
                {wizardStep === 1 && "Priority 1: Frequency Calibration. You must enter your Birth Date in the top right to unlock the Armory."}
                {wizardStep === 2 && "Priority 2: Financial Baseline. Confirm your goal in the Cockpit. We don't guess, we execute."}
                {wizardStep === 3 && "Priority 3: Strategy Sync. Every closing begins in the Training Vault. Watch Module 1 to activate."}
              </p>
              <button onClick={nextStep} className="w-full bg-indigo-600 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-500 transition-all">
                {wizardStep === 3 ? "Activate System" : "Next Command"}
              </button>
            </div>
          </div>
        )}

        {/* TOP CONTROLS */}
        <div className="absolute top-4 right-8 flex items-center space-x-8">
          <div className={`flex items-center space-x-3 bg-slate-900 p-2 px-4 rounded-2xl border ${wizardStep === 1 ? 'border-yellow-400 scale-110' : 'border-slate-800'} shadow-inner transition-all`}>
             <UserCircle size={16} className="text-slate-500" />
             <input type="text" placeholder="Birth Date" value={birthday} onChange={(e) => setBirthday(e.target.value)} className="bg-transparent text-xs outline-none w-20 text-indigo-400 font-black tracking-tighter" />
          </div>
          <div className="text-[10px] text-slate-700 tracking-[0.4em] cursor-pointer hover:text-indigo-400 transition-colors select-none font-black" onClick={() => setTapCount(c => c+1)}>CODE: 33 • 11 • 22 • 88</div>
        </div>

        <header className="mb-20">
          <h1 className="text-5xl font-black italic tracking-tighter uppercase text-slate-100 mb-2">The Armory</h1>
          <div className="h-1.5 w-32 bg-indigo-600"></div>
          <p className="text-slate-500 mt-6 font-serif italic text-xl max-w-2xl italic">"Today's Rhythm: Wealth is found in the alignment of the clock."</p>
        </header>

        {activeTab === 'cockpit' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {isTed ? (
              <>
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                   <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6">Homestead Loading Bar</h3>
                   <p className="text-9xl font-black italic tracking-tighter text-emerald-500 leading-none">24%</p>
                   <div className="mt-10 w-full bg-slate-800 h-4 rounded-full overflow-hidden p-1 shadow-inner">
                      <div className="bg-emerald-500 h-full w-[24%] rounded-full shadow-[0_0_20px_rgba(16,185,129,0.8)] animate-pulse"></div>
                   </div>
                   <p className="text-[10px] text-slate-600 font-bold mt-4 tracking-[0.2em] uppercase italic">Grant Milestone: $5,000</p>
                </div>
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl group hover:border-emerald-500/30 transition-all">
                   <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6">Active Portfolio Agents</h3>
                   <p className="text-9xl font-black italic tracking-tighter text-slate-100 leading-none">355</p>
                   <p className="text-emerald-500 text-xs font-black mt-10 tracking-widest uppercase">↑ 24% Activation Aligned</p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group transition-all">
                   <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6 italic text-indigo-400">Personal Revenue</h3>
                   <p className="text-9xl font-black italic tracking-tighter text-slate-100 leading-none">$0</p>
                </div>
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl group transition-all">
                   <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6 italic text-emerald-500">Client Pulse</h3>
                   <p className="text-9xl font-black italic tracking-tighter text-emerald-500 leading-none">0</p>
                </div>
              </>
            )}
          </div>
        )}

        {/* OTHER TABS - PLACEHOLDERS FOR NOW */}
        {activeTab !== 'cockpit' && (
          <div className="h-96 flex flex-col items-center justify-center text-center space-y-6">
             <div className="w-24 h-24 bg-slate-900 rounded-full border border-slate-800 flex items-center justify-center shadow-inner">
               <ShieldCheck className="text-indigo-500 animate-pulse" size={40} />
             </div>
             <h3 className="text-2xl font-black uppercase tracking-tighter">Module Calibrated</h3>
             <p className="text-slate-500 max-w-sm font-medium italic">"The {activeTab.toUpperCase()} engine is live. Enter leads to begin high-frequency prospecting."</p>
          </div>
        )}

        {/* THE HIDDEN MASTER PANEL */}
        {showHidden && (
          <div className="fixed inset-0 bg-slate-950/98 flex items-center justify-center z-[110] p-6 animate-in zoom-in-95 duration-300">
            <div className="max-w-3xl w-full bg-slate-900 border-2 border-indigo-500 p-16 rounded-[5rem] text-center shadow-[0_0_150px_rgba(79,70,229,0.3)]">
              {qStep < 3 ? (
                <>
                  <h2 className="text-2xl font-black text-yellow-400 mb-8 italic uppercase tracking-[0.3em]">Frequency Audit</h2>
                  <p className="text-slate-200 text-xl mb-12 font-serif italic leading-relaxed">
                    {qStep === 0 && "1. Do you subconsciously audit people’s energy before they even speak?"}
                    {qStep === 1 && "2. Have you noticed that your massive wins happen in cyclical loops?"}
                    {qStep === 2 && "3. Does the number sequence on a clock induce a feeling of 'remembering'?"}
                  </p>
                  <button className="bg-indigo-600 px-12 py-4 rounded-2xl font-black uppercase tracking-widest" onClick={() => setQStep(qStep + 1)}>Yes. Correct.</button>
                </>
              ) : (
                <div className="animate-in fade-in duration-1000">
                  <h2 className="text-4xl font-black text-yellow-400 mb-4 italic uppercase tracking-tighter">Congratulations. You’re Awake.</h2>
                  <p className="text-slate-300 mb-10 leading-relaxed italic text-sm">"We don’t sell hope. We sell alignment. Billionaires use this. I use this. Stop playing on Hard Mode."</p>
                  <button className="w-full bg-indigo-600 py-6 rounded-3xl font-black uppercase text-xl tracking-[0.2em] shadow-2xl hover:bg-indigo-500" onClick={() => setShowHidden(false)}>Activate Master Panel ($33)</button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
