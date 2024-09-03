/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Dana: "Dana",
        DanaMedium: "Dana Medium",
        DanaDemiBold: "Dana DemiBold",
        MorabbaLight: "Morabba Light",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
        VazirMedium: "Vazir Medium",
        VazirRegular: "Vazir Regular",
        Lalezar: "Lalezar",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "primary-baner": "url('/images/5.jpg')",
        "secondary-baner": "url('/images/3.jpg')",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        },
      },
      screens: {
        xxs: "360px",
        xs: "480px",
      },
      letterSpacing: {
        tightest: "-.065em",
      },
      boxShadow: {
        custom: "0px 1px 10px rgba(0, 0, 0, 0.05)",
        card: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
      colors: {
        brown: {
          50: "#f7f7f7",
          100: "#ebebee",
          200: "#c5c5cb",
          300: "#a8a9b2",
          400: "#94939e",
          500: "#83828e",
          600: "#777580",
          700: "#64626b",
          800: "#535157",
          900: "#353437",
        },
        catalan: {
          50: "#f2f9f9",
          100: "#f2f9f9",
          200: "#bfe0e2",
          300: "#92cace",
          400: "#5faab1",
          500: "#3b757f",
          600: "#356169",
          700: "#325158",
          800: "#2d464c",
          900: "#1a2c32",
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
