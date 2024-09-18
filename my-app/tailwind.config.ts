import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#DAE6F2",
        backgroundBody: "#F0F3F8",
        darkBlue: "#204973",
        link: "#3758AB",
        gray: "#7C96B1",
      },
      fontSize: {
        "18": "18px",
        "28": "28px",
      },
      lineHeight: {
        "22": "22px",
        "34": "34px",
      },
      width: {
        "1440": "1440px",
        "360": "360px",
        "365": "365px",
        "1047": "1047px",
        "225": "225px",
      },
      height: {
        "86": "86px",
        "50": "50px",
        "38": "38px",
        "190": "190px",
        "157": "157px",
      },
      maxWidth: {
        "1440": "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
