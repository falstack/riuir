<style lang="scss" scoped>
  #banner-wrap {
    width: 100%;
    height: 100%;
  }

  #banner {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: RGB(238, 238, 238);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: background-image 1s ease-in-out;
    z-index: -1;
  }
</style>

<template>
  <div id="banner-wrap">
    <v-header></v-header>
    <div id="banner" :style="{ backgroundImage: 'url(' + banner.url + ')' }"></div>
  </div>
</template>

<script>
import vHeader from '~components/Header.vue'
import axios from 'axios'

export default {
  name: 'bangumi-news',
  layout: 'index',
  asyncData () {
    return axios.get('http://api.riuir.com/cartoon/banner')
      .then((res) => {
        return { banner: res.data }
      })
  },
  components: {
    vHeader
  },
  data () {
    return {
      banner: null
    }
  },
  created () {
    this.loopBanner()
  },
  methods: {
    loopBanner () {
      setInterval(() => {
        axios.get('http://api.riuir.com/cartoon/banner').then((res) => {
          this.banner = res.data;
        }).catch(() => {

        })
      }, 20000)
    }
  }
}
</script>
