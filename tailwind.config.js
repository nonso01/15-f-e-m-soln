/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.vue"],
  theme: {
    colors: {
      green: "hsl(75, 94%, 57%)",
      grey: "hsl(0, 0%, 20%)",
      "dark-grey": "hsl(0, 0%, 12%)",
      "off-black": "hsl(0, 0%, 8%)",
    },
    fontFamily: {
      sans: ["'Inter'", "sans-serif"],
    },
    xtend: {},
  },
  plugins: [],
};
