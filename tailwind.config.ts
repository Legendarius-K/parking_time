import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

interface blurProps {
  addUtilities: any
}

const config: Config = {

  
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
     fadeIn:{
      '0%': {opacity: '0',},
      '100%': {opacity: '1',}

     },
     
     
      },

animation: {
  fadeIn: 'fadeIn 1s ease-in-out infinite',


},

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
    function ({ addUtilities }:blurProps) {
      addUtilities({
        'scroll-smooth': {
          'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
          'transition-duration': '1000ms',
        },
        '.webkit-blur-5': {
          '-webkit-backdrop-filter': 'blur(5px)', 
        },
        '.webkit-blur-3': {
          '-webkit-backdrop-filter': 'blur(3px)',
        },
        '.webkit-blur-10': {
          '-webkit-backdrop-filter': 'blur(18px)',
        },
      });
    },

    
  ],

  
};



export default config;