/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
  ], // Tailwind  这里是展示要应用Tailwind的文件，如果发现样式不生效，请检查此文件
  theme: {
    extend: {},
  },
  plugins: [],
}

