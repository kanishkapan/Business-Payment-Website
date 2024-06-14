// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Adjust this to your primary color
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-gradient-blue': {
          'background': 'linear-gradient(90deg, #00d2ff, #00c6a7)', // Adjust gradient colors as needed
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.bg-blue-gradient': {
          'background': 'linear-gradient(90deg, #00d2ff, #00c6a7)', // Adjust gradient colors as needed
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
