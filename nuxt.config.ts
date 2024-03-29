import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  // @ts-ignore
  title: 'Morgan Design',
  htmlAttrs: {
    lang: 'en-Us',
  },
  meta: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'copyright', name: 'copyright', content: 'Debugger.tech' },
      { hid: 'language', name: 'language', content: process.env.APP_LOCALE },
      { hid: 'robots', name: 'robots', content: 'index,follow' },
      { hid: 'googlebot', name: 'googlebot', content: 'index,follow' },
      { hid: 'Classification', name: 'Classification', content: 'Textile Company Website' },
      { hid: 'designer', name: 'designer', content: 'Debugger.tech' },
      { hid: 'reply-to', name: 'reply-to', content: 'info@debugger.tech' },
      { hid: 'category', name: 'category', content: 'Template' },
      { hid: 'format-detection', name: 'format-detection', content: 'telephone=no' },
      { hid: 'itemprop-name', itemprop: 'name', content: process.env.APP_NAME },
      { hid: 'itemprop-description', itemprop: 'description', content: process.env.APP_DESCRIPTION },
      { hid: 'og:title', property: 'og:title', name: 'og:title', content: process.env.APP_NAME },
      { hid: 'og:description', property: 'og:description', name: 'og:description', content: process.env.APP_DESCRIPTION },
      { hid: 'og:site_name', property: 'og:site_name', name: 'og:site_name', content: process.env.APP_NAME },
      { hid: 'og:url', property: 'og:url', name: 'og:url', content: process.env.APP_URL },
      { hid: 'og:type', property: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Personal Portfolio' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'A Nuxt PWA starter template with Encrypted Cookies, Express.js, Axios, Vue Router, Passport.js.' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'Portfolio' },
      { name: 'description', content: 'Portfolio' },
      { name: 'theme-color', content: '#004d40' },
    ],
    link: [
      { rel: 'icon', sizes: '512x512', type: 'image/x-icon', href: '/icon.png' },
      { rel: 'icon', sizes: '512x512', type: 'image/x-icon', href: '/logo.png' },
      { rel: 'icon', sizes: '192x192', href: '/favicon-192x192.ico' },
      { rel: 'icon', sizes: '256x256', href: '/favicon.ico' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'apple-touch-icon', href: '/logo.png' },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: '/resources/assets/css/main.css' },
    ],
    style: [

    ],
  },
  buildModules: [
    '@vueuse/core/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  unocss: {
    shortcuts: [
      ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ],
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
  vite: {
    logLevel: 'info',
  },
})
