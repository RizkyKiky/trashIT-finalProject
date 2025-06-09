/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#004d40",
          button: "#a5f2a5",
          "button-hover": "#8ce98c",
          text: "#003b3b",
        },
        header: {
          bg: "#b4e197",
          title: "#2e7d32",
          link: "#2e4a1d",
          "link-hover": "#1b5e20",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
