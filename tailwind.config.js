
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4a4cff"
      },
      boxShadow: {
        "xxs": "0 4px 13px -2px #48484824",
        "xs": "0 4px 20px 1px #5e5e5e2e"
      }
    },
  },
  plugins: [],
}