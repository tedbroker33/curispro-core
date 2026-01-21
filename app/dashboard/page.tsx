'use client'
import { useState, useEffect } from 'react';
import { LayoutDashboard, Users, Zap, GraduationCap, ShieldCheck, Lock, Target, DollarSign, Briefcase, FileText, Settings, Play } from 'lucide-react';
import { OWNER_EMAIL } from '../../lib/constants';
import StartupWizard from '../../components/StartupWizard';

const THEMES: any = {
  1: 'border-red-500', 3: 'border-yellow-400', 6: 'border-indigo-500', 8: 'border-pink-500', 9: 'border-teal-400', 33: 'border-yellow-500 shadow-[0_0_20px_gold]'
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('cockpit');
  const [tapCount, setTapCount] = useState(0);
  const [showHidden, setShowHidden] = useState(false);
  const [qStep, setQStep] = useState(0);
  const [email, setEmail] = useState('');
  const [isWizardActive, setIsWizardActive] = useState(true);

  useEffect(() => {
    setEmail(localStorage.getItem('curispro_email') || '');
    if (tapCount >= 3) { setShowHidden(true); setTapCount(0); }
  }, [tapCount]);

  const isTed = email.toLowerCase().trim() === OWNER_EMAIL.toLowerCase().trim();

  return (
    <div className="flex min-h-screen bg-slate-950 text-white font-sans overflow-hidden relative">
      
      {isWizardActive && <StartupWizard onComplete={() => setIsWizardActive(false)} />}

      {/* SIDEBAR */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col space-y-8 shadow-2xl z-20">
        <div className="text-3xl font-black text-indigo-500 italic tracking-tighter">CURISPRO</div>
        <nav className="flex-1 space-y-3">
          {[
            { id: 'cockpit', label: isTed ? 'Empire Cockpit' : 'Financial Cockpit', icon: LayoutDashboard },
            { id: 'crm', label: 'CRM / Leads', icon: Briefcase },
            { id: 'armory', label: 'Templates', icon: FileText },
            { id: 'academy', label: 'Training Vault', icon: Play },
          ].map((item) => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} className={`relative flex items-center space-x-4 w-full p-4 rounded-2xl transition-all ${activeTab === item.id ? 'bg-indigo-600' : 'text-slate-400 hover:bg-slate-800'}`}>
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
           <ShieldCheck size={20} /> <span className="text-[10px] font-black uppercase tracking-widest leading-tight">Identity Status: Sovereign</span>
        </div>
      </aside>

      {/* MAIN STAGE */}
      <main className="flex-1 p-12 relative overflow-y-auto">
        {/* EASTER EGG TRIGGER */}
        <div className="absolute top-4 right-8 text-[10px] text-slate-700 tracking-[0.4em] cursor-pointer hover:text-indigo-400 select-none font-black" onClick={() => setTapCount(c => c+1)}>CODE: 33 • 11 • 22 • 88</div>

        {activeTab === 'cockpit' && (
          <div className="grid grid-cols-1 gap-10 max-w-4xl mx-auto">
            {isTed ? (
              <>
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                   <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6">Homestead Loading Bar</h3>
                   <p className="text-9xl font-black italic tracking-tighter text-emerald-500 leading-none">24%</p>
                   <div className="mt-10 w-full bg-slate-800 h-4 rounded-full overflow-hidden p-1 shadow-inner"><div className="bg-emerald-500 h-full w-[24%] rounded-full animate-pulse"></div></div>
                   <p className="text-[10px] text-slate-600 font-bold mt-4 tracking-[0.2em] uppercase italic italic">Grant Milestone: $5,000</p>
                </div>
              </>
            ) : (
              <div className="space-y-6">
                <div className="bg-slate-900 p-10 rounded-[3rem] border border-slate-800 shadow-xl"><h3 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Personal Revenue</h3><p className="text-7xl font-black italic">$0</p></div>
                <div className="bg-slate-900 p-10 rounded-[3rem] border border-slate-800 shadow-xl"><h3 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Client Pulse</h3><p className="text-7xl font-black italic text-emerald-500">0</p></div>
                <div className="bg-slate-900 p-10 rounded-[3rem] border border-slate-800 shadow-xl"><h3 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Referral Bank</h3><p className="text-7xl font-black italic text-indigo-500">0</p></div>
              </div>
            )}
          </div>
        )}

        {/* THE HIDDEN MASTER PANEL */}
        {showHidden && (
          <div className="fixed inset-0 bg-slate-950/98 flex items-center justify-center z-[400] p-6 animate-in zoom-in-95 duration-300">
            <div className="max-w-3xl w-full bg-slate-900 border-2 border-indigo-500 p-16 rounded-[5rem] text-center shadow-[0_0_150px_rgba(79,70,229,0.3)]">
              {qStep < 3 ? (
                <>
                  <h2 className="text-2xl font-black text-yellow-400 mb-8 italic uppercase tracking-[0.3em]">Frequency Audit</h2>
                  <p className="text-slate-200 text-xl mb-12 font-serif italic leading-relaxed">
                    {qStep === 0 && "1. Do you subconsciously audit people’s energy before they even speak, only to find out later that their birth date mathematically justifies your gut instinct?"}
                    {qStep === 1 && "2. Have you noticed that your life’s biggest failures and massive wins happen in cyclical loops?"}
                    {qStep === 2 && "3. Does the number sequence on a clock induce a feeling of 'remembering' something you never learned?"}
                  </p>
                  <button className="bg-indigo-600 px-12 py-4 rounded-2xl font-black uppercase tracking-widest shadow-2xl" onClick={() => setQStep(qStep + 1)}>Yes. Correct.</button>
                </>
              ) : (
                <div className="animate-in fade-in duration-1000">
                  <h2 className="text-4xl font-black text-yellow-400 mb-4 italic uppercase">Congratulations. You’re Awake.</h2>
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
