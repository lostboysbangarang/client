export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Red+Hat+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main.css',
    '~assets/scss/vars.scss',
    '~assets/scss/mixins.scss',
  ],
  styleResources: {
    scss: [
      '~assets/scss/*.scss',
    ]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src:"~/plugins/validate.js", ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  extractCSS: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',
    ['nuxt-validate', {
      lang: 'en',
      nuxti18n: {
        locale: {
          'en-us': 'en_US'
        }
      }
      // ...
      // regular vee-validate options
      // https://github.com/logaretm/vee-validate/blob/master/docs/configuration.md
    }],
    ['nuxt-mail', {
      message: {
        to: 'Hayden@LugoWebDevelopment.com',
      },
      smtp: {
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: 'username',
          pass: 'password'
        },
      },
    }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: '/',
		credentials: true,
  },
  server: {
		host: '0.0.0.0',
    port: '6969'
	},
  serverMiddleware: {
		'/api': '~/api/index.js',
	},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true,
    transpile: [
      '@nuxt.config.js'
    ]
  },
  // Router Config???
  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }
      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1))}, 100)
          })
      }
      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({top: el.offsetTop, behavior: 'smooth'})
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }
      return {x: 0, y: 0}
    }
  }
}
