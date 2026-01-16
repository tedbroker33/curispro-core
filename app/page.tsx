export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl font-bold text-slate-900 mb-4">CurisPro</h1>
      <p className="text-xl text-slate-600 mb-8">Aligned. Optimized. Unstoppable.</p>
      <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:scale-105 transition-transform">
        Activate Pro Tier - $97/mo
      </button>
      <div className="mt-12 text-slate-400 text-sm">Code: 33-11-22</div>
    </main>
  )
}
