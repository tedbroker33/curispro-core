// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 text-center p-6">
      <h1 className="text-5xl font-bold mb-6 text-slate-900">🚀 CurisPro Is Live</h1>
      <p className="text-xl mb-8 max-w-2xl text-slate-600">
        Your broker engine has been deployed successfully.
      </p>
      <a 
        href="/admin/cockpit" 
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-105"
      >Go to Admin Cockpit</a>
    </div>
  )
}
