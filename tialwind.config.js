/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'slate': {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
        },
        'cyan': {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        'blue': {
          900: '#1e3a8a',
          600: '#2563eb',
          500: '#3b82f6',
        }
      }
    },
  },
  plugins: [],
}