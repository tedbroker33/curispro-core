'use client'
import Link from 'next/link'
import { LucideIcon, Lock } from 'lucide-react'

export default function ModuleCard({ icon: Icon, title, description, href, locked }: any) {
  return (
    <Link href={locked ? '#' : href} className={`group p-8 rounded-[2.5rem] border-2 transition-all duration-500 ${locked ? 'bg-slate-900/50 border-slate-800 opacity-50 cursor-not-allowed' : 'bg-slate-900 border-slate-800 hover:border-indigo-500 hover:shadow-[0_0_40px_rgba(79,70,229,0.2)]'}`}>
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${locked ? 'bg-slate-800 text-slate-600' : 'bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white'}`}>
        {locked ? <Lock size={24} /> : <Icon size={28} />}
      </div>
      <h3 className="text-xl font-black uppercase tracking-tighter mb-2 italic">{title}</h3>
      <p className="text-sm text-slate-500 font-medium leading-relaxed">{description}</p>
      {!locked && <div className="mt-6 flex items-center text-indigo-400 text-[10px] font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform">Initialize Module →</div>}
    </Link>
  )
}
