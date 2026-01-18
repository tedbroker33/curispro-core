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
}            <div className="flex items-center space-x-4 w-full p-4 rounded-2xl text-slate-700 cursor-not-allowed">
              <Lock size={18}/> <span className="font-bold italic text-xs uppercase tracking-tighter">Frequency Locked</span>
            </div>
          )}
          
          <button onClick={() => setActiveTab('academy')} className={`flex items-center space-x-4 w-full p-4 rounded-2xl ${activeTab === 'academy' ? 'bg-indigo-600' : 'text-slate-400'}`}>
            <GraduationCap /> <span className="font-bold">Training Vault</span>
          </button>
        </nav>
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center space-x-3 text-emerald-400">
           <ShieldCheck size={20} /> <span className="text-[10px] font-black uppercase tracking-widest leading-none text-emerald-500">Vault Status:<br/>Sovereign</span>
        </div>
      </aside>

      {/* MAIN STAGE */}
      <main className="flex-1 p-12 relative overflow-y-auto">
        {/* THE ORIENTATION WIZARD (Student Grade) */}
        <div className="fixed bottom-8 right-8 max-w-sm bg-slate-900 border border-indigo-500/50 p-6 rounded-3xl shadow-2xl z-50">
          <div className="flex justify-between items-center mb-4">
             <p className="text-yellow-400 font-bold text-xs uppercase tracking-widest">Master Wizard: Step {wizardStep}/3</p>
             <button onClick={() => setWizardStep(prev => prev + 1)} className="text-[10px] bg-slate-800 px-3 py-1 rounded-full uppercase">Next</button>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed italic">
            {wizardStep === 1 && "First, verify your Financial Cockpit. This is where you track your legacy numbers."}
            {wizardStep === 2 && "Update your birthday in the Hidden Panel. This aligns your daily dashboard quotes with your frequency."}
            {wizardStep === 3 && "Tap the code at the top right 3 times. This unlocks the hidden rhythm training."}
          </p>
        </div>

        {/* EASTER EGG TRIGGER */}
        <div className="absolute top-4 right-8 text-[10px] text-slate-600 tracking-[0.4em] cursor-pointer hover:text-indigo-400 select-none" onClick={() => setTapCount(c => c+1)}>CODE: 33 • 11 • 22 • 88</div>

        <header className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-bold italic tracking-tight uppercase">The Armory</h1>
            <p className="text-slate-500 mt-2 font-medium italic">Today’s Rhythm: "Stop looking at the mountain. Walk the path one aligned step at a time."</p>
          </div>
          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <label className="text-[10px] text-slate-500 block uppercase font-black mb-1">Set Birthday</label>
            <input type="text" placeholder="MM/DD/YYYY" value={birthday} onChange={(e) => setBirthday(e.target.value)} className="bg-transparent border-b border-slate-700 text-sm outline-none w-24 text-indigo-400 font-bold" />
          </div>
        </header>

        {activeTab === 'cockpit' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-slate-900 p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity"><LayoutDashboard size={80} /></div>
               <h3 className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Active Writing Agents</h3>
               <p className="text-7xl font-black mt-4 italic tracking-tighter">355</p>
               <p className="text-emerald-400 text-xs font-bold mt-4">↑ 24% ACTIVATION RATE</p>
            </div>
            <div className="bg-slate-900 p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl">
               <h3 className="text-slate-500 text-[10px] font-black uppercase tracking-widest text-emerald-500">Homestead Reserve</h3>
               <p className="text-7xl font-black mt-4 italic tracking-tighter">$0.00</p>
               <div className="mt-6 w-full bg-slate-800 h-2 rounded-full"><div className="bg-indigo-500 h-full w-[2%] shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div></div>
            </div>
          </div>
        )}

        {/* HIDDEN MODAL FOR NUMEROLOGISTS */}
        {showHidden && (
          <div className="fixed inset-0 bg-slate-950/98 flex items-center justify-center z-[100] p-6">
            <div className="max-w-2xl w-full bg-slate-900 border-2 border-indigo-500 p-12 rounded-[3rem] text-center shadow-[0_0_100px_rgba(79,70,229,0.3)]">
              <h2 className="text-4xl font-black text-yellow-400 mb-6 italic uppercase tracking-tighter underline decoration-indigo-500">The Hidden Panel</h2>
              <p className="text-slate-200 text-xl mb-10 font-serif italic">"Would you like to raise your income by 300% by tapping the universal rhythm?"</p>
              
              <div className="grid grid-cols-1 gap-4 text-left mb-10">
                 <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700">
                    <p className="text-xs text-indigo-400 font-black uppercase mb-1">Access Level: Master ($44/mo)</p>
                    <p className="text-sm text-slate-300">• Personalized Life Path Expansion Lessons</p>
                    <p className="text-sm text-slate-300">• Launch Timing Synchronization Logic</p>
                    <p className="text-sm text-slate-300">• Gematria-Aligned Outreach Scripts</p>
                 </div>
              </div>
              
              <button className="w-full bg-indigo-600 py-5 rounded-3xl font-black uppercase tracking-widest text-lg hover:bg-indigo-500 transition-all" onClick={() => setShowHidden(false)}>Accept Aligned Path</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}    }
  }, [tapCount])

  const saveBirthday = () => {
    if (!birthday) return
    window.localStorage.setItem('curispro_birthday', birthday)
    const freq = getFrequencyNumber(birthday)
    setQuote(getDailyQuote(freq, new Date()))
    setShowBirthdayModal(false)
  }

  const isOwner = email === OWNER_EMAIL

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      {/* SIDEBAR */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col space-y-8">
        <div className="text-2xl font-black text-indigo-500 tracking-tighter">CURISPRO</div>
        <nav className="flex-1 space-y-2">
          <button className={`flex items-center space-x-3 w-full p-3 rounded-xl ${activeTab === 'overview' ? 'bg-indigo-600' : 'hover:bg-slate-800'}`} onClick={() => setActiveTab('overview')}>
            <LayoutDashboard size={20} />
            <span className="text-sm font-semibold">Financial Cockpit</span>
          </button>
          {isOwner && (
            <button className={`flex items-center space-x-3 w-full p-3 rounded-xl ${activeTab === 'scraper' ? 'bg-indigo-600' : 'hover:bg-slate-800'}`} onClick={() => setActiveTab('scraper')}>
              <Users size={20} />
              <span className="text-sm font-semibold">Frequency Scanner</span>
            </button>
          )}
          <button className={`flex items-center space-x-3 w-full p-3 rounded-xl ${activeTab === 'academy' ? 'bg-indigo-600' : 'hover:bg-slate-800'}`} onClick={() => setActiveTab('academy')}>
            <GraduationCap size={20} />
            <span className="text-sm font-semibold">Training Vault</span>
          </button>
        </nav>
        <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
          <p className="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Security</p>
          <div className="flex items-center space-x-2 text-emerald-400 text-xs">
            <ShieldCheck size={14} />
            <span>Vault Encrypted</span>
          </div>
        </div>
        <button onClick={() => router.push('/')} className="text-xs text-slate-500 hover:text-slate-300">
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-10 relative">
        {/* Wizard helper */}
        <div className="fixed bottom-4 right-4 bg-slate-900 border border-slate-800 p-4 rounded-xl text-xs text-slate-300 max-w-xs shadow-xl">
          <p className="font-semibold mb-1">Orientation</p>
          <p>1. Start in Financial Cockpit to see your numbers.</p>
          <p>2. Add your birthday when prompted to tune your daily alignment.</p>
          <p>3. Tap the code (top right) if you ever feel the rhythm is off.</p>
        </div>

        {/* Hidden code tap trigger */}
        <div
          className="absolute top-4 right-4 text-[10px] tracking-[0.35em] text-slate-500 uppercase cursor-pointer"
          onClick={() => setTapCount((c) => c + 1)}
        >
          CODE: 33 • 11 • 22 • 88
        </div>

        {/* Top header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome, Master Teacher</h1>
          <p className="text-slate-400 text-sm">Today’s Alignment: {quote}</p>
        </header>

        {/* Tabs */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <p className="text-xs uppercase text-slate-500 mb-1">Active Agents</p>
              <p className="text-4xl font-bold">355</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <p className="text-xs uppercase text-slate-500 mb-1">Homestead Fund</p>
              <p className="text-4xl font-bold text-emerald-400">$0.00</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <p className="text-xs uppercase text-slate-500 mb-1">Next Rhythm Shift</p>
              <p className="text-3xl font-bold">Feb 9</p>
            </div>
          </div>
        )}

        {activeTab === 'scraper' && isOwner && (
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-bold mb-4">Frequency Scanner (Private)</h2>
            <p className="text-sm text-slate-300 mb-4">
              This panel is only visible to you. It surfaces brokers who already move in your timing and rhythm.
            </p>
            <p className="text-xs text-slate-500 mb-2">
              (Implementation note: here you’d integrate PhantomBuster/Apify to pull LinkedIn profiles, then filter by birthday/class year.)
            </p>
          </div>
        )}

        {activeTab === 'academy' && (
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-bold mb-4">Training Vault</h2>
            <p className="text-sm text-slate-300 mb-4">
              Lessons on scaling your book, rhythm‑based outreach, and aligning your daily habits with your long‑term numbers.
            </p>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>• Video 1 – How to turn 10 warm conversations into $5,000 in 30 days.</li>
              <li>• Video 2 – Rhythm of Follow‑Up: the 1-3-7-21 method.</li>
              <li>• Video 3 – Building a personal brand that makes inbound leads inevitable.</li>
            </ul>
          </div>
        )}

        {/* Birthday Modal */}
        {showBirthdayModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 max-w-sm w-full">
              <h3 className="text-lg font-semibold mb-3">Tune Your Frequency</h3>
              <p className="text-xs text-slate-300 mb-4">
                Add your birthday so we can align your dashboard messages with your natural timing.
              </p>
              <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm mb-4"
              />
              <button
                onClick={saveBirthday}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-xs font-semibold py-2 rounded-lg"
              >
                Save & Align
              </button>
            </div>
          </div>
        )}

        {/* Hidden Panel for Numerologists */}
        {showHiddenPanel && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-900 p-8 rounded-3xl border border-indigo-500 max-w-lg w-full">
              <h2 className="text-xl font-bold text-yellow-400 mb-2">Hidden Panel</h2>
              <p className="text-xs text-slate-300 mb-4">
                This space is for those who know the rhythm behind the numbers.
              </p>
              <p className="text-sm text-slate-200 mb-4">
                Are you interested in raising your income by <span className="font-bold">300%</span> by 
                aligning your outreach with your personal frequency?
              </p>
              <p className="text-xs text-slate-400 mb-4">
                (This is where you can introduce paid lessons: life path sessions, launch timing, rhythm of calls, etc.)
              </p>
              <button
                onClick={() => setShowHiddenPanel(false)}
                className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-xs font-semibold py-2 rounded-lg"
              >
                Close Panel
              </button>
            </div>
          </div>
        )}

        {/* Trigger Hidden Panel */}
        {tapCount >= 2 && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 px-4 py-2 rounded-xl text-[10px] text-slate-300">
            One more tap on the code to unlock a deeper layer.
          </div>
        )}

        {showHiddenPanel === false && (
          <div
            className="sr-only"
            onClick={() => setShowHiddenPanel(true)}
          />
        )}

      </main>
    </div>
  )
}    }
  }, [tapCount])

  const saveBirthday = () => {
    if (!birthday) return
    window.localStorage.setItem('curispro_birthday', birthday)
    const freq = getFrequencyNumber(birthday)
    setQuote(getDailyQuote(freq, new Date()))
    setShowBirthdayModal(false)
  }

  const isOwner = email === OWNER_EMAIL

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      {/* SIDEBAR */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col space-y-8">
        <div className="text-2xl font-black text-indigo-500 tracking-tighter">CURISPRO</div>
        <nav className="flex-1 space-y-2">
          <button className={`flex items-center space-x-3 w-full p-3 rounded-xl ${activeTab === 'overview' ? 'bg-indigo-600' : 'hover:bg-slate-800'}`} onClick={() => setActiveTab('overview')}>
            <LayoutDashboard size={20} />
            <span className="text-sm font-semibold">Financial Cockpit</span>
          </button>
          {isOwner && (
            <button className={`flex items-center space-x-3 w-full p-3 rounded-xl ${activeTab === 'scraper' ? 'bg-indigo-600' : 'hover:bg-slate-800'}`} onClick={() => setActiveTab('scraper')}>
              <Users size={20} />
              <span className="text-sm font-semibold">Frequency Scanner</span>
            </button>
          )}
          <button className={`flex items-center space-x-3 w-full p-3 rounded-xl ${activeTab === 'academy' ? 'bg-indigo-600' : 'hover:bg-slate-800'}`} onClick={() => setActiveTab('academy')}>
            <GraduationCap size={20} />
            <span className="text-sm font-semibold">Training Vault</span>
          </button>
        </nav>
        <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
          <p className="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Security</p>
          <div className="flex items-center space-x-2 text-emerald-400 text-xs">
            <ShieldCheck size={14} />
            <span>Vault Encrypted</span>
          </div>
        </div>
        <button onClick={() => router.push('/')} className="text-xs text-slate-500 hover:text-slate-300">
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-10 relative">
        {/* Wizard helper */}
        <div className="fixed bottom-4 right-4 bg-slate-900 border border-slate-800 p-4 rounded-xl text-xs text-slate-300 max-w-xs shadow-xl">
          <p className="font-semibold mb-1">Orientation</p>
          <p>1. Start in Financial Cockpit to see your numbers.</p>
          <p>2. Add your birthday when prompted to tune your daily alignment.</p>
          <p>3. Tap the code (top right) if you ever feel the rhythm is off.</p>
        </div>

        {/* Hidden code tap trigger */}
        <div
          className="absolute top-4 right-4 text-[10px] tracking-[0.35em] text-slate-500 uppercase cursor-pointer"
          onClick={() => setTapCount((c) => c + 1)}
        >
          CODE: 33 • 11 • 22 • 88
        </div>

        {/* Top header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome, Master Teacher</h1>
          <p className="text-slate-400 text-sm">Today’s Alignment: {quote}</p>
        </header>

        {/* Tabs */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <p className="text-xs uppercase text-slate-500 mb-1">Active Agents</p>
              <p className="text-4xl font-bold">355</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <p className="text-xs uppercase text-slate-500 mb-1">Homestead Fund</p>
              <p className="text-4xl font-bold text-emerald-400">$0.00</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <p className="text-xs uppercase text-slate-500 mb-1">Next Rhythm Shift</p>
              <p className="text-3xl font-bold">Feb 9</p>
            </div>
          </div>
        )}

        {activeTab === 'scraper' && isOwner && (
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-bold mb-4">Frequency Scanner (Private)</h2>
            <p className="text-sm text-slate-300 mb-4">
              This panel is only visible to you. It surfaces brokers who already move in your timing and rhythm.
            </p>
            <p className="text-xs text-slate-500 mb-2">
              (Implementation note: here you’d integrate PhantomBuster/Apify to pull LinkedIn profiles, then filter by birthday/class year.)
            </p>
          </div>
        )}

        {activeTab === 'academy' && (
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-bold mb-4">Training Vault</h2>
            <p className="text-sm text-slate-300 mb-4">
              Lessons on scaling your book, rhythm‑based outreach, and aligning your daily habits with your long‑term numbers.
            </p>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>• Video 1 – How to turn 10 warm conversations into $5,000 in 30 days.</li>
              <li>• Video 2 – Rhythm of Follow‑Up: the 1-3-7-21 method.</li>
              <li>• Video 3 – Building a personal brand that makes inbound leads inevitable.</li>
            </ul>
          </div>
        )}

        {/* Birthday Modal */}
        {showBirthdayModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 max-w-sm w-full">
              <h3 className="text-lg font-semibold mb-3">Tune Your Frequency</h3>
              <p className="text-xs text-slate-300 mb-4">
                Add your birthday so we can align your dashboard messages with your natural timing.
              </p>
              <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm mb-4"
              />
              <button
                onClick={saveBirthday}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-xs font-semibold py-2 rounded-lg"
              >
                Save & Align
              </button>
            </div>
          </div>
        )}

        {/* Hidden Panel for Numerologists */}
        {showHiddenPanel && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-900 p-8 rounded-3xl border border-indigo-500 max-w-lg w-full">
              <h2 className="text-xl font-bold text-yellow-400 mb-2">Hidden Panel</h2>
              <p className="text-xs text-slate-300 mb-4">
                This space is for those who know the rhythm behind the numbers.
              </p>
              <p className="text-sm text-slate-200 mb-4">
                Are you interested in raising your income by <span className="font-bold">300%</span> by 
                aligning your outreach with your personal frequency?
              </p>
              <p className="text-xs text-slate-400 mb-4">
                (This is where you can introduce paid lessons: life path sessions, launch timing, rhythm of calls, etc.)
              </p>
              <button
                onClick={() => setShowHiddenPanel(false)}
                className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-xs font-semibold py-2 rounded-lg"
              >
                Close Panel
              </button>
            </div>
          </div>
        )}

        {/* Trigger Hidden Panel */}
        {tapCount >= 2 && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 px-4 py-2 rounded-xl text-[10px] text-slate-300">
            One more tap on the code to unlock a deeper layer.
          </div>
        )}

        {showHiddenPanel === false && (
          <div
            className="sr-only"
            onClick={() => setShowHiddenPanel(true)}
          />
        )}

      </main>
    </div>
  )
}          )}
          
          <button onClick={() => setActiveTab('academy')} className={`flex items-center space-x-4 w-full p-4 rounded-2xl ${activeTab === 'academy' ? 'bg-indigo-600' : 'text-slate-400'}`}>
            <GraduationCap /> <span className="font-bold">Training Vault</span>
          </button>
        </nav>
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center space-x-3 text-emerald-400">
           <ShieldCheck size={20} /> <span className="text-[10px] font-black uppercase tracking-widest leading-none">Vault Status:<br/>Sovereign</span>
        </div>
      </aside>

      {/* MAIN STAGE */}
      <main className="flex-1 p-12 relative">
        {/* THE ORIENTATION WIZARD */}
        <div className="absolute bottom-8 right-8 max-w-xs bg-slate-900 border border-indigo-500/30 p-6 rounded-3xl shadow-2xl animate-bounce">
          <p className="text-indigo-400 font-bold text-xs uppercase mb-2 tracking-widest underline">Orientation Phase 1</p>
          <p className="text-xs text-slate-300 leading-relaxed italic">"Start in the **Cockpit**. Verify your stats. Then, enter the **Vault** to align your outreach habits."</p>
        </div>

        {/* EASTER EGG TRIGGER */}
        <div className="absolute top-4 right-8 text-[10px] text-slate-600 tracking-[0.4em] cursor-pointer hover:text-indigo-400" onClick={() => setTapCount(c => c+1)}>CODE: 33 • 11 • 22 • 88</div>

        <header className="mb-12">
          <h1 className="text-4xl font-bold italic">The Armory</h1>
          <p className="text-slate-500 mt-2 font-medium">Daily Rhythm: "Your frequency is sharp today. Use it to lead, not to chase."</p>
        </header>

        {activeTab === 'cockpit' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-10 rounded-[2.5rem] border border-slate-800">
               <h3 className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Active Agents</h3>
               <p className="text-6xl font-black mt-4 italic">355</p>
            </div>
            <div className="bg-slate-900 p-10 rounded-[2.5rem] border border-slate-800">
               <h3 className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Homestead Fund</h3>
               <p className="text-6xl font-black mt-4 text-emerald-500 italic">$0</p>
            </div>
          </div>
        )}

        {/* HIDDEN MODAL */}
        {showHidden && (
          <div className="fixed inset-0 bg-slate-950/95 flex items-center justify-center z-[100] p-6">
            <div className="max-w-xl w-full bg-slate-900 border-2 border-indigo-500 p-12 rounded-[3rem] text-center">
              <h2 className="text-3xl font-black text-yellow-400 mb-4 italic uppercase">Unlock the Hidden Rhythm</h2>
              <p className="text-slate-300 mb-8">"Are you interested in raising your income by 300% by tapping the universal timing?"</p>
              <div className="space-y-4 text-left mb-8">
                 <p className="text-xs text-indigo-300 font-bold uppercase underline">Initiation Fee: $44</p>
                 <p className="text-sm text-slate-400 italic">• Personalized Life Path Lessons</p>
                 <p className="text-sm text-slate-400 italic">• Launch Timing Synchronization</p>
              </div>
              <button className="w-full bg-indigo-600 py-4 rounded-2xl font-black uppercase tracking-tighter" onClick={() => setShowHidden(false)}>Accept Aligned Path</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}          ) : (
            <button className="flex items-center space-x-4 w-full p-4 rounded-2xl text-slate-600 cursor-not-allowed"><Lock size={20} /><span>Locked Frequency</span></button>
          )}

          <button onClick={() => setActiveTab('compare')} className="flex items-center space-x-4 w-full p-4 rounded-2xl text-slate-400 hover:bg-slate-800"><Zap size={20} /><span>Market Compare</span></button>
          <button onClick={() => setActiveTab('academy')} className="flex items-center space-x-4 w-full p-4 rounded-2xl text-slate-400 hover:bg-slate-800"><GraduationCap size={20} /><span>The Academy</span></button>
        </nav>
        
        {/* HIDDEN PANEL TRIGGER */}
        <div className="p-6 bg-indigo-900/20 border border-indigo-500/30 rounded-[30px] cursor-pointer hover:bg-indigo-900/40 transition-all" onClick={() => setShowHidden(true)}>
           <p className="text-[10px] font-black text-indigo-400 uppercase mb-1">Advanced Rhythm</p>
           <h4 className="text-sm font-bold text-white italic">"Unlock 300% Growth"</h4>
        </div>
      </aside>

      {/* MAIN STAGE */}
      <main className="flex-1 p-12 relative">
        {/* ORIENTATION WIZARD */}
        {step < 3 && (
          <div className="absolute top-20 left-20 z-50 bg-[#4f46e5] p-6 rounded-3xl max-w-xs shadow-2xl animate-bounce">
            <p className="font-bold text-sm">{wizardSteps[step].text}</p>
            <button onClick={() => setStep(step + 1)} className="mt-4 bg-white text-indigo-600 px-4 py-1 rounded-full text-xs font-black">Next Sequence</button>
          </div>
        )}

        <header className="flex justify-between items-start mb-16">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">System Aligned</h2>
            <p className="text-slate-500 mt-2 italic font-medium">"Success is a rhythm. Timing is the weapon."</p>
          </div>
          <div className="bg-[#111827] p-5 rounded-3xl border border-slate-800 flex items-center gap-4">
             <div className="text-right">
               <p className="text-[10px] text-slate-500 font-bold uppercase">Today's Alignment</p>
               <p className="text-xl font-bold text-emerald-400">88% CLEAR</p>
             </div>
             <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500"><Zap size={24} /></div>
          </div>
        </header>

        {/* HIDDEN PANEL MODAL */}
        {showHidden && (
          <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-6">
            <div className="max-w-xl w-full bg-[#111827] p-12 rounded-[40px] border-2 border-indigo-500 shadow-[0_0_100px_rgba(79,70,229,0.2)]">
               <h2 className="text-3xl font-black text-white mb-6">UNSEEN PATHS</h2>
               <p className="text-slate-400 mb-8 text-lg">Are you ready to harmonize your Light Path with your production? We have decoded a 300% income surge through specific Timing and Frequency adjustments.</p>
               <div className="space-y-4">
                 <p className="text-indigo-400 font-bold">1. Have you noticed repeating numbers in your sales data?</p>
                 <div className="flex gap-4">
                   <button className="flex-1 py-3 bg-slate-800 rounded-xl hover:bg-indigo-600 transition-all">Yes</button>
                   <button className="flex-1 py-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all">Not Yet</button>
                 </div>
                 <p className="mt-8 text-xs text-slate-600">The Hidden Panel requires a one-time Frequency Adjustment Fee ($297).</p>
                 <button onClick={() => setShowHidden(false)} className="w-full mt-6 py-4 bg-indigo-600 rounded-2xl font-black uppercase tracking-widest shadow-xl">Initiate Checkout</button>
               </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-[#111827] p-10 rounded-[40px] border border-slate-800 shadow-2xl">
              <h3 className="text-slate-500 text-[10px] font-black uppercase mb-4 tracking-[0.2em]">Live Feed</h3>
              <p className="text-2xl font-bold">Waiting for your first Alignment...</p>
           </div>
           <div className="bg-gradient-to-br from-[#4f46e5] to-[#312e81] p-10 rounded-[40px] shadow-2xl">
              <h3 className="text-indigo-200 text-[10px] font-black uppercase mb-4 tracking-[0.2em]">Daily Rhythm</h3>
              <p className="text-3xl font-black italic">"The Oracle favors the bold. Feb 9 is your peak window. Prepare the comparisons."</p>
           </div>
        </div>
      </main>
    </div>
  );
}      {/* MAIN STAGE */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold">The Armory</h2>
            <p className="text-slate-400 mt-1">Master Teacher Frequency: 33/6</p>
          </div>
          <div className="flex items-center space-x-4 bg-slate-900 p-4 rounded-2xl border border-slate-800 shadow-xl">
             <div className="text-right">
               <p className="text-[10px] text-slate-500 uppercase font-bold">Stripe Float</p>
               <p className="text-2xl font-black text-emerald-400">$0.00</p>
             </div>
             <Settings className="text-slate-600 hover:rotate-90 transition-transform cursor-pointer" />
          </div>
        </header>

        {/* SCREEN 1: FINANCIAL COCKPIT */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden group">
              <h3 className="text-slate-500 text-xs font-black uppercase">Active Agents</h3>
              <p className="text-6xl font-black mt-4 italic">355</p>
              <div className="mt-4 text-emerald-400 text-sm font-bold flex items-center">↑ 24% Activation</div>
            </div>
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
              <h3 className="text-slate-500 text-xs font-black uppercase">Homestead Fund</h3>
              <p className="text-6xl font-black mt-4 text-emerald-500">$0</p>
              <div className="mt-6 w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full w-[2%] shadow-[0_0_15px_rgba(99,102,241,0.8)]"></div>
              </div>
              <p className="text-[10px] text-slate-500 mt-3 font-bold">TARGET: $5,000 FOR GRANT RADAR</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 rounded-3xl shadow-2xl border border-indigo-400">
              <h3 className="text-indigo-100 text-xs font-black uppercase">Viral Offer</h3>
              <p className="text-3xl font-black mt-4 leading-tight">1 Referral = 1 Month Free</p>
              <p className="text-indigo-200/60 text-xs mt-2 uppercase font-bold tracking-widest">Capped at 33 Months</p>
              <button className="mt-8 w-full bg-white text-indigo-900 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-slate-100 transition-all">Copy Ref Link</button>
            </div>
          </div>
        )}

        {/* SCREEN 2: GG33 SCRAPER */}
        {activeTab === 'scraper' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">GG33 Birthday Filter</h3>
                <span className="px-4 py-1 bg-indigo-500/20 text-indigo-400 text-xs font-black rounded-full border border-indigo-500/30">Target: 02/09/1984 Alignment</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase">Search Radius</label>
                  <div className="flex bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <Search className="text-slate-500 mr-3" />
                    <input className="bg-transparent outline-none w-full" placeholder="Independent Health Broker, USA" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase">Pattern Filter</label>
                  <div className="flex bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <input className="bg-transparent outline-none w-full" defaultValue="Life Path 33, Feb 9, Class of 2006" />
                  </div>
                </div>
              </div>
              <button onClick={() => setScraperResults(true)} className="mt-8 bg-indigo-600 px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-all">Execute Pattern Scan</button>
            </div>
            {scraperResults && (
              <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                <table className="w-full text-left">
                  <thead className="bg-slate-800 text-[10px] font-black uppercase text-slate-400">
                    <tr><th className="p-6">Broker Name</th><th>Pattern Match</th><th>Birthday Proxy</th><th>Action</th></tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-t border-slate-800 hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 font-bold">Michael Vance</td>
                      <td><span className="text-indigo-400 font-black">98% (33/6)</span></td>
                      <td>Feb 9 (Class of 2006)</td>
                      <td><button className="text-xs bg-emerald-600 px-4 py-2 rounded-lg font-bold">Send Code</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* SCREEN 3: TRAINING ACADEMY */}
        {activeTab === 'academy' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in zoom-in-95 duration-500">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden group cursor-pointer shadow-xl">
                <div className="aspect-video bg-slate-800 flex items-center justify-center relative">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play fill="white" className="ml-1" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">Module {i}</div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold">The $100k/mo "Beast Mode" Initiation</h4>
                  <p className="text-xs text-slate-500 mt-2">Mastering the side-by-side comparison to close group deals in 60 seconds.</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* OTHER TABS CALIBRATING */}
        {['compare', 'commissions'].includes(activeTab) && (
          <div className="h-96 flex flex-col items-center justify-center text-center space-y-6">
             <div className="w-24 h-24 bg-slate-900 rounded-full border border-slate-800 flex items-center justify-center shadow-inner">
               <Zap className="text-indigo-500 animate-pulse" size={40} />
             </div>
             <h3 className="text-2xl font-black uppercase tracking-tighter">Calibrating Frequency</h3>
             <p className="text-slate-500 max-w-sm font-medium italic">"The market comparison engine is tuning to your birth frequency. Full activation at $5,000 MRR."</p>
          </div>
        )}
      </main>
    </div>
  );
}
