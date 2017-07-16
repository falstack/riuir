<style lang="scss" scoped="">
  $banner-height: 400px;

  #banner {
    position: relative;
    width: 100%;
    overflow: hidden;
    box-shadow: inset 0 0 15px 0 rgba(0,0,0,.5);
    z-index: 1;
    height: $banner-height;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .img {
      width: 110%;
      height: $banner-height;
      margin: -$banner-height / 2 -55%;
      position: absolute;
      top: 50%;
      left: 50%;
      filter: blur(5px);
      filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=5, MakeShadow=false);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -1;
    }

    .info {
      width: 60%;
      min-width: 600px;
      color: #fff;
      text-shadow: 0 1px 10px gray;

      h1 {
        text-align: center;
        font-size: 24px;
        font-weight: 700;
      }

      p {
        word-break: break-all;
        word-wrap: break-word;
        text-indent: 2em;
        font-size: 13px;
        line-height: 20px;
        margin: 40px 0 20px 0;
      }

      .share {
        text-align: center;
      }
    }
  }

  #videos {

    .video {
      float: left;
      width: 216px;
      height: 60px;
      margin: 0 20px 20px 0;
      background-color: #f4f5f7;
      cursor: pointer;
      padding-right: 12px;

      &:hover .part {
          color: #00a1d6;
      }

      .poster {
        width: 96px;
        height: 100%;
        cursor: pointer;
        float: left;
        margin-right: 12px;
      }

      .part {
        display: block;
        color: #000;
        font-size: 12px;
        line-height: 14px;
        margin-top: 6px;
        margin-bottom: 5px;
      }

      .name {
        font-size: 12px;
        line-height: 14px;
        color: #99a2aa;
      }
    }
  }
</style>

<template>
  <div id="main">
    <div id="banner">
      <div class="img bg" :style="{ backgroundImage: info ? `url(${info.banner})` : '' }"></div>
      <div class="info">
        <h1 v-text="info.name"></h1>
        <p v-text="info.summary"></p>
        <div class="share" data-disabled="google,twitter,facebook,linkedin,diandian" ref="share"></div>
      </div>
    </div>
    <div class="container">
      <div id="videos" class="clearfix">
        <h2 class="subtitle">视频列表</h2>
        <div class="video" v-for="video in videos">
          <router-link tag="img"
                       class="poster bg"
                       :to="`/video/${video.id}`"
                       :alt="video.name"
                       :data-src="$resize(video.poster, { width: 192, height: 120 })">
          </router-link>
          <router-link class="part oneline" :to="`/video/${video.id}`">第{{ video.part }}话</router-link>
          <span class="name twoline" v-text="video.name"></span>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import axios from '~plugins/axios'
  import vFooter from '~components/Footer.vue'

  export default {
    name: 'bangumi-home',
    head () {
      return {
        title: this.info.name,
        meta: [
          { hid: 'description', name: 'description', content: this.info.summary },
          { hid: 'keywords', name: 'keywords', content: this.info.name }
        ]
      }
    },
    components: {
      vFooter
    },
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    },
    asyncData ({ params }) {
      return axios.get(`/bangumi/${params.id}/info`)
        .then((res) => {
          return {
            videos: res.data.videos,
            info: res.data.info
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    data () {
      return {
        id: this.$route.params.id,
        info: null,
        videos: []
      }
    },
    mounted () {
      window.imageLoader.heartbeat()
      new socialShare(this.$refs.share) // eslint-disable-line
    }
  }
</script>
