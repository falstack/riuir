<style>
  html
  {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    height: 100%;
  }

  #__nuxt {
    height: 100%;
  }

  #main {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  *, *:before, *:after
  {
    box-sizing: border-box;
    margin: 0;
  }
</style>

<template>
  <div id="main">
    <v-header></v-header>
    <nuxt/>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vHeader from '~components/Header.vue'
  import vFooter from '~components/Footer.vue'

  export default {
    components: {
      vHeader, vFooter
    }
  }
</script>
