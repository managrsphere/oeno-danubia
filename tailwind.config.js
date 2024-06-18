/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        odtheme: {
          "primary": "#0A0000",
          "secondary": "#882244",
          "accent": "#cfa834",
          "neutral": "#f5f5f4",
          "base-100": "#f1f2f3",
          "info": "#64caa0",
          "success": "#70bf2c",
          "warning": "#fbbf24",
          "error": "#bf312c",
        }
      }
    ]
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}

