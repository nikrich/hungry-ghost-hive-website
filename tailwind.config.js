/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Hive Brand Colors
        primary: {
          50: '#f3f1ff',
          100: '#ebe5ff',
          200: '#dccfff',
          300: '#c5a9ff',
          400: '#a876ff',
          500: '#8b5cf6', // fallback
          600: '#7c3aed',
          700: '#6366f1', // Main primary
          800: '#4f46e5',
          900: '#4338ca',
        },
        secondary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Main secondary (amber/gold)
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Main accent (teal)
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
      backgroundColor: {
        dark: '#0F172A', // Deep navy for dark mode
        light: '#ffffff', // Clean white for light mode
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
