/** @type {import('tailwindcss').Config} */
export default {
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
        'design': "url('./src/assets/images/desktop-design.jpg')",
        'm-design': "url('./src/assets/images/mobile-design.jpg')"
      },
      backgroundColor: {
        'gray_900': 'hsl(0, 0%, 8%)',
        'gray_800': 'hsl(0, 0%, 12%)',
        'gray_700': 'hsl(0, 0%, 20%)',
        'green': 'hsl(75, 94%, 57%)'
      },
      colors: {
        'gray_900': 'hsl(0, 0%, 8%)',
        'gray_800': 'hsl(0, 0%, 12%)',
        'gray_700': 'hsl(0, 0%, 20%)',
        'green': 'hsl(75, 94%, 57%)'
      }
    },
  },
  plugins: [],
};
