export const OWNER_EMAIL = 'twenecki@myhst.com';
export const MASTER_INITIATION_PRICE = 33; 

export const ELITE_AGENTS: Record<string, { name: string; freeDays: number; quote: string }> = {
  'cjennings@myhst.com': { name: 'Corey Jennings', freeDays: 88, quote: '“Your loyalty is the current that moves the whole room.”' },
  'lwilds@myhst.com': { name: 'Lauren Wilds', freeDays: 88, quote: '“You are a warrior of light; your devotion sets the rhythm.”' },
  'jdavern@myhst.com': { name: 'Joe Davern', freeDays: 1095, quote: '“True partnership turns effort into a legacy.”' },
  'twenecki@myhst.com': { name: 'Ted Wenecki', freeDays: 10000, quote: '“The Architect. The Master Teacher. The system is yours.”' }
};

// These can be adjusted by Ted in the Owner Portal later
export const DYNAMIC_QUOTES: Record<number, string[]> = {
  1: ["Initiate. The Pioneer doesn't ask for permission.", "Your frequency is the One. Lead the pack."],
  6: ["Harmony is your leverage. Align the team to align the bag.", "The 33/6 frequency heals through abundance."],
  33: ["Master Teacher: The code is in your hands.", "Your influence is mathematically undeniable."]
};
