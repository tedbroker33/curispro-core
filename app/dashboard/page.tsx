'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, Users, Zap, GraduationCap, ShieldCheck, Lock, UserCircle, Briefcase, FileText, Play } from 'lucide-react';
import { OWNER_EMAIL, FREQUENCY_QUOTES } from '../../lib/constants';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('cockpit');
  const [tapCount, setTapCount] = useState(0);
  const [showHidden, setShowHidden] = useState(false);
  const [qStep, setQStep] = useState(0);
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [wizardStep, setWizardStep] = useState(1);

  useEffect(() => {
    setEmail(localStorage.getItem('curispro_email') || '');
    if (tapCount >= 3) { setShowHidden(true); setTapCount(0); }
  }, [tapCount]);

  const isTed = email.toLowerCase() === OWNER_EMAIL.toLowerCase();

  return (
    <div className="flex min-h-screen bg-slate-950 text-white font-sans overflow-hidden">
      {/* SIDEBAR */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col space-y-8 shadow-2xl z-20">
        <div className="text-3xl font-black text-indigo-500 italic tracking-tighter">CURISPRO</div>
        <nav className="flex-1 space-y-3">
          <button onClick={() => setActiveTab('cockpit')} className={`group flex items-center space-x-4 w-full p-4 rounded-2xl transition-all ${activeTab === 'cockpit' ? 'bg-indigo-600' : 'text-slate-400 hover:bg-slate-800'}`}>
            <LayoutDashboard size={20} /> <span className="font-bold text-sm uppercase tracking-wider">{isTed ? 'The Empire' : 'Financial Cockpit'}</span>
            {wizardStep === 1 && <div className="ml-auto animate-ping w-2 h-2 bg-yellow-400 rounded-full"></div>}
          </button>
          
          <button onClick={() => setActiveTab('crm')} className={`flex items-center space-x-4 w-full p-4 rounded-2xl transition-all ${activeTab === 'crm' ? 'bg-indigo-600' : 'text-slate-400 hover:bg-slate-800'}`}>
            <Briefcase size={20} /> <span className="font-bold text-sm uppercase tracking-wider">CRM</span>
          </button>

          <button onClick={() => setActiveTab('templates')} className={`flex items-center space-x-4 w-full p-4 rounded-2xl transition-all ${activeTab === 'templates' ? 'bg-indigo-600' : 'text-slate-400 hover:bg-slate-800'}`}>
            <FileText size={20} /> <span className="font-bold text-sm uppercase tracking-wider">Armory</span>
          </button>
          
          <button onClick={() => setActiveTab('academy')} className={`flex items-center space-x-4 w-full p-4 rounded-2xl transition-all ${activeTab === 'academy' ? 'bg-indigo-600' : 'text-slate-400 hover:bg-slate-800'}`}>
            <Play size={20} /> <span className="font-bold text-sm uppercase tracking-wider">Academy</span>
          </button>

          {isTed && (
            <button onClick={() => setActiveTab('scanner')} className="mt-10 flex items-center space-x-4 w-full p-4 rounded-2xl bg-indigo-900/30 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-900/50 transition-all">
              <Users size={20} /> <span className="font-bold text-sm uppercase tracking-widest">GG-Scanner</span>
            </button>
          )}
        </nav>

        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center space-x-3 text-emerald-400">
           <ShieldCheck size={20} /> <span className="text-[10px] font-black uppercase tracking-widest leading-tight">Identity Status:<br/>Sovereign</span>
        </div>
      </aside>

      {/* MAIN STAGE */}
      <main className="flex-1 p-12 relative overflow-y-auto">
        
        {/* THE ORIENTATION WIZARD (Fixed Sequence) */}
        <div className="fixed bottom-8 right-8 max-w-sm bg-slate-900 border-2 border-indigo-500/50 p-6 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-50">
          <div className="flex justify-between items-center mb-4">
             <p className="text-yellow-400 font-black text-[10px] uppercase tracking-[0.25em]">Sequence: Step {wizardStep}/3</p>
             <button onClick={() => setWizardStep(prev => prev < 3 ? prev + 1 : 1)} className="text-[10px] bg-indigo-600 px-4 py-1 rounded-full font-black uppercase">Next</button>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-medium italic">
            {wizardStep === 1 && "Start in the Cockpit. Set your goals. Align your vision."}
            {wizardStep === 2 && "Enter your Birth Date in the top right. This tunes your dashboard frequency."}
            {wizardStep === 3 && "Advanced: Tap the footer code 3 times to unlock the Master Panel."}
          </p>
        </div>

        {/* TOP CONTROLS */}
        <div className="absolute top-4 right-8 flex items-center space-x-8">
          <div className="flex items-center space-x-3 bg-slate-900 p-2 px-4 rounded-2xl border border-slate-800 shadow-inner">
             <UserCircle size={16} className="text-slate-500" />
             <input type="text" placeholder="Birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} className="bg-transparent text-xs outline-none w-20 text-indigo-400 font-black tracking-tighter" />
          </div>
          <div className="text-[10px] text-slate-700 tracking-[0.4em] cursor-pointer hover:text-indigo-400 transition-colors select-none font-black" onClick={() => setTapCount(c => c+1)}>CODE: 33 • 11 • 22 • 88</div>
        </div>

        <header className="mb-20">
          <h1 className="text-5xl font-black italic tracking-tighter uppercase text-slate-100 mb-2">The Armory</h1>
          <div className="h-1.5 w-32 bg-indigo-600"></div>
          <p className="text-slate-500 mt-6 font-serif italic text-xl max-w-2xl leading-relaxed">
             "Wealth isn't hunted; it is attracted through perfect alignment with the clock."
          </p>
        </header>

        {activeTab === 'cockpit' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {isTed ? (
              <>
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                  <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6 italic">The Fleet (Total Agents)</h3>
                  <p className="text-9xl font-black italic tracking-tighter text-slate-100 leading-none">355</p>
                </div>
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl group hover:border-emerald-500/30 transition-all">
                  <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6 italic text-emerald-500">Homestead Fund</h3>
                  <p className="text-9xl font-black italic tracking-tighter text-emerald-500 leading-none">$0.00</p>
                  <p className="text-[10px] text-slate-600 font-bold mt-8 tracking-[0.2em] uppercase italic underline decoration-indigo-500">Target: $5,000 for Grant Activation</p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                  <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6 italic">Personal Revenue</h3>
                  <p className="text-9xl font-black italic tracking-tighter text-slate-100 leading-none">$0.00</p>
                  <p className="text-emerald-500 text-xs font-black mt-6 tracking-widest uppercase">Target: $5,000 Month 1 Bonus</p>
                </div>
                <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl group hover:border-emerald-500/30 transition-all">
                  <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-6 italic text-indigo-400">Referral Bank</h3>
                  <p className="text-9xl font-black italic tracking-tighter text-indigo-400 leading-none">0</p>
                  <p className="text-[10px] text-slate-600 font-bold mt-8 tracking-[0.2em] uppercase italic">Stackable to 33 Months</p>
                </div>
              </>
            )}
          </div>
        )}

        {/* THE HIDDEN PANEL (For those who tap the code) */}
        {showHidden && (
          <div className="fixed inset-0 bg-slate-950/98 flex items-center justify-center z-[100] p-6">
            <div className="max-w-3xl w-full bg-slate-900 border-2 border-indigo-500 p-16 rounded-[4rem] text-center shadow-[0_0_150px_rgba(79,70,229,0.3)]">
              {qStep < 3 ? (
                <>
                  <h2 className="text-2xl font-black text-yellow-400 mb-8 italic uppercase tracking-[0.3em]">Frequency Audit</h2>
                  <p className="text-slate-200 text-xl mb-12 font-serif italic leading-relaxed">
                    {qStep === 0 && "1. Do you subconsciously audit people’s energy before they even speak, only to find out later that their birth date mathematically justifies your gut instinct?"}
                    {qStep === 1 && "2. Have you noticed that your life’s biggest failures and massive wins happen in cyclical loops, almost as if they were scheduled on a calendar you haven't seen yet?"}
                    {qStep === 2 && "3. Does the number sequence on a clock, a receipt, or a license plate stop you dead in your tracks, inducing a feeling of 'remembering' something you never learned?"}
                  </p>
                  <button className="bg-indigo-600 px-12 py-4 rounded-2xl font-black uppercase" onClick={() => setQStep(qStep + 1)}>Yes. Correct.</button>
                </>
              ) : (
                <div className="animate-in fade-in duration-1000">
                  <h2 className="text-4xl font-black text-yellow-400 mb-4 italic uppercase">Congratulations. You’re Awake.</h2>
                  <p className="text-slate-300 mb-8 leading-relaxed italic">"We don’t sell hope. We sell alignment. We sell the user manual to the simulation."</p>
                  <div className="bg-slate-800/40 p-8 rounded-[2rem] border border-slate-700 mb-10 text-left">
                     <p className="text-indigo-400 font-black uppercase text-xs mb-3 tracking-[0.25em]">Unlock: Master Expansion ($44/mo)</p>
                     <ul className="text-sm text-slate-300 space-y-2">
                        <li>• Personalized Life Path 300% Scaling</li>
                        <li>• Gematria Closing Scripts</li>
                        <li>• Universal Timing Calendar</li>
                     </ul>
                  </div>
                  <button className="w-full bg-indigo-600 py-6 rounded-3xl font-black uppercase text-xl" onClick={() => setShowHidden(false)}>Activate Master Panel</button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
