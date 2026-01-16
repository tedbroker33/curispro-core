/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        curisNavy: "#0F172A",
        curisBlue: "#3B82F6",
        curisTeal: "#14B8A6",
        curisCoral: "#F97316"
      }
    }
  },
  plugins: []
}
