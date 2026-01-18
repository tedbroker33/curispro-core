// lib/frequency.ts
// Internally, this is numerology. Externally, we call it "frequency number".

export function getFrequencyNumber(birthDate: string): number | null {
  // birthDate: "YYYY-MM-DD"
  if (!birthDate) return null
  const digits = birthDate.replace(/\D/g, '').split('').map(Number)
  let sum = digits.reduce((a, b) => a + b, 0)
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0)
  }
  return sum
}

export function getDailyQuote(frequency: number | null, today: Date): string {
  if (!frequency) {
    return 'Small aligned actions today will echo in your commissions tomorrow.'
  }

  const daySeed = today.getFullYear() + today.getMonth() + today.getDate() + frequency
  const index = daySeed % 4

  const baseQuotes = [
    'Today, follow the rhythm of your best habits. The right calls at the right time.',
    'Your alignment is your leverage. Say “no” to noise, “yes” to scalable deals.',
    'Timing is on your side. Reach out to the people you’ve been “meaning to” call.',
    'Your frequency is sharp today. Use it to lead, not to chase.',
  ]

  return baseQuotes[index]
}
