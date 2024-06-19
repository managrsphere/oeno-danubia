/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        tangerine: ['Tangerine', 'cursive']
      }
    }
  },
  daisyui: {
    themes: [
      {
        odtheme: {
          "primary": "#0A0000",
          "primary-content": "#c8c2c1",
          "secondary": "#882244",
          "secondary-content": "#ead2d6",
          "accent": "#cfa834",
          "accent-content": "#100a01",
          "neutral": "#f1f2f3",
          "neutral-content": "#141414",
          "base-100": "#f1f2f3",
          "base-200": "#d2d2d3",
          "base-300": "#b3b4b4",
          "base-content": "#141414",
          "info": "#2cb9bf",
          "info-content": "#010d0d",
          "success": "#70bf2c",
          "success-content": "#040d01",
          "warning": "#fbbf24",
          "warning-content": "#150d00",
          "error": "#bf312c",
          "error-content": "#f7d8d3",
        }
      }
    ]
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}

