'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { DollarSign, Users, Briefcase, Sparkles, Settings, BookOpen, Target } from 'lucide-react'
import { OWNER_EMAIL } from '../../lib/constants'
import { getFrequencyNumber, getDailyQuote } from '../../lib/frequecy'

const LIFE_PATH_THEMES = {
  1: { primary: '#EF4444', secondary: '#DC2626', lucky: 'Red' },
  3: { primary: '#FACC15', secondary: '#EAB308', lucky: 'Yellow' },
  6: { primary: '#3B82F6', secondary: '#2563EB', lucky: 'Blue' },
  9: { primary: '#14B8A6', secondary: '#0D9488', lucky: 'Teal' },
  11: { primary: '#6366F1', secondary: '#4F46E5', lucky: 'Indigo' },
  22: { primary: '#8B5CF6', secondary: '#7C3AED', lucky: 'Violet' },
  33: { primary: '#F59E0B', secondary: '#D97706', lucky: 'Gold' }
}

function NavButton({ icon: Icon, label, href }: any) {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push(href)}
      className="flex items-center gap-3 p-4 bg-slate-900 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all w-full"
    >
      <Icon className="w-5 h-5 text-indigo-40
