import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'
console.log('------------',process.browser)
if (process.browser) {
  Vue.use(VueAwesomeSwiper)
}