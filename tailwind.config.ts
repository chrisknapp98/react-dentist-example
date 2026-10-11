import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        vs: "375px",
        xs: "475px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        practiceGrey: "var(--practice-grey)",
        practiceRed: "var(--practice-red)",
        practiceWhite: "#FFF",
        practiceSkin: "var(--practice-skin)",
        practiceBlue: "var(--practice-blue)",
        textGrey: "var(--text-grey)",
        textBlue: "var(--text-blue)",
        textLightBlue: "var(--text-light-blue)",
        backgroundGray: "var(--background-gray)",
        backgroundLightGray: "var(--background-light-gray)",
      },
    },
  },
} satisfies Config;
