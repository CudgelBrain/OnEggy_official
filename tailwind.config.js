/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '*'
  ],
  theme: {
    extend: {
      colors: {
        blue: "#00ABA1", 
        l_blue:"#00E5D8",
        grey:"#979797",
        teal:"#238790",
        v_l_teal:"#EFF6FC"

      },
    },
    theme: {
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
}
