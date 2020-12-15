
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Legalhelp - Ishonchli, Sifatli, Onlayn Yuridik xizmatlar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: './assets/scss/main.scss', lang: 'scss' },
    { src: "aos/dist/aos.css"}
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/rate.js', ssr: false },
    { src: '~/plugins/swiper.js', mode: 'client' },
    { src: '~/plugins/backtotop.js', ssr: false },
    { src: '~/plugins/vue-moment.js', ssr: false },
    { src: "~/plugins/toast.js", ssr: false },
    { src: "~/plugins/aos.js", ssr: false },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    [
      "@nuxtjs/axios",
      { baseURL: "https://legalhelp.uz/api/" },
    ],
    '@nuxtjs/auth',
    'bootstrap-vue/nuxt',
    [
      "nuxt-i18n",
      {
        // useCookie: true,
        // cookieKey: 'i18n_redirected',
        lazy: true,
        locales: [
          { code: "uz", iso: "uz-Latn-UZ", name: "O'zbekcha", file: "uz.js" },
          { code: "ru", iso: "ru-RU", name: "Ruskiy", file: "ru.js" }
        ],
        defaultLocale: "uz",
        rootRedirect: "uz",
        strategy: "prefix",
        langDir: "lang/",
        parsePages: false,
        detectBrowserLanguage: {
          useCookie: true,
          fallbackLocale: "uz"
        }
      }
    ],
    [
      'nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
  ],


  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'customer/login/', method: 'post', propertyName: 'access' },
          user: { url: 'customer/profile/?language=uz', method: 'get', propertyName: false },
          logout: false      
        }
        
      }
    },
  },



  build: {
    vendor: ["aos"]
  }
}
