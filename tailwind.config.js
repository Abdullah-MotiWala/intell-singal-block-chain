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
        'gre':'#18D48C',


        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

