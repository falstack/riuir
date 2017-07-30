<style lang="scss" scoped="">
  #banner {
    width: 100%;
    height: 170px;
    margin-bottom: 40px;
  }
</style>

<template>
  <div id="banner" class="bg" :style="{ 'backgroundImage': `url(${$resize('http://cdn.riuir.com/banner/1.jpg', { width: 1920 })})` }"></div>
</template>

<script>
  export default {
    name: 'v-banner',
    data () {
      return {

      }
    },
    created () {

    },
    methods: {

    }
  }
</script>
