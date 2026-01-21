'use client'
import ModuleCard from '@/components/ModuleCard'
import { Video, FileText, Search, Building2, Users, TrendingUp } from 'lucide-react'

export default function GroupHub() {
  return (
    <div className="p-12 animate-in fade-in duration-1000">
      <header className="mb-16 border-l-4 border-indigo-500 pl-8">
        <h1 className="text-6xl font-black italic tracking-tighter uppercase">Group Benefits Command</h1>
        <p className="text-slate-500 mt-2 font-serif italic text-xl">"The 95% sell policies. The 5% sell systems. Align the employer, dominate the market."</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ModuleCard icon={Video} title="Group 101" description="33 Video Lessons. Must pass quizzes to unlock next frequency." href="/academy/group" />
        <ModuleCard icon={FileText} title="Viral Content" description="Hormozi-style group templates. Copy, paste, close." href="/templates/group" />
        <ModuleCard icon={Search} title="Market Compare" description="Side-by-side carrier analysis. Better than EASE." href="/tools/compare" />
        <ModuleCard icon={Building2} title="Client Scraper" description="Find local businesses by birth-alignment. $11/scrape." href="/scraper/business" />
        <ModuleCard icon={Users} title="Group Rep 1-on-1" description="Book a direct line with the Master closer." href="/schedule/rep" />
        <ModuleCard icon={TrendingUp} title="Power Leaderboard" description="See who is resonating at the highest level." href="/stats/group" />
      </div>
    </div>
  )
}
