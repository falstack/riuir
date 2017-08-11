<style lang="scss">
  .search-box {

    .search-ctx {
      border: 0;
      height: 100%;

      &:focus {
        outline-width: 0;
      }
    }
  }
</style>

<template>
  <div class="search-box flexbox">
    <input class="search-ctx" :placeholder="placeholder" type="search">
    <button class="search-btn">搜</button>
  </div>
</template>

<script>
  export default {
    name: 'v-search',
    components: {

    },
    props: {
      placeholder: {
        default: '搜索二次元的一切'
      }
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
