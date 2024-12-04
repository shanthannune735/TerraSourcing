import flowbite from 'flowbite/plugin';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this path based on your project's structure
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // Add this line
  ],
  theme: {
    extend: {
      fontFamily: {
          'sf-black': ['SF Pro Display Black', 'sans-serif'],
          'sf-bold': ['SF Pro Display Bold', 'sans-serif'],
          'sf-heavy': ['SF Pro Display Heavy', 'sans-serif'],
          'sf-light': ['SF Pro Display Light', 'sans-serif'],
          'sf-medium': ['SF Pro Display Medium', 'sans-serif'],
          'sf-regular': ['SF Pro Display Regular', 'sans-serif'],
          'sf-semibold': ['SF Pro Display Semibold', 'sans-serif'],
          'sf-thin': ['SF Pro Display Thin', 'sans-serif'],
          'sf-ultralight': ['SF Pro Display Ultralight', 'sans-serif'],
      },
      colors: {
        primary: "#0073E6",
        secondary: "#F0F6FF",
        dark: "#222222",
        grey: "#9D9D9D"
      }
    },
  },
  plugins: [
    flowbite
  ],
}
