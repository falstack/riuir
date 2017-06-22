<style lang="scss">
  @import '~normalize.css';

  html
  {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  body {
    height: 100%;

    *, *:before, *:after
    {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
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
