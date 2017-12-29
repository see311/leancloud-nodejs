var resolve = require('path').resolve
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  build: {
    vendor: ['vue-notifications', 'vue-awesome-swiper'],
  },
  plugins: [
    { src: '~/plugins/vue-awesome-swiper.js', ssr: false },
    { src: '~/plugins/vue-notifications.js', ssr: false },
  ],
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.css',
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' }
}
