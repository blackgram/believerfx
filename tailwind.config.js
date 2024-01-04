/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'hero-pattern': "url('../assets/bgpattern.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        headtext: ["Open sans", "sans-serif"]
      },
      colors: {
        primary: '#9AD953',
        secondary: '#F5C06D',
        ash: 'rgb(182, 182, 182)',
        nb3: 'rgb(31, 31, 31)'
      }
    },
  },
  plugins: [],
}
