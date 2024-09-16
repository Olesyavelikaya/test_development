import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        '18': '18px',
      },

      lineHeight: {
        '22': '22px', 
      },
      width: {
        '365': '365px', 
      },

      height: {
        '38': '38px', 
      },
    },
  },
  plugins: [],
};
export default config;
