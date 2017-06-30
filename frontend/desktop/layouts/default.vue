<style lang="scss">
  #layout-default {
    height: 100%;

    >#main {
      display: flex;
      flex-direction: column;

      >.container {
        flex: 1;
      }
    }
  }
</style>

<template>
  <div id="layout-default">
    <v-header></v-header>
    <nuxt/>
    <v-music></v-music>
  </div>
</template>

<script>
  import vHeader from '~components/Header.vue'
  import vMusic from '~components/Music.vue'

  export default {
    components: {
      vHeader, vMusic
    }
  }
</script>
