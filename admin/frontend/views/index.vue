<style lang="scss">
  @import "~assets/css/global.scss";
</style>

<template>
  <div>
    <v-header></v-header>
    <v-side-bar></v-side-bar>
    <h1>this is index page</h1>
  </div>
</template>

<script>
  import vSideBar from 'component/layouts/Sidebar'
  import vHeader from 'component/layouts/Header'

  export default {
    name: 'v-index',
    components: {
      vHeader, vSideBar
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
    methods: {

    },
    mounted () {

    }
  }
</script>
