import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'buttonShadow': '0px 2px 30px 0px rgba(254, 196, 50, 0.50)',
      },
      backgroundImage: {
        "defaultBackground": "linear-gradient(180deg, rgba(0, 0, 0, 0.20) 72.3%, rgba(0, 0, 0, 0.00) 100%)",
        "footerBackground": "linear-gradient(180deg, rgba(19, 18, 18, 0.00) 0%, #131212 100%)",
        'bgForm': 'linear-gradient(0deg, #141414 0%, #1F1D1D 100%)',
      },
      fontFamily: {
        ralewayBlack: ['var(--font-raleway-black)'],
        ralewayBold: ['var(--font-raleway-bold)'],
        ralewayExtrabold: ['var(--font-raleway-extrabold)'],
        ralewayMedium: ['var(--font-raleway-medium)'],
        ralewayRegular: ['var(--font-raleway-regular)'],
        ralewaySemibold: ['var(--font-raleway-semibold)'],
      },
      colors: {
        bgInput: '#F2890F',
      },
    },
  },
  plugins: [],
};
export default config;
