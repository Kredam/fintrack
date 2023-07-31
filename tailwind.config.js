/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        semantics: {
          warning: '#FFBE0F',
          error: '#BD2000',
          success: '#1A5D1A',
        },
        primary: '#393E46',
        background: '#222831',
        secondary: '#00ADB5',
      },
    },
  },
  plugins: [],
}
