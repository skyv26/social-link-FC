/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", 'serif']
      },
      backgroundImage: {
        'design': "url('./src/assets/images/destkop-design.jpg')",
        'm-design': "url('./src/assets/images/mobile-design.jpg')",
        'aakash_bg': 'linear-gradient(90deg, hsla(184, 85%, 63%, 1) 0%, hsla(240, 46%, 76%, 1) 50%, hsla(319, 72%, 75%, 1) 100%)'
      },
      backgroundColor: {
        'gray_900': 'hsl(0, 0%, 8%)',
        'gray_800': 'hsl(0, 0%, 12%)',
        'gray_700': 'hsl(0, 0%, 20%)',
        'green': 'hsl(75, 94%, 57%)',
      },
      colors: {
        'gray_900': 'hsl(0, 0%, 8%)',
        'gray_800': 'hsl(0, 0%, 12%)',
        'gray_700': 'hsl(0, 0%, 20%)',
        'green': 'hsl(75, 94%, 57%)'
      },
      keyframes: {
        rotateScale: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.5) rotate(180deg)' },
        },
        'bg-slide': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        rotateScale: 'rotateScale 3s infinite ease-in-out', // Adjust duration as needed
        'bg-slide': 'bg-slide 3s infinite linear',
      },
    },
    
  },
  plugins: [],
};
