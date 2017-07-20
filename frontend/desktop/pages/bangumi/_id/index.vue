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
      width: 200px;
      height: 60px;
      margin: 0 15px 15px 0;
      background-color: #f4f5f7;
      cursor: pointer;
      padding-right: 12px;
      border-radius: 3px;
      overflow: hidden;

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

  #tags {
    .tag {
      background-color: rgba(32,160,255,.1);
      color: #20a0ff;
      margin-right: 10px;
      margin-bottom: 10px;
      display: inline-block;
      padding: 0 5px;
      height: 24px;
      line-height: 22px;
      font-size: 12px;
      border-radius: 4px;
      box-sizing: border-box;
      border: 1px solid rgba(32,160,255,.2);
      white-space: nowrap;
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
      <div class="col-9">
        <div id="videos" class="clearfix">
          <h2 class="subtitle">视频列表</h2>
          <div class="video" v-for="video in sortVideos">
            <nuxt-link :to="`/video/${video.id}`">
              <v-img class="poster bg"
                     :alt="video.name"
                     :src="$resize(video.poster, { width: 192, height: 120 })">
              </v-img>
            </nuxt-link>
            <nuxt-link class="part oneline" :to="`/video/${video.id}`">第{{ video.part }}话</nuxt-link>
            <span class="name twoline" v-text="video.name"></span>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div id="tags">
          <h2 class="subtitle">标签</h2>
          <span class="tag" v-for="tag in tags" v-text="tag"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '~plugins/axios'

  export default {
    name: 'bangumi-home',
    head () {
      return {
        title: `${this.info.name} - 番剧`,
        meta: [
          { hid: 'description', name: 'description', content: this.info.summary },
          { hid: 'keywords', name: 'keywords', content: `${this.info.alias},${this.tags}` }
        ]
      }
    },
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    },
    asyncData ({ params }) {
      return axios.get(`/bangumi/${params.id}/info`)
        .then((res) => {
          return {
            videos: res.data.videos,
            tags: res.data.tags,
            info: res.data.info
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    computed: {
      sortVideos () {
        return this.$orderBy(this.videos, 'part')
      }
    },
    data () {
      return {
        id: this.$route.params.id,
        info: null,
        tags: [],
        videos: []
      }
    },
    mounted () {
      new socialShare(this.$refs.share) // eslint-disable-line
    }
  }
</script>
