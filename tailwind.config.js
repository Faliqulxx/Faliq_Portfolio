/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          lavender: "#F5F5F5",
          blush:    "#FAFAFA",
          violet:   "#737373",
          electric: "#A3A3A3",
          deep:     "#404040",
          navy:     "#171717",
        },
      },
      backgroundImage: {
        "gradient-radial":       "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "brand-gradient":        "linear-gradient(135deg, #262626 0%, #0a0a0a 100%)",
        "brand-gradient-soft":   "linear-gradient(135deg, #FAFAFA 0%, #E5E5E5 50%, #D4D4D4 100%)",
        "brand-gradient-radial": "radial-gradient(ellipse at center, #262626 0%, #171717 60%, #0a0a0a 100%)",
      },
      boxShadow: {
        soft:           "0 8px 30px rgba(0, 0, 0, 0.04)",
        glass:          "0 4px 30px rgba(0, 0, 0, 0.1)",
        "glow-violet":  "0 0 32px rgba(255, 255, 255, 0.12)",
        "glow-electric":"0 0 32px rgba(255, 255, 255, 0.08)",
        "glow-soft":    "0 0 60px rgba(255, 255, 255, 0.06)",
        "glow-card":    "0 4px 32px rgba(0, 0, 0, 0.08)",
      },
      keyframes: {
        slide: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 16px rgba(255, 255, 255, 0.08)" },
          "50%":       { boxShadow: "0 0 40px rgba(255, 255, 255, 0.15)" },
        },
      },
      animation: {
        slide:       "slide 40s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
