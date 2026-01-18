// lib/constants.ts
export const OWNER_EMAIL = 'twenecki@myhst.com'

export const ELITE_AGENTS: Record<string, { name: string; freeDays: number; quote: string }> = {
  'cjennings@myhst.com': {
    name: 'Corey Jennings',
    freeDays: 88,
    quote: '“Your loyalty is the current that moves the whole room.”',
  },
  'lwilds@myhst.com': {
    name: 'Lauren Wilds',
    freeDays: 88,
    quote: '“You are a warrior of light; your devotion sets the rhythm for the team.”',
  },
  'jdavern@myhst.com': {
    name: 'Joe Davern',
    freeDays: 365 * 3,
    quote: '“True partnership turns effort into a legacy.”',
  },
}

export const BETA_AGENTS = [
  'vneely@myhst.com',
  'raden@myhst.com',
  'lgodoipiresgunnrussell@myhst.com',
  'ctucker@myhst.com',
  'thackney@myhst.com',
  'wwoerner@myhst.com',
  'mcountryman@myhst.com',
  'alakejr@myhst.com',
  'bduncan@myhst.com',
  'candacep90@yahoo.com',
  OWNER_EMAIL, // you get “chosen” treatment as owner
]
