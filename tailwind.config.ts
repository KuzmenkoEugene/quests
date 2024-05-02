import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "defaultBackground": "linear-gradient(180deg, rgba(0, 0, 0, 0.20) 72.3%, rgba(0, 0, 0, 0.00) 100%)",
        "footerBackground": "linear-gradient(180deg, rgba(19, 18, 18, 0.00) 0%, #131212 100%)",
      },
      fontFamily: {
        ralewayBlack: ['var(--font-raleway-black)'],
        ralewayBold: ['var(--font-raleway-bold)'],
        ralewayExtrabold: ['var(--font-raleway-extrabold)'],
        ralewayMedium: ['var(--font-raleway-medium)'],
        ralewayRegular: ['var(--font-raleway-regular)'],
        ralewaySemibold: ['var(--font-raleway-semibold)'],
      },
    },
  },
  plugins: [],
};
export default config;