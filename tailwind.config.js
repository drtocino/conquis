module.exports = {
  content: [
    './pages/**/*.{html,js}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#d8c7af',
          200: "#cbb595",
          300: "#b29060",
          400: "#9e7c4c",
          500: "#846840",
          600: "#695333",
          700: "#4f3e26",
          800: "#342919",
          900: "#1a140c",
        }
      }
    },
  },
  plugins: [],
  darkMode: "class",
  safelist: [
    'bg-brown-800',
    'bg-brown-700',
    'bg-brown-600',
    'bg-brown-300',
    'text-brown-900',
    'bg-purple-800',
    'bg-purple-700',
    'bg-purple-600',
    'bg-purple-300',
    'text-purple-900',
    'bg-green-800',
    'bg-green-700',
    'bg-green-600',
    'bg-green-400',
    'bg-green-300',
    'text-green-900',
    'bg-cyan-800',
    'bg-cyan-700',
    'bg-cyan-600',
    'bg-cyan-400',
    'text-cyan-900',
    'bg-blue-700',
    'bg-blue-600',
    'bg-blue-800',
    'bg-blue-400',
    'text-blue-900',
    'bg-red-700',
    'bg-red-600',
    'bg-red-800',
    'bg-red-400',
    'text-red-900',
  ]
}