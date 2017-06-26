<style lang="scss">
  @import '~normalize.css';
  @import '~static/stylesheet/global.scss';
</style>

<template>
  <div id="main" class="font-hei">
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
