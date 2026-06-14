/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E6F1FB',
          100: '#B5D4F4',
          400: '#378ADD',
          600: '#185FA5',
          800: '#0C447C',
          900: '#042C53',
        },
        teal: {
          100: '#E1F5EE',
          300: '#5DCAA5',
          500: '#1D9E75',
          700: '#0F6E56',
        },
      },
    },
  },
  plugins: [],
};