/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        black: "#343434",
        white: "#ffff",
        lila: "#6a75db",
        gray: "#757575",
        red: "#ec0e16",
      },
      height: {
        124: "30rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
