<style lang="scss">
  #index {
    width: 100%;
    height: 100%;
    z-index: 0;

    .banner {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: $color-black;
      z-index: -1;
      opacity: 0;
      transition: opacity 1s ease-in-out;

      &.show {
        opacity: 1;
      }
    }

    .another {
      display: none;
    }

    .index-panel {

      .slogan {
        background-image: url(data:image/png;base64,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);
        width: 435px;
        height: 65px;
        margin-bottom: 25px;

        &.invert {
          filter: invert(1);
        }
      }

      $search-size: 40px;
      .search-box {
        height: $search-size;
        margin-bottom: 100px;

        &:hover {
          .search-ctx {
            border: 1px solid $color-white;
            background: rgba(0, 0, 0, 0.3);
          }
        }

        .search-ctx {
          width: 550px;
          height: 100%;
          padding: 0 50px 0 10px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          background: rgba(0, 0, 0, 0.15);
          color: #fff;
          line-height: $search-size;
          font-size: 14px;
          @include input-placeholder();
        }

        .search-btn {
          position: absolute;
          right: 0;
          top: 0;
          width: $search-size;
          height: $search-size;
          background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyBzdHlsZT0id2lkdGg6MzA4cHg7aGVpZ2h0OjMwOHB4OyIgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5b2iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEwMjRweCIgaGVpZ2h0PSIxMDI0cHgiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMjQgMTAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMCIgZmlsbD0iI2ZmZmZmZiIgZD0iTTk2MS4yMTk1ODQgOTE2LjMxNjE2IDY4OC44NTA5NDQgNjQzLjk0NjQ5NmM1My40NzAyMDgtNjIuMjE3MjE2IDg2LjAxMTkwNC0xNDIuODkxMDA4IDg2LjAxMTkwNC0yMzEuMTY5MDI0IDAtMTk1Ljk3MzEyLTE1OS40Mjc1ODQtMzU1LjQwMDcwNC0zNTUuNDAwNzA0LTM1NS40MDA3MDQtMTk1Ljk3MzEyIDAtMzU1LjQwMDcwNCAxNTkuNDI3NTg0LTM1NS40MDA3MDQgMzU1LjQwMDcwNCAwIDE5NS45NzMxMiAxNTkuNDI3NTg0IDM1NS40MDA3MDQgMzU1LjQwMDcwNCAzNTUuNDAwNzA0IDc3LjYwMTc5MiAwIDE0OS4yMjAzNTItMjUuMjc2NDE2IDIwNy43MzE3MTItNjcuNjM4MjcybDI3NC45MDA5OTIgMjc0LjkwMDk5Mkw5NjEuMjE5NTg0IDkxNi4zMTYxNnpNMTA1Ljg3MzQwOCA0MTIuNzc3NDcyYzAtMTcyLjkxNDY4OCAxNDAuNjg2MzM2LTMxMy41ODg3MzYgMzEzLjU4ODczNi0zMTMuNTg4NzM2IDE3Mi45MDI0IDAgMzEzLjU4ODczNiAxNDAuNjc0MDQ4IDMxMy41ODg3MzYgMzEzLjU4ODczNiAwIDE3Mi45MTI2NC0xNDAuNjg3MzYgMzEzLjU4ODczNi0zMTMuNTg4NzM2IDMxMy41ODg3MzZDMjQ2LjU1ODcyIDcyNi4zNjYyMDggMTA1Ljg3MzQwOCA1ODUuNjkwMTEyIDEwNS44NzM0MDggNDEyLjc3NzQ3MnoiIC8+Cgo8L3N2Zz4K);
          @include icon(24px);
        }
      }
    }
  }
</style>

<template>
  <div id="index">
    <div class="banner bg" :class="{'show' : toggle}" :style="{ backgroundImage: banner1 ? `url(${$resize(banner1.url, { width: 1920, mode: 0 })})` : '' }"></div>
    <div class="banner bg" :class="{'show' : !toggle}" :style="{ backgroundImage: banner2 ? `url(${$resize(banner2.url, { width: 1920, mode: 0 })})` : '' }"></div>
    <img class="another"
         crossOrigin="anonymous"
         :src="`${another}?imageMogr2/auto-orient/strip/gravity/Center/crop/435x140`"
         :flag="imageGrayLevel"
         ref="another"
         alt="another">
    <div class="index-panel abs flexbox flex-col">
      <div class="slogan bg" :class="{ 'invert' : imageGrayLevel > 165 }"></div>
      <v-search :placeholder="'搜索二次元的一切'" :auto="true" :suggess="true"></v-search>
    </div>
  </div>
</template>

<script>
  import axios from '~/apis/_base'
  import vSearch from '~/components/Search.vue'

  export default {
    name: 'index',
    head: {
      title: '首页'
    },
    components: {
      vSearch
    },
    asyncData () {
      return axios.get('cartoon/banner')
        .then((res) => {
          return {
            banner1: res.data,
            another: res.data.url
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    data () {
      return {
        banner1: null,
        banner2: null,
        timer: null,
        toggle: true,
        another: '',
        imageGrayLevel: 0
      }
    },
    beforeCreate () {
      this.$channel.$emit('change-page-background', {
        img: '',
        theme: 'mask'
      })
    },
    created () {
      this.loopBanner()
    },
    methods: {
      loopBanner () {
        this.timer = setInterval(() => {
          axios.get('cartoon/banner').then((res) => {
            this.another = res.data.url
            if (this.toggle) {
              this.banner2 = res.data
            } else {
              this.banner1 = res.data
            }
            setTimeout(() => {
              this.imageGrayLevel = this.$imageGrayLevel(this.$refs.another, 65)
              this.toggle = !this.toggle
            }, 7500)
          }).catch((res) => {
            console.log(res)
          })
        }, 15000)
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
