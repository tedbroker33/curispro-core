export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-curisNavy mb-4">
        🚀 CurisPro is Live
      </h1>
      <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8">
        Your independent broker platform is deployed. Next step: onboard agents and start collecting subscriptions.
      </p>
      <button className="bg-curisBlue hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all">
        Go to Broker Dashboard
      </button>
    </div>
  )
}
