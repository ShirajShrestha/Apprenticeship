/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-bg": "#000000",
        "primary-blue": "#0c1821",
        "secondary-blue": "#1b2a41",
        "primary-light": "#d7d9b1",
        "secondary-light": "#efbdeb",
      },
    },
  },
  plugins: [],
};
