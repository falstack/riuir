<style lang="scss">
  $meta-height: 30px;
  $meta-margin-bottom: 8px;

  .metas {
    margin-bottom: 20px;
    padding-right: 55px;
    overflow: hidden;
    position: relative;

    .meta, .more {
      margin: 0 8px $meta-margin-bottom 0;
      border: 1px solid #e5e9ef;
      height: $meta-height;
      border-radius: 4px;
      display: block;
      transition: .2s;
      padding: 0 15px 0 8px;
      font-size: 14px;
      color: #6d757a;
      line-height: 28px;
      float: left;

      span {
        min-width: 16px;
        margin-right: 5px;
        display: inline-block;
        text-align: right;
      }

      &:hover {
        border-color: #00a1d6;
        background-color: #00a1d6;
        color: #fff;
      }
    }

    .nuxt-link-active {
      border-color: #00a1d6;
      background-color: #00a1d6;
      color: #fff;
    }

    .more {
      cursor: pointer;
      position: absolute;
      right: 0;
      top: 0;
      width: 50px;
      padding-right: 8px;
      text-align: center;
    }
  }

  .social {
    margin-top: 20px;

    .share {
      float: right;
    }
  }
</style>

<template>
  <div id="main">
    <v-banner></v-banner>
    <div class="container">
      <h2 class="subtitle" v-if="bangumi && info">《{{ bangumi.name }}》 第{{ info.part }}话 ：{{ info.name }}</h2>
      <div class="metas clearfix" v-if="maxWidth">
        <nuxt-link class="meta" v-for="meta in sortVideos" :style="{ width: maxWidth }" :to="`/video/${meta.id}`" :key="meta">
          <span>{{ meta.part }}</span>{{ meta.name }}
        </nuxt-link>
        <div class="more" v-if="hasMore" @click="resizeMeta">{{ noMore ? '展开' : '收起' }}</div>
      </div>
      <v-video :sourceissrc="true" :source="info.url" :poster="info.poster" v-if="info" @playing="handlePlaying"></v-video>
      <div class="social">
        <div class="share" data-disabled="google,twitter,facebook,linkedin,diandian" ref="share"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '~plugins/axios'
  import vBanner from '~components/Banner.vue'
  import vVideo from '~components/video/video.vue'
  import orderBy from 'lodash/orderBy'

  const metaBoxHeight = 76

  export default {
    name: 'video-index',
    head () {
      return {
        title: `${this.bangumi.name}：第${this.info.part}话 ${this.info.name}`,
        meta: [
          { hid: 'description', name: 'description', content: this.bangumi.summary },
          { hid: 'keywords', name: 'keywords', content: `${this.bangumi.name}，第${this.info.part}话，${this.info.name}` }
        ]
      }
    },
    components: {
      vBanner, vVideo
    },
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    },
    asyncData ({ params }) {
      return axios.get(`/video/${params.id}/info`)
        .then((res) => {
          return {
            bangumi: res.data.bangumi,
            videos: res.data.videos,
            info: res.data.info
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    computed: {
      sortVideos () {
        return orderBy(this.videos, parseInt('part', 10), 'asc')
      }
    },
    data () {
      return {
        id: this.$route.params.id,
        info: null,
        videos: [],
        bangumi: null,
        hasMore: false,
        noMore: false,
        maxWidth: 0,
        firstPlay: true
      }
    },
    methods: {
      computedMeta () {
        let maxlength = 0
        for (const meta of this.videos) {
          const templength = meta.name.replace(/([\u4e00-\u9fa5])/g, 'aa').trim().length
          if (maxlength < templength) {
            maxlength = templength
          }
        }
        this.maxWidth = 46 + maxlength * 8 + 'px'
        this.$nextTick(() => {
          if (document.querySelector('.metas').offsetHeight > metaBoxHeight) {
            this.hasMore = true
          }
        })
      },
      resizeMeta () {
        document.querySelector('.metas').style.height = this.noMore ? 'auto' : `${metaBoxHeight}px`
        this.noMore = !this.noMore
      },
      handlePlaying () {
        if (this.firstPlay) {
          this.firstPlay = false
          axios.post(`/video/${this.id}/playing`)
        }
      }
    },
    mounted () {
      this.computedMeta()
      new socialShare(this.$refs.share) // eslint-disable-line
    },
    updated () {
      this.computedMeta()
    }
  }
</script>
