<style lang="scss">
  .social-share {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;

    .social-share-icon {
      position: relative;
      display: inline-block;
      width: 32px;
      height: 32px;
      font-size: 20px;
      border-radius: 50%;
      line-height: 32px;
      border: 1px solid #666;
      color: #666;
      text-align: center;
      vertical-align: middle;
      transition: background 0.6s ease-out 0s;
      font-family: "iconfont" !important;
      margin: 4px;

      &:hover {
        background-color: #666;
        color: #fff
      }
    }

    .icon-tencent {
      color: #56b6e7;
      border-color: #56b6e7;

      &:hover {
        background-color: #56b6e7
      }

      &:before {
        content: "\e600";
      }
    }

    .icon-qq {
      color: #56b6e7;
      border-color: #56b6e7;

      &:hover {
        background-color: #56b6e7
      }

      &:before {
        content: "\e68b"
      }
    }

    .icon-weibo {
      color: #ff763b;
      border-color: #ff763b;

      &:hover {
        background-color: #ff763b;
      }

      &:before {
        content: "\e60e"
      }
    }

    .icon-douban {
      color: #33b045;
      border-color: #33b045;

      &:hover {
        background-color: #33b045;
      }

      &:before {
        content: "\e601"
      }
    }

    .icon-qzone {
      color: #FDBE3D;
      border-color: #FDBE3D;

      &:hover {
        background-color: #FDBE3D;
      }

      &:before {
        content: "\e6f8"
      }
    }

    .icon-wechat {
      color: #7bc549;
      border-color: #7bc549;

      &:hover {
        background-color: #7bc549;

        .wechat-qrcode {
          display: block;
        }
      }

      &:before {
        content: "\e673"
      }

      .wechat-qrcode {
        display: none;
        border: 1px solid #eee;
        position: absolute;
        z-index: 9;
        top: -205px;
        left: -84px;
        width: 200px;
        height: 192px;
        color: #666;
        font-size: 12px;
        text-align: center;
        background-color: #fff;
        box-shadow: 0 2px 10px #aaa;
        transition: all 200ms;

        .button {
          top: 40px;
          left: -84px;

          &:after {
            display: none
          }
        }

        h4 {
          font-weight: normal;
          height: 26px;
          line-height: 26px;
          font-size: 12px;
          background-color: #f3f3f3;
          margin: 0;
          padding: 0;
          color: #777
        }

        .qrcode {
          width: 105px;
          margin: 10px auto;

          table {
            margin: 0 !important
          }
        }

        .help p {
          font-weight: normal;
          line-height: 16px;
          padding: 0;
          margin: 0
        }

        &:after {
          content: '';
          position: absolute;
          left: 50%;
          margin-left: -6px;
          bottom: -13px;
          width: 0;
          height: 0;
          border-width: 8px 6px 6px 6px;
          border-style: solid;
          border-color: #fff transparent transparent transparent
        }
      }
    }
  }
</style>

<template>
  <div id="share" data-new=""></div>
</template>

<script>
  export default {
    name: 'v-share',
    mounted () {
      setTimeout(() => {
        // eslint-disable-next-line
        new socialShare(this.$el, {
          url: window.location.href.split('?')[0],
          title: document.title,
          source: 'riuir 天下漫友是一家',
          description: document.getElementsByTagName('meta')['description'].content,
          disabled: ['google', 'twitter', 'facebook', 'linkedin', 'diandian']
        })
        this.$el.removeAttribute('data-new')
      }, 200)
    }
  }
</script>
