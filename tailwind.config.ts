import type {Config} from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        "sans-jp": ["Noto Sans JP", "sans-serif"],
      },
      keyframes: {
        "slide-bg": {
          "0%": {"background-position": "-200% 0"},
          "100%": {"background-position": "200% 0"},
        },
      },
      animation: {
        "slide-bg": "slide-bg 2s linear infinite",
      },
      backgroundSize: {
        "200p": "200% 100%",
      },
    },
  },
  plugins: [],
} satisfies Config;
