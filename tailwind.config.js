/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),      // Mejora estilos de inputs, selects, etc.
    require('daisyui'),                 // Librería de componentes preestilizados
    require('tailwindcss-animate'),     // Animaciones CSS listas para usar
  ],
}
