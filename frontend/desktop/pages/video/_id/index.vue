<style lang="scss" scoped="">

</style>

<template>
  <div id="main">
    <v-banner></v-banner>
    <div class="container">
      <h2 class="subtitle">《{{ bangumi.name }}》 第{{ info.part }}话 ：{{ info.name }}</h2>
      <v-video :sourceissrc="true" :source="info.url" :poster="info.poster"></v-video>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import vBanner from '~components/Banner.vue'
  import vFooter from '~components/Footer.vue'
  import vVideo from '~components/video/video.vue'

  export default {
    name: 'video-index',
    components: {
      vBanner, vFooter, vVideo
    },
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    },
    asyncData ({ params }) {
      return axios.get(`http://riuir.dev/video/${params.id}/info`)
        .then((res) => {
          return {
            bangumi: res.data.bangumi,
            info: res.data.info
          }
        })
    },
    props: {

    },
    watch: {

    },
    computed: {

    },
    data () {
      return {
        id: this.$route.params.id,
        info: null,
        bangumi: null
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
