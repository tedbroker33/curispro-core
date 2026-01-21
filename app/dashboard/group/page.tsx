'use client'
import { Building2, Users, Video, FileText, Search, Calendar } from 'lucide-react'

export default function GroupBenefitsHub() {
  return (
    <div className="p-12">
      <header className="mb-12">
        <h1 className="text-5xl font-black italic">Group Benefits Command</h1>
        <p className="text-slate-400 mt-2">More powerful than EASE. Hormozi-approved.</p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Group 101 Training */}
        <ModuleCard 
          icon={Video}
          title="Group Sales 101"
          description="33 video modules unlocked sequentially"
          href="/dashboard/group/training"
        />

        {/* Viral Templates */}
        <ModuleCard 
          icon={FileText}
          title="Viral Content Library"
          description="50+ social posts & email templates"
          href="/dashboard/group/templates"
        />

        {/* Market Comparison */}
        <ModuleCard 
          icon={Search}
          title="Market Comparison Tool"
          description="All carriers, instant quotes"
          href="/dashboard/group/compare"
        />

        {/* Employer Scrapers */}
        <ModuleCard 
          icon={Building2}
          title="Employer Lead Gen"
          description="LinkedIn/Google scrapers"
          href="/dashboard/group/scrape"
        />

        {/* Group Rep Chat */}
        <ModuleCard 
          icon={Users}
          title="1-on-1 Rep Support"
          description="Book Slack call with expert"
          href="/dashboard/group/schedule"
        />

        {/* Leaderboard */}
        <ModuleCard 
          icon={TrendingUp}
          title="Group Leaderboard"
          description="Top group producers"
          href="/dashboard/group/leaderboard"
        />
      </div>
    </div>
  )
}
