/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenT: 'rgba(52, 146, 40, 1)',
        '#0000009E': '#0000009E',
        '#349228': '#349228',
        '#FFD289': '#FFD289'
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
