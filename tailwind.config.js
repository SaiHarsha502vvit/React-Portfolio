module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          black: "var(--primary-black)",
          white: "var(--primary-white)",
        },
        accent: {
          lavender: "var(--accent-lavender)",
          mint: "var(--accent-mint)",
          peach: "var(--accent-peach)",
          yellow: "var(--accent-yellow)",
          "yellow-dark": "var(--accent-yellow-dark)",
          "yellow-darker": "var(--accent-yellow-darker)",
          blue: "var(--accent-blue)",
          "blue-dark": "var(--accent-blue-dark)",
          "blue-darker": "var(--accent-blue-darker)",
          green: "var(--accent-green)",
          "green-dark": "var(--accent-green-dark)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        border: {
          light: "var(--border-light)",
          dark: "var(--border-dark)",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        handlee: ["Handlee", "cursive"],
      },
    },
  },
  plugins: [],
};