<style lang="scss" scoped="">
  #music {
    position: fixed;
    left: 0;
    bottom: 40px;
    width: 90px;
    height: 40px;
    background-color: darkgray;
  }
</style>

<template>
  <div id="music">{{ state }}</div>
</template>

<script>
  export default {
    name: 'v-music',
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
        state: 0
      }
    },
    created () {
      setInterval(() => {
        this.state++
      }, 1000)
    },
    methods: {

    },
    mounted () {

    }
  }
</script>
