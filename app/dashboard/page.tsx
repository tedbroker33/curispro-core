'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, Users, Zap, GraduationCap, ShieldCheck, Lock, UserCircle, Target, TrendingUp, DollarSign, Briefcase, FileText, Settings, Play, ArrowDown, Search } from 'lucide-react';
import { OWNER_EMAIL } from '../../lib/constants';
import StartupWizard from '../../components/StartupWizard';
import ModuleCard from '../../components/ModuleCard';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('cockpit');
  const [tapCount, setTapCount] = useState(0);
  const [showHidden, setShowHidden] = useState(false);
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
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
          <button onClick={() => setActiveTab('cockpit')} className={`flex items-center space-x-4 w-full p-4 rounded-2xl transition-all ${activeTab === 'cockpit' ? 'bg-indigo-600 shadow-lg' : 'text-slate-400 hover:bg-slate-800'}`}>
            <LayoutDashboard size={20} /> <span className="font-bold text-xs uppercase tracking-wider">{isTed ? 'Empire Cockpit' : 'Financial Alignment'}</span>
          </button>
          <button onClick={() => setActiveTab('group')} className={`flex items-center space-x-4 w-full p-4 rounded-2xl transition-all ${activeTab === 'group' ? 'bg-indigo-600' : 'text-slate-400'}`}>
            <Briefcase size={20} /> <span className="font-bold text-xs uppercase tracking-wider">Group Command</span>
          </button>
          {isTed && (
            <button onClick={() => setActiveTab('scanner')} className="mt-8 flex items-center space-x-4 w-full p-4 rounded-2xl bg-indigo-900/20 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-600 hover:text-white transition-all">
              <Target size={20} /> <span className="font-bold text-xs uppercase tracking-widest">GG-Scanner (Fri Batch)</span>
            </button>
          )}
        </nav>
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center space-x-3 text-emerald-400">
           <ShieldCheck size={20} /> <span className="text-[10px] font-black uppercase tracking-widest leading-tight text-emerald-500">Identity Status: Sovereign</span>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-12 relative overflow-y-auto">
        <div className="absolute top-4 right-8 flex items-center space-x-8">
          <div className="flex items-center space-x-3 bg-slate-900 p-2 px-4 rounded-2xl border border-slate-800 shadow-inner">
             <UserCircle size={16} className="text-slate-500" />
             <input type="text" placeholder="MM/DD/YYYY" value={birthday} onChange={(e) => setBirthday(e.target.value)} className="bg-transparent text-xs outline-none w-24 text-indigo-400 font-black tracking-tighter" />
          </div>
          <div className="text-[10px] text-slate-700 tracking-[0.4em] cursor-pointer hover:text-indigo-400 select-none font-black" onClick={() => setTapCount(c => c+1)}>CODE: 33 • 11 • 22 • 88</div>
        </div>

        {activeTab === 'cockpit' && (
          <div className="animate-in fade-in duration-700">
            <header className="mb-20">
              <h1 className="text-5xl font-black italic tracking-tighter uppercase text-slate-100 mb-2 italic">The Armory</h1>
              <div className="h-1.5 w-32 bg-indigo-600"></div>
              <p className="text-slate-500 mt-6 font-serif italic text-xl">"Wealth is found in the alignment of the clock."</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {isTed ? (
                <>
                  <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                    <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6 italic">Homestead Grant Status</h3>
                    <p className="text-9xl font-black italic tracking-tighter text-emerald-500 leading-none">24%</p>
                    <div className="mt-10 w-full bg-slate-800 h-4 rounded-full overflow-hidden p-1 shadow-inner"><div className="bg-emerald-500 h-full w-[24%] rounded-full animate-pulse shadow-[0_0_20px_#10b981]"></div></div>
                    <p className="text-[10px] text-slate-600 font-bold mt-4 tracking-[0.2em] uppercase italic underline decoration-indigo-500">Target: $5,000 for Grant Activation</p>
                  </div>
                  <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                    <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6 italic text-indigo-400">Acreage Radar</h3>
                    <div className="space-y-4">
                       <div className="p-4 bg-slate-800 rounded-2xl flex justify-between items-center"><p className="font-bold">12.5 Acres (GA)</p><p className="text-emerald-400 font-black">$0 Down Aligned</p></div>
                       <div className="p-4 bg-slate-800 rounded-2xl flex justify-between items-center opacity-40"><p className="font-bold">33 Acres (TN)</p><p className="text-slate-500">Locked</p></div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl text-center"><h3 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">Personal Revenue</h3><p className="text-9xl font-black italic">$0</p></div>
                  <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl text-center"><h3 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-emerald-500">Client Pulse</h3><p className="text-9xl font-black italic">0</p></div>
                </>
              )}
            </div>
          </div>
        )}

        {activeTab === 'group' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in slide-in-from-bottom-4 duration-500">
             <ModuleCard icon={Play} title="Group 101" description="33 Video Lessons. Sequential Initiation." href="#" />
             <ModuleCard icon={Users} title="Group Rep 1-1" description="Slack comms support. Direct mentorship." href="#" />
             <ModuleCard icon={Search} title="Market Compare" description="Side-by-side carrier analysis." href="#" />
             <ModuleCard icon={Target} title="Client Scraper" description="$11 / $33 / $88 Scrape Packs." href="#" />
             <ModuleCard icon={FileText} title="Viral Library" description="Hormozi-style group templates." href="#" />
             <ModuleCard icon={TrendingUp} title="Power Board" description="See who is resonating highest." href="#" />
          </div>
        )}

        {activeTab === 'scanner' && isTed && (
          <div className="bg-slate-900 p-12 rounded-[4rem] border-2 border-indigo-500 shadow-2xl animate-in zoom-in-95 duration-500">
             <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-black italic uppercase italic tracking-tighter">Frequency Scanner</h2>
                <div className="px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full border border-indigo-500/30 font-black text-xs uppercase tracking-widest">Next Batch: Friday</div>
             </div>
             <p className="text-slate-400 font-medium italic mb-8">"Filtering independent brokers by 02/09 proxy birth years and high-frequency alignment scores."</p>
             <button className="bg-indigo-600 px-12 py-5 rounded-3xl font-black uppercase tracking-widest hover:bg-indigo-500">Initialize Search Sequence</button>
          </div>
        )}
      </main>

      {/* MASTER PANEL MODAL */}
      {showHidden && (
          <div className="fixed inset-0 bg-slate-950/98 flex items-center justify-center z-[500] p-6 animate-in zoom-in-95 duration-300">
            <div className="max-w-3xl w-full bg-slate-900 border-2 border-indigo-500 p-16 rounded-[5rem] text-center shadow-[0_0_150px_rgba(79,70,229,0.3)]">
              <h2 className="text-4xl font-black text-yellow-400 mb-6 italic uppercase tracking-tighter underline decoration-indigo-600 underline-offset-8 decoration-4">The Master Panel</h2>
              <p className="text-slate-200 text-2xl mb-12 font-serif italic leading-relaxed">"Are you prepared to raise your income by 300% by syncing your heartbeat to the timing of the world?"</p>
              <button className="w-full bg-indigo-600 py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-xl shadow-2xl hover:bg-indigo-500" onClick={() => setShowHidden(false)}>Activate Master Panel ($33)</button>
            </div>
          </div>
        )}
    </div>
  );
}
