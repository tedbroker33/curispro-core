export const LIFE_PATH_THEMES = {
  1: { primary: '#EF4444', secondary: '#DC2626', lucky: 'Red (Leadership)' },
  2: { primary: '#F97316', secondary: '#EA580C', lucky: 'Orange (Partnership)' },
  3: { primary: '#FACC15', secondary: '#EAB308', lucky: 'Yellow (Creativity)' },
  4: { primary: '#22C55E', secondary: '#16A34A', lucky: 'Green (Stability)' },
  5: { primary: '#06B6D4', secondary: '#0891B2', lucky: 'Turquoise (Freedom)' },
  6: { primary: '#3B82F6', secondary: '#2563EB', lucky: 'Blue (Harmony)' },
  7: { primary: '#8B5CF6', secondary: '#7C3AED', lucky: 'Purple (Wisdom)' },
  8: { primary: '#EC4899', secondary: '#DB2777', lucky: 'Pink (Abundance)' },
  9: { primary: '#14B8A6', secondary: '#0D9488', lucky: 'Teal (Completion)' },
  11: { primary: '#6366F1', secondary: '#4F46E5', lucky: 'Indigo (Intuition)' },
  22: { primary: '#8B5CF6', secondary: '#7C3AED', lucky: 'Violet (Master Builder)' },
  33: { primary: '#F59E0B', secondary: '#D97706', lucky: 'Gold (Master Teacher)' }
}

export const getDailyQuote = (lifePath: number) => {
  const quotes = {
    33: [
      "Your influence is mathematically undeniable. Lead with light.",
      "The Master Teacher frequency. Your words heal and inspire.",
      "Today's rhythm: Service × Vision = Legacy."
    ],
    6: [
      "Harmony is your leverage. Align the team to align the bag.",
      "The 33/6 frequency heals through abundance.",
      "Today's rhythm: Give value, receive wealth."
    ]
    // ... all Life Paths 1-33
  }
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000)
  return quotes[lifePath]?.[dayOfYear % 3] || "Align with your frequency today."
}
