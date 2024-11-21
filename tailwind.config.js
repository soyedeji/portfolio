/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx}"],
  theme: {
      extend: {
          colors: {
              // Define the `border` color used by `border-border`
              border: 'hsl(var(--border))',
              background: 'hsl(var(--background))',
              foreground: 'hsl(var(--foreground))',
          },
      },
  },
  plugins: [require("tailwindcss-animate")],
};
