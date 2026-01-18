'use client'
import { useRouter } from 'next/navigation';
import { LayoutDashboard, Users, Zap, GraduationCap, BarChart3 } from 'lucide-react';

export default function Dashboard() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col space-y-8">
        <div className="text-2xl font-bold text-indigo-500 tracking-tighter italic">CURISPRO</div>
        <nav className="flex-1 space-y-4">
          <button className="flex items-center space-x-3 w-full p-3 rounded-xl bg-indigo-600"><LayoutDashboard size={20} /><span>Financial Cockpit</span></button>
          <button className="flex items-center space-x-3 w-full p-3 rounded-xl text-slate-400 hover:bg-slate-800"><Users size={20} /><span>GG33 Scraper</span></button>
          <button className="flex items-center space-x-3 w-full p-3 rounded-xl text-slate-400 hover:bg-slate-800"><Zap size={20} /><span>Market Compare</span></button>
          <button className="flex items-center space-x-3 w-full p-3 rounded-xl text-slate-400 hover:bg-slate-800"><GraduationCap size={20} /><span>Academy</span></button>
        </nav>
      </aside>
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-8">Welcome, Master Teacher</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
            <h3 className="text-slate-400 text-xs uppercase font-bold">Active Agents</h3>
            <p className="text-5xl font-bold mt-2">355</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
            <h3 className="text-slate-400 text-xs uppercase font-bold">Homestead Fund</h3>
            <p className="text-5xl font-bold mt-2 text-emerald-400">$0.00</p>
          </div>
          <div className="bg-indigo-600 p-8 rounded-3xl shadow-xl">
            <h3 className="text-white/80 text-xs uppercase font-bold">Next Lucky Day</h3>
            <p className="text-3xl font-bold mt-2">Feb 9</p>
          </div>
        </div>
        <button onClick={() => router.push('/')} className="mt-12 text-slate-600 hover:text-slate-400 text-sm underline">Logout</button>
      </main>
    </div>
  );
}
