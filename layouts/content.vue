<template>
  <div>
    <nuxt-link to="/"><button class="btn btn-circle btn-close"> &times; </button></nuxt-link>
    <nuxt />
    <footer-menu />
  </div>
</template>

<style>
  html,body{
    height: 100vh
  }
</style>

<script>
import FooterMenu from '~/components/footer/'
export default {
  components:{
    FooterMenu
  }
}
</script>
