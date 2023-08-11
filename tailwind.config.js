/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Rio-de-Janeiro': "url('./images/rio-de-janeiro.jpg')",
      },
    },
    
    fontFamily: {
      'Inter': 'Inter, sans-serif',
      'sans': ['Inter', 'sans-serif']  
    },
  },
  plugins: [],
}

