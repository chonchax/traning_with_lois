import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: '#faf6fe',
          100: '#f1e9fb',
          200: '#e4d3f8',
          300: '#ceb0f2',
          400: '#9d61e5',
          500: '#6d21ca',
          600: '#4e1891',
          700: '#391169',
          800: '#210a3d',
          900: '#11051f',
          950: '#090312'
        },
        secondary: {
          50: '#fcf8fa',
          100: '#f7edf2',
          200: '#f0dbe4',
          300: '#e4becf',
          400: '#c97e9f',
          500: '#a54570',
          600: '#773251',
          700: '#56243b',
          800: '#321522',
          900: '#190b11',
          950: '#0e060a'
        },
        tertiary: {
          50: '#fdf7fd',
          100: '#fbeafa',
          200: '#f6d5f4',
          300: '#efb3eb',
          400: '#e067d8',
          500: '#c328b8',
          600: '#8c1d84',
          700: '#661560',
          800: '#3b0c38',
          900: '#1e061c',
          950: '#110310'
        },
        quaternary: {
          50: '#faf6fd',
          100: '#f1eafb',
          200: '#e4d4f7',
          300: '#ceb2f0',
          400: '#9d66e1',
          500: '#6d27c4',
          600: '#4f1c8d',
          700: '#391466',
          800: '#210c3c',
          900: '#11061e',
          950: '#0a0311'
        },
        quinary: {
          50: '#fafbf9',
          100: '#f1f6ef',
          200: '#e4ecdf',
          300: '#ceddc5',
          400: '#9dbc8a',
          500: '#6e9556',
          600: '#4f6b3d',
          700: '#394e2d',
          800: '#212d1a',
          900: '#11170d',
          950: '#0a0d07'
        }
      }
    },
  },
  plugins: [],
};
export default config;
