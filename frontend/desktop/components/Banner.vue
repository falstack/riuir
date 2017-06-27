<style lang="scss" scoped="">
  #banner {
    width: 100%;
    height: 180px;
    background-color: #00a1d6;
  }
</style>

<template>
  <div id="banner">
    <v-header></v-header>
  </div>
</template>

<script>
  import vHeader from '~components/Header.vue'

  export default {
    name: 'v-banner',
    components: {
      vHeader
    },
    props: {

    },
    watch: {

    },
    computed: {

    },
    data () {
      return {

      }
    },
    created () {

    },
    methods: {

    },
    mounted () {

    }
  }
</script>
