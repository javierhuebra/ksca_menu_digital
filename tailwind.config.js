/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'marker' : ['Kaushan Script', 'cursive'],
      },
      colors: {
        primary: '#f9a429', // Naranja cálido (para destacar)
        secondary: '#A16207', // Marrón dorado (tono principal)
        accent: '#320705', // Marrón chocolate oscuro (tono profundo)
      },
      
    },
  },
  plugins: [],
}

