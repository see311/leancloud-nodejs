<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" />
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      Homepage
    </nuxt-link>
  </section>
</template>
<script>
export default {
  props: ['error']
}
</script>

<style scoped>
.container{
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}
.title
{
  margin-top: 15px;
  font-size: 5em;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
.button, .button:visited
{
  display: inline-block;
  color: #3B8070;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #3B8070;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
  margin-top: 50px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #3B8070;
}
</style>
