import { CheckoutDemo } from '@/components/CheckoutDemo'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto text-center">
      {/* Hero Section */}
      <div className="py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-900 mb-6">
          🚀 CurisPro Broker Platform
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
          Full market comparisons for group health, life, and ancillary benefits. Get started today.
        </p>

        {/* Start Button */}
        <CheckoutDemo />
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
        <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
          <h3 className="text-2xl font-bold mb-4 text-indigo-600">📊 Full Market Quotes</h3>
          <p className="text-slate-600">Compare all carriers in seconds with no manual data entry.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
          <h3 className="text-2xl font-bold mb-4 text-indigo-600">💸 Automated Commissions</h3>
          <p className="text-slate-600">Get paid directly to your bank account with no delays.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
          <h3 className="text-2xl font-bold mb-4 text-indigo-600">🤝 Agent Onboarding</h3>
          <p className="text-slate-600">5-minute setup to get your team live and selling fast.</p>
        </div>
      </div>
    </div>
  )
}
