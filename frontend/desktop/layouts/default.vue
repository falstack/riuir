<style lang="scss">
  #layout-default {
    height: 100%;
    display: flex;
    flex-direction: column;

    >.main {
      flex-grow: 1;
    }
  }
</style>

<template>
  <div id="layout-default">
    <v-header></v-header>
    <nuxt/>
    <v-music></v-music>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vHeader from '~components/Header.vue'
  import vMusic from '~components/Music.vue'
  import vFooter from '~components/Footer.vue'

  export default {
    components: {
      vHeader, vMusic, vFooter
    }
  }
</script>
