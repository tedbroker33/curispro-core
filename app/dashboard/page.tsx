'use client'
import { useState, useEffect } from 'react';
import { LayoutDashboard, Users, Zap, GraduationCap, BarChart3, Settings, Play, ShieldCheck, Search, Download } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [scraperResults, setScraperResults] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white font-sans overflow-hidden">
      {/* SIDEBAR */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col space-y-8 shadow-2xl">
        <div className="text-3xl font-black text-indigo-500 tracking-tighter italic">CURISPRO</div>
        <nav className="flex-1 space-y-2">
          {[
            { id: 'overview', label: 'Financial Cockpit', icon: LayoutDashboard },
            { id: 'scraper', label: 'GG33 Scraper', icon: Users },
            { id: 'compare', label: 'Market Compare', icon: Zap },
            { id: 'academy', label: 'Training Academy', icon: GraduationCap },
            { id: 'commissions', label: 'Commissions', icon: BarChart3 },
          ].map((item) => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} className={`flex items-center space-x-4 w-full p-4 rounded-2xl transition-all duration-300 ${activeTab === item.id ? 'bg-indigo-600 shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
              <item.icon size={22} />
              <span className="font-bold">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2">Sovereign Security</p>
          <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono">
            <ShieldCheck size={14} />
            <span>VAULT ACTIVATED</span>
          </div>
        </div>
      </aside>

      {/* MAIN STAGE */}
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
