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
    <nuxt/>
    <v-music></v-music>
  </div>
</template>

<script>
  import vMusic from '~components/Music.vue'

  export default {
    components: {
      vMusic
    }
  }
</script>
