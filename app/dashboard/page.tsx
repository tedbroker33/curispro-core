'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, Users, Zap, GraduationCap, ShieldCheck, Lock, UserCircle, Target, TrendingUp, DollarSign, Briefcase, FileText, Settings, Play, ArrowDown, ArrowLeft } from 'lucide-react';
import { OWNER_EMAIL } from '../../lib/constants';
import StartupWizard from '../../components/StartupWizard';
import ModuleCard from '../../components/ModuleCard';

const THEMES: any = {
  1: 'accent-red-500', 2: 'accent-orange-500', 3: 'accent-yellow-400', 4: 'accent-green-500',
  5: 'accent-cyan-400', 6: 'accent-indigo-500', 7: 'accent-violet-500', 8: 'accent-pink-500',
  9: 'accent-teal-400', 11: 'accent-amber-400 shadow-[0_0_20px_gold]', 
  22: 'accent-emerald-400 shadow-[0_0_20px_emerald]', 33: 'accent-yellow-400 shadow-[0_0_30px_gold]'
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('cockpit');
  const [tapCount, setTapCount] = useState(0);
  const [showHidden, setShowHidden] = useState(false);
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [lifePath, setLifePath] = useState<number>(6); // Default Indigo
  const [isWizardActive, setIsWizardActive] = useState(true);

  useEffect(() => {
    const savedEmail = localStorage.getItem('curispro_email') || '';
    const savedLP = localStorage.getItem('user_lifepath');
    setEmail(savedEmail);
    if (savedLP) {
       setLifePath(parseInt(savedLP));
       setIsWizardActive(false);
    }
    if (tapCount >= 3) { setShowHidden(true); setTapCount(0); }
  }, [tapCount]);

  const isTed = email.toLowerCase().trim() === OWNER_EMAIL.toLowerCase().trim();

  return (
    <div className={`flex min-h-screen bg-slate-950 text-white font-sans overflow-hidden relative ${THEMES[lifePath]}`}>
      
      {isWizardActive && <StartupWizard onComplete={() => setIsWizardActive(false)} />}

      {/* SIDEBAR */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col space-y-8 shadow-2xl z-20">
        <div className="text-3xl font-black text-indigo-500 italic tracking-tighter">CURISPRO</div>
        <nav className="flex-1 space-y-3 relative">
          <button onClick={() => setActiveTab('cockpit')} className={`flex items-center space-x-4 w-full p-4 rounded-2xl transition-all ${activeTab === 'cockpit' ? 'bg-indigo-600 shadow-lg' : 'text-slate-400 hover:bg-slate-800'}`}>
            <LayoutDashboard size={20} /> <span className="font-bold text-xs uppercase tracking-wider">{isTed ? 'Empire Cockpit' : 'Growth Alignment'}</span>
          </button>
          
          <button onClick={() => setActiveTab('group')} className={`flex items-center space-x-4 w-full p-4 rounded-2xl transition-all ${activeTab === 'group' ? 'bg-indigo-600' : 'text-slate-400 hover:bg-slate-800'}`}>
            <Briefcase size={20} /> <span className="font-bold text-xs uppercase tracking-wider">Group Command</span>
          </button>

          {isTed && (
            <button onClick={() => setActiveTab('scanner')} className="mt-8 flex items-center space-x-4 w-full p-4 rounded-2xl bg-indigo-900/20 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-600 transition-all">
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
        {/* TOP BAR */}
        <div className="absolute top-4 right-8 flex items-center space-x-8">
          <div className="text-[10px] text-slate-700 tracking-[0.4em] cursor-pointer hover:text-indigo-400 select-none font-black" onClick={() => setTapCount(c => c+1)}>CODE: 33 • 11 • 22 • 88</div>
        </div>

        {activeTab === 'cockpit' && (
          <div className="animate-in fade-in duration-700">
            <header className="mb-20">
              <h1 className="text-5xl font-black italic tracking-tighter uppercase text-slate-100 mb-2 italic">The Armory</h1>
              <div className="h-1.5 w-32 bg-indigo-600"></div>
              <p className="text-slate-500 mt-6 font-serif italic text-xl">"Wealth is attracted through perfect alignment with the clock."</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {isTed ? (
                <>
                  <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                    <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6 italic">Homestead Loading Bar</h3>
                    <p className="text-9xl font-black italic tracking-tighter text-emerald-500 leading-none">24%</p>
                    <div className="mt-10 w-full bg-slate-800 h-4 rounded-full overflow-hidden p-1 shadow-inner"><div className="bg-emerald-500 h-full w-[24%] rounded-full animate-pulse"></div></div>
                  </div>
                </>
              ) : (
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                  <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6 italic text-indigo-400 font-serif">Personal Revenue</h3>
                  <p className="text-9xl font-black italic tracking-tighter text-slate-100 leading-none">$0</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'group' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in slide-in-from-bottom-4">
             <ModuleCard icon={Play} title="Group 101" description="Sequential Video Initiation." href="#" />
             <ModuleCard icon={Users} title="Group Rep Slack" description="Mass comms support." href="#" />
             <ModuleCard icon={Target} title="Client Scrapers" description="$11 / $33 / $88 packs." href="#" />
          </div>
        )}
      </main>

      {showHidden && (
          <div className="fixed inset-0 bg-slate-950/98 flex items-center justify-center z-[110] p-6 animate-in zoom-in-95">
            <div className="max-w-3xl w-full bg-slate-900 border-2 border-indigo-500 p-16 rounded-[5rem] text-center shadow-[0_0_150px_rgba(79,70,229,0.3)]">
              <h2 className="text-4xl font-black text-yellow-400 mb-4 italic uppercase tracking-tighter underline decoration-indigo-600 underline-offset-8">The Master Panel</h2>
              <p className="text-slate-200 text-2xl mb-12 font-serif italic">Your Frequency is {lifePath}. Acquire the skills Elites use to dominate reality.</p>
              <button className="w-full bg-indigo-600 py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-xl shadow-2xl hover:bg-indigo-500" onClick={() => setShowHidden(false)}>Activate Expansion ($33)</button>
            </div>
          </div>
        )}
    </div>
  );
}
