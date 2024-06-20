import type { Config } from "tailwindcss";

interface BlurProps {
  addUtilities: any;
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '960px',
      },
      transitionDuration: {
        400: '400ms', 
      },
      spacing: {
        '84': '200px',
      },
      colors: {
        'pt-primary': 'rgb(6, 67, 62)',
        'pt-secondary': 'rgb(12, 5, 29)',
        'pt-red': '#F85252',
        'pt-background': '#ECF2F1',
        'pt-green': '#48937E',
        'pt-darkblue1': '#14243C',
        'pt-darkblue2': '#2A394E',
        'pt-gray1': '#868686',
        'pt-lightgrayborder': '#E8E8E8',
        'pt-gray2': '#F0F0F0',
        'custom-black': '#0B051D',
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        mono: ["Roboto", "monospace"],
        nunito: ["Nunito", "sans-serif"]
      },
      fontSize: {
        heading1: ["64px", { lineHeight: "80px" }],
        heading2: ["48px", { lineHeight: "40px" }],
        heading3: ["32px", { lineHeight: "35px" }],
        heading4: ["24px", { lineHeight: "35px" }],
        heading5: ["18px", { lineHeight: "20px" }],
        buttonText: ["16px", { lineHeight: "auto" }],
        paragraph1: ["16px", { lineHeight: "26px" }],
        paragraph2: ["16px", { lineHeight: "26px" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: BlurProps) {
      addUtilities({
        '.webkit-blur-5': {
          '-webkit-backdrop-filter': 'blur(5px)', 
        },
        '.webkit-blur-3': {
          '-webkit-backdrop-filter': 'blur(3px)',
        },
        '.webkit-blur-10': {
          '-webkit-backdrop-filter': 'blur(10px)',
        },
      });
    },
  ],
};

export default config;