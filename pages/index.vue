<template>
  <section class="container">
    <h1 class="title">
      Universal Vue.js Application Framework
    </h1>
    <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>
    <hr>
    <h2>vue-awesome-swiper</h2>
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
    <hr>
    <h2>vue-notification + mini-toastr</h2>
    <section>
      <div class="button">Success</div>
      <div class="button">Info</div>
      <div class="button">Warn</div>
      <div class="button">Error</div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        require("../assets/img/1.jpg"),
        require("../assets/img/2.jpg"),
        require("../assets/img/3.jpg")
      ],
      swiperOption: {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        on: {
          slideChange() {
            console.log("onSlideChangeEnd", this);
          },
          tap() {
            console.log("onTap", this);
          }
        }
      }
    };
  },
  // notifications: {
  //   showSuccessMsg: {
  //     type: VueNotifications.types.success,
  //     title: "Hello there",
  //     message: "That's the success!"
  //   },
  //   showInfoMsg: {
  //     type: VueNotifications.types.info,
  //     title: "Hey you",
  //     message: "Here is some info for you"
  //   },
  //   showWarnMsg: {
  //     type: VueNotifications.types.warn,
  //     title: "Wow, man",
  //     message: "That's the kind of warning"
  //   },
  //   showErrorMsg: {
  //     type: VueNotifications.types.error,
  //     title: "Wow-wow",
  //     message: "That's the error"
  //   }
  // },
  mounted() {
    // this.showSuccessMsg({ title: "Welcome!", message: "based on nuxt.js!" });
    console.log("app init", this);
    console.log("This is current swiper instance object", this.mySwiper);
  }
};
</script>


<style scoped>
.title {
  margin: 50px 0;
}
</style>
