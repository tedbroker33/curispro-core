const SCRAPER_PRICING = {
  starter: {
    price: 11,
    leads: 50,
    sources: ['Facebook Groups'],
    oneTime: true
  },
  pro: {
    price: 33,
    leads: 200,
    sources: ['Facebook', 'LinkedIn', 'Google Maps'],
    oneTime: true
  },
  elite: {
    price: 88,
    leads: 500,
    sources: ['All 5 sources', 'Auto-schedule weekly'],
    oneTime: false // Recurring
  }
}

// Visual for Free Users (Grayed Out)
<div className="opacity-40 cursor-not-allowed relative">
  <Lock className="absolute top-4 right-4" />
  <ScraperCard title="Auto-Scraper" disabled={true} />
  <div className="mt-2 text-center">
    <span className="text-yellow-400 font-bold">Unlock for $88/mo</span>
  </div>
</div>
