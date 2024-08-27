// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-gtag',
    "nuxt-aos",
    '@nuxtjs/seo'
  ],
  site: {
    url: 'www.oenodanubia.de',
    name: 'Oeno-Danubia Passau',
    description: 'Katholische, farbentragende und nichtschlagende Studentenverbindung an der Universität Passau',
    defaultLocale: 'de'
  },
  gtag: {
    id: 'G-JFTY8LMMGL'
  }
})