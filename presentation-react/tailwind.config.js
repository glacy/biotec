/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(var(--color-primary-50-rgb) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--color-primary-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--color-primary-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700-rgb) / <alpha-value>)', // Main Background
          800: 'rgb(var(--color-primary-800-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-primary-900-rgb) / <alpha-value>)',
          950: 'rgb(var(--color-primary-950-rgb) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-primary-500-rgb) / <alpha-value>)',
        },
        accent: {
          50: 'rgb(var(--color-accent-50-rgb) / <alpha-value>)',
          100: 'rgb(var(--color-accent-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--color-accent-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--color-accent-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-accent-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-accent-500-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-accent-600-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-accent-700-rgb) / <alpha-value>)',
          800: 'rgb(var(--color-accent-800-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-accent-900-rgb) / <alpha-value>)',
          950: 'rgb(var(--color-accent-950-rgb) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-accent-500-rgb) / <alpha-value>)',
        },
        // Simple variables for contrast colors (no opacity needed usually, but keeping consistency is fine)
        'on-primary': 'var(--color-on-primary)',
        'on-accent': 'var(--color-on-accent)',
      }
    },
  },
  plugins: [],
}
