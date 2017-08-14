<style lang="scss" scoped="">
  #banner {
    width: 100%;
    height: 170px;
    margin-bottom: 40px;
  }
</style>

<template>
  <div id="banner" class="bg" :style="{ 'backgroundImage': `url(${bg})` }"></div>
</template>

<script>
  export default {
    name: 'v-banner',
    data () {
      return {
        bg: this.$resize('https://cdn.riuir.com/banner/1.jpg', { width: 1920, crop: false })
      }
    },
    created () {
      this.$root.$emit('change-page-background', {
        theme: 'blur',
        img: this.bg,
        hgt: 170
      })
    }
  }
</script>
