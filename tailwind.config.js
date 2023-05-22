const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light"],
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1520px",
      contentContainer: "1280px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
      colors: {
        blue: "#0071dc",
        lightBlue: "#e6f1fc",
        yellow: "#ffc220",
        hoverBg: "#004f9a",
        lightText: "#46474a"
      },
      boxShadow: {
        bannerShadow: "0 1px 2px 1px #00000026"
      },
      fontFamily: {
        sans: ["var(--font-open_sans)", ...fontFamily.sans],
      }
    },
  },
  plugins: [require("daisyui")],
}
