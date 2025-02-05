/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "var(--main-color)",
        "hover-main-color": "var(--hover-main-color)",
        "color-black": "var(--color-black)",
        "color-white": "var(--color-white)",
        "frist-color": "var(--frist-color)",
        "thrid-color": "var(--thrid-color)",
        "secound-color": "var(--secound-color)",
      },
    },
  },

  plugins: [],
};
