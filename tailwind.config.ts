import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
      fontStretch: {
        'extra-condensed': '50%',
        'condensed': '75%',
        'normal': '100%',
        'expanded': '125%',
        'extra-expanded': '150%',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      addUtilities({
        ".font-stretch-extra-condensed": { fontStretch: "extra-condensed" },
        ".font-stretch-condensed": { fontStretch: "condensed" },
        ".font-stretch-normal": { fontStretch: "normal" },
        ".font-stretch-expanded": { fontStretch: "expanded" },
        ".font-stretch-extra-expanded": { fontStretch: "extra-expanded" },
      });
    },
  ],
} satisfies Config;
