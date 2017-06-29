<style lang="scss" scoped="">

</style>

<template>
  <div id="main">
    <v-header></v-header>
    <v-banner></v-banner>
    <div class="container">
      <h2 class="subtitle">《{{ bangumi.name }}》 第{{ info.part }}话 ：{{ info.name }}</h2>
      <video
        id="my-player"
        class="video-js"
        controls
        preload="auto"
        :poster="info.poster"
        data-setup='{}'>
        <source :src="info.url"/>
      </video>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import vHeader from '~components/Header.vue'
  import vBanner from '~components/Banner.vue'
  import vFooter from '~components/Footer.vue'

  import videojs from 'video.js'

  export default {
    name: 'video-index',
    components: {
      vHeader, vBanner, vFooter
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
      videojs('my-player', {}, function onPlayerReady () {
        videojs.log('Your player is ready!')
        // In this context, `this` is the player that was created by Video.js.
        this.play()
        // How about an event listener?
        this.on('ended', function () {
          videojs.log('Awww...over so soon?!')
        })
      })
    }
  }
</script>
