const codesandbox = {
  neutral: {
    800: "#0E0E0E",
    700: "#161616",
    600: "#1D1D1D",
    500: "#252525",
    400: "#292929",
    300: "#2D2D2D",
    200: "#303030",
    100: "#343434"
  },
  foreground: {
    800: "#666666",
    700: "#858585",
    600: "#A3A3A3",
    500: "#C2C2C2",
    400: "#D1D1D1",
    300: "#E0E0E0",
    200: "#F0F0F0",
    100: "#FFFFFF"
  },
  primary: {
    800: "#D6FB41",
    700: "#DCFF50",
    600: "#E3FF73",
    500: "#EAFF96",
    400: "#F1FFB9",
    300: "#F5FFCB",
    200: "#F8FFDC",
    100: "#FCFFEE"
  }
}

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        space: ["var(--font-space)"],
        inter: ["var(--font-inter)"]
      }
    },
    colors: {
      ...codesandbox,
      background: codesandbox.neutral[800],
      text: codesandbox.foreground[200],
      link: codesandbox.primary[600]
    },
    container: {
      center: true,
      padding: "2rem"
    }
  },
  plugins: []
}
