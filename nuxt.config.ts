import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/main.css',
    '/node_modules/slick-carousel/slick/slick.css',
    '/node_modules/slick-carousel/slick/slick-theme.css'
  ],
  modules: [
    'vue3-carousel-nuxt'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      
    },
  },
  app: {
    head: {
      title: 'Shape', // Default title for all pages
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'My default description' }
      ],
      link: [
        { rel: 'icon', type: 'image/ico', href: 'shape-icon.ico' } ,// Path to your favicon
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap' 
        },
      ]
    }
  },
  
  runtimeConfig: {
    public: { 
      mode: process.env.MODE,
      apiBaseURL: process.env.API_BASE_URL,
  }},
})
