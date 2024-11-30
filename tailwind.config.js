/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Dark Mode'u class olarak kullanıyoruz
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Mode renkleri
        "background": "#0a0a0a", // Dark mode arkaplan rengi
        "foreground": "#ededed", // Dark mode metin rengi
        
        "background-dark": "#1a202c", // Dark mode arkaplan rengi
        "foreground-dark": "#2d3748", // Dark mode metin rengi
        "text-dark": "#e2e8f0", // Dark mode metin rengi
      },
    },
  },
  plugins: [],
};