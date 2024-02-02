/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primGreen: "silver", 
        hoverGreen: "#d6d5d5",                                     
        // hoverGreen: "#5fc8b2",                                     
        // primGreen: "#6CF9D8",                                      
        primDark: "#2D2E33",
        primTextColor: "zinc-300"
      },
      screens: {
        mdd: "576px",
        smm: "428px"
      },
    },
  },
  plugins: [],
}

