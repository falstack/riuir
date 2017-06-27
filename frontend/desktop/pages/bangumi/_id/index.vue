<style lang="scss" scoped="">

</style>

<template>
  <p>this is bangumi home page</p>
</template>

<script>
  export default {
    name: 'bangumi-home',
    validate ({ params }) {
      return /^\d+$/.test(params.id)
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
        id: this.$route.params.id
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
