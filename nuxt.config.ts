// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss", 
    "@nuxtjs/google-fonts"
  ],
  googleFonts: {
    families: {
      Tangerine: [400, 700]
    },
    display: 'swap'
  },
})