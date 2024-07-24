/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        odtheme: {
          "primary": "#cfa834",
          "primary-content": "#100a01",
          "secondary": "#882244",
          "secondary-content": "#ead2d6",
          "accent": "#eeeeee",
          "accent-content": "#101011",
          "neutral": "#ffffff",
          "neutral-content": "#161616",
          "base-100": "#1d1d1d",
          "base-200": "#181818",
          "base-300": "#131313",
          "base-content": "#cccccc",
          "info": "#00acf7",
          "info-content": "#000b15",
          "success": "#5b8a00",
          "success-content": "#030700",
          "warning": "#b94900",
          "warning-content": "#f5dbd0",
          "error": "#dc2626",
          "error-content": "#ffd9d4",
        }
      }
    ]
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}

