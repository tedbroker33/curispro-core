// CURISPRO GG33 SEARCH LOGIC
export const SCRAPER_CONFIG = {
  target_roles: ["Independent Insurance Broker", "Benefits Consultant"],
  education_proxy: {
    start_year: 2002, // Graduation year proxy for ~1984 birth
    end_year: 2007
  },
  gg33_birthday_keywords: [
    "Feb 9", "February 9", "02/09", "02-09", 
    "Life Path 33", "Life Path 6", "Master Teacher"
  ],
  outreach_template: (name: string) => `
    Hey ${name}, your profile flagged in our 02/09 frequency scan. 
    In a world of 95%, you're the 5%. 
    Launching CurisPro (33/6 Aligned Engine). 
    33 Master Slots open for 33 months of free access. 
    Link to activate: staging.curispro.com
  `
};
