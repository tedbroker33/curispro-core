'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, Users, Zap, GraduationCap, ShieldCheck, Lock, UserCircle, Target, DollarSign, Briefcase, FileText, Settings, Play, ArrowDown, ArrowLeft, MousePointer2 } from 'lucide-react';
import { OWNER_EMAIL } from '../../lib/constants';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('cockpit');
  const [tapCount, setTapCount] = useState(0);
  const [showHidden, setShowHidden] = useState(false);
  const [qStep, setQStep] = useState(0);
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [wizardStep, setWizardStep] = useState(1);
  const [isWizardActive, setIsWizardActive] = useState(true);

  useEffect(() => {
    setEmail(localStorage.getItem('curispro_email') || '');
    if (tapCount >= 3) { setShowHidden(true); setTapCount(0); }
  }, [tapCount]);

  const isTed = email.toLowerCase().trim() === OWNER_EMAIL.toLowerCase().trim();

  // Wizard Progression
  const handleWizardNext = () => {
    if (wizardStep === 1 && !birthday) return;
    if (wizardStep < 3) setWizardStep(wizardStep + 1);
    else setIsWizardActive(false);
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white font-sans overflow-hidden relative">
      
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col space-y-8 shadow-2xl z-20">
        <div className="text-3xl font-black text-indigo-500 italic tracking-tighter">CURISPRO</div>
        <nav className="flex-1 space-y-3 relative">
          
          {/* Wizard Step 2 Target Arrow */}
          {isWizardActive && wizardStep === 2 && (
            <div className="absolute -right-4 top-4 z-50 animate-in slide-in-from-left-4">
              <div className="bg-yellow-400 text-black p-4 rounded-2xl w-56 shadow-2xl border-2 border-white relative">
                 <ArrowLeft className="absolute -left-8 top-1/2 -translate-y-1/2 text-yellow-400" size={32} />
                 <p className="font-black text-[10px] uppercase tracking-tighter">Phase 2: The Baseline</p>
                 <p className="text-[11px] font-bold mt-1">Open your Cockpit to see your $5,000 Milestone.</p>
                 <button onClick={handleWizardNext} className="mt-3 w-full bg-black text-white py-1 rounded-lg text-[10px] font-black uppercase">Confirmed</button>
              </div>
            </div>
          )}

          {[
            { id: 'cockpit', label: isTed ? 'The Empire' : 'Financial Cockpit', icon: LayoutDashboard },
            { id: 'crm', label: 'CRM / Leads', icon: Briefcase },
            { id: 'armory', label: 'Armory (Templates)', icon: FileText },
            { id: 'academy', label: 'Training Academy', icon: Play },
            { id: 'brand', label: 'Brand Accelerator', icon: Zap },
            { id: 'payments', label: 'Payments (Stripe)', icon: DollarSign },
          ].map((item) => (
            <button key={item.id} onClick={() => { if(!isWizardActive) setActiveTab(item.id) }} className={`relative flex items-center space-x-4 w-full p-4 rounded-2xl transition-all ${activeTab === item.id ? 'bg-indigo-600 shadow-lg' : 'text-slate-400 hover:bg-slate-800'}`}>
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
           <ShieldCheck size={20} /> <span className="text-[10px] font-black uppercase tracking-widest leading-tight">Identity: Sovereign</span>
        </div>
      </aside>

      {/* MAIN STAGE */}
      <main className="flex-1 p-12 relative overflow-y-auto">
        
        {/* TOP CONTROLS + WIZARD STEP 1 */}
        <div className="absolute top-4 right-8 flex items-center space-x-8">
          <div className="relative">
            <div className={`flex items-center space-x-3 bg-slate-900 p-2 px-4 rounded-2xl border ${birthday ? 'border-emerald-500' : 'border-yellow-400 animate-pulse'} shadow-inner`}>
               <UserCircle size={16} className="text-slate-500" />
               <input type="text" placeholder="MM/DD/YYYY" value={birthday} onChange={(e) => setBirthday(e.target.value)} className="bg-transparent text-xs outline-none w-24 text-indigo-400 font-black tracking-tighter" />
            </div>
            {isWizardActive && wizardStep === 1 && (
              <div className="absolute top-14 right-0 z-50 animate-in fade-in zoom-in-95">
                <div className="bg-yellow-400 text-black p-5 rounded-3xl w-64 shadow-[0_0_50px_rgba(250,204,21,0.4)] border-2 border-white">
                  <ArrowDown className="absolute -top-10 right-10 text-yellow-400" size={32} />
                  <p className="font-black text-[11px] uppercase tracking-tighter italic">Phase 1: Calibration</p>
                  <p className="text-[12px] font-bold mt-1">You must enter your Birth Date to unlock the frequency logic.</p>
                  <button onClick={handleWizardNext} disabled={!birthday} className="mt-4 w-full bg-black text-white py-2 rounded-xl text-[10px] font-black uppercase disabled:opacity-30">
                    {birthday ? "Proceed" : "Waiting..."}
                  </button>
                </div>
              </div>
            )}
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
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                   <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6">Homestead Loading Bar</h3>
                   <p className="text-9xl font-black italic tracking-tighter text-emerald-500 leading-none">24%</p>
                   <div className="mt-10 w-full bg-slate-800 h-4 rounded-full overflow-hidden p-1 shadow-inner">
                      <div className="bg-emerald-500 h-full w-[24%] rounded-full shadow-[0_0_20px_rgba(16,185,129,0.8)] animate-pulse"></div>
                   </div>
                   <p className="text-[10px] text-slate-600 font-bold mt-4 tracking-[0.2em] uppercase italic underline decoration-indigo-500">Grant Activation: $5,000 Milestone</p>
                </div>
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl group hover:border-emerald-500/30 transition-all text-center">
                   <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6 italic">Total Agency Fleet</h3>
                   <p className="text-9xl font-black italic tracking-tighter text-slate-100 leading-none">355</p>
                   <p className="text-emerald-400 text-xs font-black mt-10 tracking-widest uppercase">↑ 24% Activation Aligned</p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                   <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6 italic text-indigo-400">Personal Revenue</h3>
                   <p className="text-9xl font-black italic tracking-tighter text-slate-100 leading-none">$0</p>
                   <p className="text-emerald-400 text-xs font-black mt-10 tracking-widest uppercase italic underline decoration-indigo-500">Target: $5,000 for Month 2 Waiver</p>
                </div>
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl group hover:border-emerald-500/30 transition-all text-center">
                   <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6 italic text-emerald-500">Client Pulse</h3>
                   <p className="text-9xl font-black italic tracking-tighter text-emerald-500 leading-none">0</p>
                   <p className="text-slate-400 text-xs font-black mt-10 tracking-widest uppercase italic">Active Policies Found</p>
                </div>
              </>
            )}
          </div>
        )}

        {/* FUNCTIONAL BUTTON LOGIC (FOR TESTING) */}
        {activeTab !== 'cockpit' && (
          <div className="h-96 flex flex-col items-center justify-center text-center space-y-6">
             <div className="w-24 h-24 bg-slate-900 rounded-full border border-slate-800 flex items-center justify-center shadow-inner">
               <ShieldCheck className="text-indigo-500 animate-pulse" size={40} />
             </div>
             <h3 className="text-2xl font-black uppercase tracking-tighter">Module Synchronized</h3>
             <p className="text-slate-500 max-w-sm font-medium italic">"The {activeTab.toUpperCase()} engine is active. Your frequency score allows for 100 executions per day."</p>
             <button onClick={() => setActiveTab('cockpit')} className="bg-indigo-600 px-8 py-3 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-indigo-500">Return to Cockpit</button>
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
                    {qStep === 0 && "1. Do you subconsciously audit people’s energy before they even speak, only to find out later that their birth date mathematically justifies your gut instinct?"}
                    {qStep === 1 && "2. Have you noticed that your life’s biggest failures and massive wins happen in cyclical loops, almost as if they were scheduled on a calendar you haven't seen yet?"}
                    {qStep === 2 && "3. Does the number sequence on a clock, a receipt, or a license plate stop you dead in your tracks, inducing a feeling of 'remembering' something you never learned?"}
                  </p>
                  <button className="bg-indigo-600 px-12 py-4 rounded-2xl font-black uppercase tracking-widest shadow-2xl" onClick={() => setQStep(qStep + 1)}>Yes. Correct.</button>
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
