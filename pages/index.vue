<template>
  <section class="container">
    <h1 class="title">
      Universal Vue.js Application Framework
    </h1>
    <h2>vue-awesome-swiper ssr</h2>
    <div>
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in banners" :key="banner">
            <img :src="banner">
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
      </div>
    </div>
    <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>
  </section>
</template>

<script>
export default {
  data () {
      return {
        banners: [
          '~assets/img/1.jpg',
          '~assets/img/2.jpg',
          '~assets/img/3.jpg'
        ],
        swiperOption: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          wrapperClass: 'my-wrapper',
          slideClass: 'my-slide',
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          on: {
            slideChange() {
              console.log('onSlideChangeEnd', this);
            },
            tap() {
              console.log('onTap', this);
            }
          }
        }
      }
    },
    mounted() {
      console.log('app init', this)
      setTimeout(() => {
        this.banners.push('/5.jpg')
        console.log('banners update')
      }, 3000)
      console.log(
        'This is current swiper instance object', this.mySwiper, 
        'I will slideTo banners 3')
       this.mySwiper.slideTo(3)
    }
}
</script>


<style scoped>
.title {
  margin: 50px 0;
}
</style>
