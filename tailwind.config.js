/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#303039",
        white: "#ECEAF2",
        purple: "#9AA1BC",
        accent: "#5bedc7",
      },
      // keyframes: {
      //   pulse: {
      //     '0%, 100%': { opacity: 0.5 },
      //     '50%': { opacity: 0 },
      //   },
      // },
    },
  },
  plugins: [],
};
