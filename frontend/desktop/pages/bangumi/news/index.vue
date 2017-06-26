<style lang="scss" scoped="">

</style>

<template>
  <div class="list container">
    <div class="bangumi"
         v-for="item in bangumis">
      <p v-text="item.summary"></p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'bangumi-news',
    asyncData () {
      return axios.get('http://riuir.dev/bangumi/news')
        .then((res) => {
          return { bangumis: res.data }
        })
    },
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
        bangumis: null
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
