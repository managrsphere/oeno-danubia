/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        odtheme: {
          "primary": "#0A0000",
          "secondary": "#882244",
          "accent": "#cfa834",
          "neutral": "#f1f2f3",
          "base-100": "#f5f5f4",
          "info": "#64caa0",
          "success": "#70bf2c",
          "warning": "#fbbf24",
          "error": "#bf312c",
        }
      }
    ]
  },
  plugins: [
    require('daisyui'),
  ],
}

