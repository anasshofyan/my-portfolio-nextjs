/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ansomarfa: {
            yellow: '#FEC110',
            dark: '#5B5B5B',
            light: '#F6F9FC',
            gray: '#C6C6C6'
        }
      },
      fontFamily: {
        'sans': ['sans-serif', 'Rubik'],
      },
    },
  },
  plugins: [],
}
