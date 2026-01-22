'use client'
import Link from 'next/link'
import { LucideIcon, Lock } from 'lucide-react'

export default function ModuleCard({ icon: Icon, title, description, href, locked }: any) {
  return (
    <Link href={locked ? '#' : href} className={`group p-8 rounded-[3rem] border-2 transition-all duration-500 shadow-2xl ${locked ? 'bg-slate-900/50 border-slate-800 opacity-40 cursor-not-allowed' : 'bg-slate-900 border-slate-800 hover:border-indigo-500 hover:shadow-[0_0_50px_rgba(79,70,229,0.3)]'}`}>
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all ${locked ? 'bg-slate-800 text-slate-600' : 'bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110'}`}>
        {locked ? <Lock size={28} /> : <Icon size={32} />}
      </div>
      <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 italic text-slate-100">{title}</h3>
      <p className="text-sm text-slate-500 font-medium leading-relaxed">{description}</p>
      {!locked && <div className="mt-8 flex items-center text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] group-hover:translate-x-3 transition-transform">Initialize Sequence →</div>}
    </Link>
  )
}
