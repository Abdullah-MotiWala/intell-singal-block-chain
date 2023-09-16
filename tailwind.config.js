/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
  
      colors: {
        'gr': '#1d1d1d',
        'gr1':'#606060',
        'gr2':'#141617',
        'gr3':'#757575',
        'sk': '#25abf4',
        'sk1':'#564DCA',
        'gre':'#18D48C'
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

