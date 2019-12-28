<template>
  <div>
    <header-menu />
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
import HeaderMenu from '~/components/header/'
import FooterMenu from '~/components/footer/'
export default {
  components:{
    HeaderMenu,
    FooterMenu
  }
}
</script>
