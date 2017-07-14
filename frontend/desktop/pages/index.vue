<style lang="scss" scoped>
  #banner-wrap {
    width: 100%;
    height: 100%;
  }

  .banner {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: RGB(238, 238, 238);
    z-index: -1;
    opacity: 0;
    transition: opacity 1s ease-in-out;

    &.show {
      opacity: 1;
    }
  }
</style>

<template>
  <div id="banner-wrap">
    <div class="banner bg" :class="{'show' : toggle}" :style="{ backgroundImage: banner1 ? `url(${banner1.url})` : '' }"></div>
    <div class="banner bg" :class="{'show' : !toggle}" :style="{ backgroundImage: banner2 ? `url(${banner2.url})` : '' }"></div>
  </div>
</template>

<script>
  import axios from '~plugins/axios'

  export default {
    name: 'index',
    head: {
      title: '首页 - 天下漫友是一家'
    },
    asyncData () {
      return axios.get('/cartoon/banner')
        .then((res) => {
          return { banner1: res.data }
        }).catch((err) => {
          console.log(err)
        })
    },
    data () {
      return {
        banner1: null,
        banner2: null,
        timer: null,
        toggle: true
      }
    },
    created () {
      this.loopBanner()
    },
    methods: {
      loopBanner () {
        this.timer = setInterval(() => {
          axios.get('/cartoon/banner').then((res) => {
            if (this.toggle) {
              this.banner2 = res.data
            } else {
              this.banner1 = res.data
            }
            setTimeout(() => {
              this.toggle = !this.toggle
            }, 10000)
          }).catch((res) => {
            console.log(res)
          })
        }, 20000)
      }
    },
    beforeDestroy () {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    }
  }
</script>
