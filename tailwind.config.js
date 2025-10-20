/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'jersey-15': ['var(--font-jersey-15)', 'sans-serif'],
        'kh': ['var(--font-kh)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}