<style lang="scss" scoped>
  #header {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;
    z-index: 10;

    .container {
      height: 100%;
    }
  }
</style>

<template>
  <header id="header">
    <div class="container">
      <router-link to="/">首页</router-link>
      <router-link to="/bangumi/news">番剧</router-link>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'v-header',
    components: {

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
