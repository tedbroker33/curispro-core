'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, Users, Zap, GraduationCap, ShieldCheck, Lock, UserCircle, Target, TrendingUp, DollarSign, Briefcase, FileText, Settings, Play, ArrowUpRight } from 'lucide-react';
import { OWNER_EMAIL } from '../../lib/constants';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('cockpit');
  const [tapCount, setTapCount] = useState(0);
  const [showHidden, setShowHidden] = useState(false);
  const [qStep, setQStep] = useState(0);
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [showWizard, setShowWizard] = useState(true);
  const [wizardStep, setWizardStep] = useState(1);
  const router = useRouter();

  useEffect(() => {
    setEmail(localStorage.getItem('curispro_email') || '');
    if (tapCount >= 3) { setShowHidden(true); setTapCount(0); }
  }, [tapCount]);

  const isTed = email.toLowerCase().trim() === OWNER_EMAIL.toLowerCase().trim();

  return (
    <div className="flex min-h-screen bg-slate-950 text-white font-sans overflow-hidden">
      {/* SIDEBAR */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col space-y-8 shadow-2xl z-20">
        <div className="text-3xl font-black text-indigo-500 italic tracking-tighter">CURISPRO</div>
        <nav className="flex-1 space-y-2">
          {[
            { id: 'cockpit', label: isTed ? 'Empire Cockpit' : 'Financial Cockpit', icon: LayoutDashboard },
            { id: 'crm', label: 'CRM / Leads', icon: Briefcase },
            { id: 'armory', label: 'Armory (Templates)', icon: FileText },
            { id: 'academy', label: 'Training Academy', icon: Play },
            { id: 'brand', label: 'Brand Accelerator', icon: Zap },
            { id: 'payments', label: 'Payments (Stripe)', icon: DollarSign },
            { id: 'settings', label: 'Identity Settings', icon: Settings },
          ].map((item) => (
            <button key={item.id} id={`btn-${item.id}`} onClick={() => setActiveTab(item.id)} className={`relative flex items-center space-x-4 w-full p-4 rounded-2xl transition-all ${activeTab === item.id ? 'bg-indigo-600 shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-slate-800'}`}>
              <item.icon size={20} /> <span className="font-bold text-xs uppercase tracking-wider">{item.label}</span>
              {!isTed && item.id === 'scanner' && <Lock className="ml-auto opacity-30" size={14} />}
            </button>
          ))}
          
          {isTed && (
            <button id="btn-scanner" onClick={() => setActiveTab('scanner')} className={`mt-8 flex items-center space-x-4 w-full p-4 rounded-2xl bg-indigo-900/20 text-indigo-400 border border-indigo-500/30 transition-all ${activeTab === 'scanner' ? 'bg-indigo-600 text-white' : ''}`}>
              <Target size={20} /> <span className="font-bold text-xs uppercase tracking-widest">GG-Scanner</span>
            </button>
          )}
        </nav>

        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center space-x-3 text-emerald-400">
           <ShieldCheck size={20} /> <span className="text-[10px] font-black uppercase tracking-widest leading-tight text-emerald-500">Identity Status:<br/>Sovereign</span>
        </div>
      </aside>

      {/* MAIN STAGE */}
      <main className="flex-1 p-12 relative overflow-y-auto">
        
        {/* STARTUP WIZARD OVERLAY */}
        {showWizard && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-slate-900 border-2 border-indigo-500 p-10 rounded-[3rem] text-center shadow-[0_0_100px_rgba(79,70,229,0.3)] relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-indigo-500 animate-bounce">
                <ArrowUpRight size={48} className={wizardStep === 1 ? "rotate-[225deg]" : "hidden"} />
              </div>
              <h2 className="text-2xl font-black text-yellow-400 mb-4 uppercase tracking-tighter">Initiation: Phase {wizardStep}</h2>
              <p className="text-slate-200 text-sm mb-8 italic">
                {wizardStep === 1 && "Priority 1: Your frequency must be identified. You cannot access the armory without an active Birthday calibration."}
                {wizardStep === 2 && "Priority 2: Establish your baseline. Open the Cockpit and set your Income goal to align the rhythm."}
                {wizardStep === 3 && "Priority 3: The system is a sequence. Always check the Training Vault before executing a scan."}
              </p>
              <button onClick={() => wizardStep < 3 ? setWizardStep(wizardStep+1) : setShowWizard(false)} className="w-full bg-indigo-600 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-indigo-500">
                {wizardStep === 3 ? "Enter the Armory" : "Understood. Next."}
              </button>
            </div>
          </div>
        )}

        {/* TOP CONTROLS */}
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
          <p className="text-slate-500 mt-6 font-serif italic text-xl max-w-2xl italic">"Today's Rhythm: Wealth is attracted through perfect alignment with the clock."</p>
        </header>

        {activeTab === 'cockpit' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {isTed ? (
              <>
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                   <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6">Homestead Loading Bar</h3>
                   <p className="text-9xl font-black italic tracking-tighter text-emerald-500 leading-none">24%</p>
                   <div className="mt-10 w-full bg-slate-800 h-4 rounded-full overflow-hidden p-1 shadow-inner">
                      <div className="bg-emerald-500 h-full w-[24%] rounded-full shadow-[0_0_20px_rgba(16,185,129,0.8)] animate-pulse"></div>
                   </div>
                   <p className="text-[10px] text-slate-600 font-bold mt-4 tracking-[0.2em] uppercase italic italic underline decoration-indigo-500">Grant Activation: $5,000 Milestone</p>
                </div>
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                  <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6 italic">The Fleet (Total Agents)</h3>
                  <p className="text-9xl font-black italic tracking-tighter text-slate-100 leading-none">355</p>
                  <p className="text-emerald-400 text-xs font-black mt-10 tracking-widest uppercase">↑ 24% Activation Aligned</p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                   <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6 italic">Personal Revenue</h3>
                   <p className="text-9xl font-black italic tracking-tighter text-slate-100 leading-none">$0</p>
                   <p className="text-indigo-400 text-xs font-black mt-10 tracking-widest uppercase">Target: $5,000 Month 1 Bonus</p>
                </div>
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                   <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6 italic">Client Pulse</h3>
                   <p className="text-9xl font-black italic tracking-tighter text-slate-100 leading-none">0</p>
                   <p className="text-slate-600 text-xs font-black mt-10 tracking-widest uppercase italic">Active Policies Found</p>
                </div>
              </>
            )}
          </div>
        )}

        {/* HIDDEN MASTER PANEL */}
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
                  <button className="bg-indigo-600 px-12 py-4 rounded-2xl font-black uppercase tracking-widest" onClick={() => setQStep(qStep + 1)}>Yes. Correct.</button>
                </>
              ) : (
                <div className="animate-in fade-in duration-1000">
                  <h2 className="text-4xl font-black text-yellow-400 mb-4 italic uppercase tracking-tighter">Congratulations. You’re Awake.</h2>
                  <p className="text-slate-300 mb-10 leading-relaxed italic text-sm">"We don’t sell hope. We sell alignment. Billionaires use this. I use this. Stop playing on Hard Mode."</p>
                  <div className="bg-slate-800/40 p-8 rounded-[2.5rem] border border-slate-700 mb-10 text-left hover:border-indigo-500 transition-all">
                     <p className="text-indigo-400 font-black uppercase text-xs mb-3 tracking-[0.25em]">Unlock: Master Expansion ($33/mo)</p>
                     <ul className="text-sm text-slate-300 space-y-3 font-medium">
                        <li className="flex items-center space-x-3"><Zap size={14} className="text-yellow-400"/> <span>Personalized Life Path Expansion</span></li>
                        <li className="flex items-center space-x-3"><Zap size={14} className="text-yellow-400"/> <span>Gematria Closing Scripts</span></li>
                        <li className="flex items-center space-x-3"><Zap size={14} className="text-yellow-400"/> <span>Universal Timing Calendar</span></li>
                     </ul>
                  </div>
                  <button className="w-full bg-indigo-600 py-6 rounded-3xl font-black uppercase text-xl tracking-[0.2em] shadow-2xl hover:bg-indigo-500" onClick={() => setShowHidden(false)}>Activate Master Panel</button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
