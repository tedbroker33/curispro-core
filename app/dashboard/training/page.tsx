'use client'
import { useState } from 'react'
import { Play, Lock, CheckCircle } from 'lucide-react'

const VIDEOS = [
  { id: 1, title: 'Intro to CurisPro', unlocked: true, completed: false },
  { id: 2, title: 'Frequency Fundamentals', unlocked: false, completed: false }
]

export default function TrainingPage() {
  const [videos, setVideos] = useState(VIDEOS)

  const complete = (id: number) => {
    setVideos(v =>
      v.map((vid, i) =>
        vid.id === id
          ? { ...vid, completed: true }
          : i === id ? { ...vid, unlocked: true } : vid
      )
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-black italic text-indigo-400">Training Academy</h1>

      <div className="space-y-4 mt-8">
        {videos.map(v => (
          <div key={v.id} className="p-4 bg-slate-900 rounded-xl flex items-center gap-4">
            {v.completed ? <CheckCircle /> : v.unlocked ? <Play /> : <Lock />}
            <span>{v.title}</span>
            {v.unlocked && !v.completed && (
              <button onClick={() => complete(v.id)} className="ml-auto bg-indigo-600 px-4 py-2 rounded">
                Complete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

