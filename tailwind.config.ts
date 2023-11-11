import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#000413',
        'heavy-blue': '#000E43',
        'normal-blue': '#1A4EFF',
        'light-blue': '#587EFF',
        'white-blue': '#ABBEFB',
        'normal-white': '#fffff'
      }
    },

  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
