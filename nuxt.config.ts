// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag', "nuxt-aos"],
  gtag: {
    id: 'G-JFTY8LMMGL'
  }
})