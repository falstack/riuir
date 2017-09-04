<style lang="scss">
  $header-height: 46px;

  #header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: $header-height;
    z-index: 10;

    .text {
      width: 100%;
      height: 100%;

      .container {
        height: 100%;
        line-height: $header-height;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;

        .header-left {
          height: 100%;
          font-weight: bold;
        }

        .header-right {
          .search-box {
            height: 32px;
            border-radius: 16px;
            background-color: rgba(0, 0, 0, 0.2);

            &:hover {
              background-color: rgba(0, 0, 0, 0.4);
            }

            $transition: .2s;
            .search-ctx {
              width: 135px;
              background-color: transparent;
              transition: $transition;
              font-size: 12px;
              padding: 4px 10px 4px 15px;
              line-height: 24px;
              border-radius: 16px 0 0 16px;
              color: $color-white;
              @include input-placeholder();
              border: 1px solid transparent;
              border-right: 0;

              &:focus {
                width: 235px;
                background-color: $color-white;
                color: #222;
                @include input-placeholder(#222);

                &+.search-btn {
                  background-color: $color-white;
                  color: $color-text-deep;

                  &:hover {
                    color: $color-blue-normal;
                  }
                }

                &~.search-history {
                  transition-delay: $transition;
                }
              }
            }

            @media (max-width: 768px) {
              .search-ctx {
                width: 85px;

                &:focus {
                  width: 155px;
                }
              }
            }

            .search-btn {
              width: 32px;
              height: 32px;
              border-radius: 0 16px 16px 0;
              background-color: transparent;
              transition: $transition;
              color: $color-white;
              font-family: 'iconfont' !important;
              font-size: 18px;
              border: 1px solid transparent;
              border-left: 0;
              line-height: 30px;

              &:before {
                content: '\e660';
              }
            }
          }

          button {
            border-radius: 2px;
            width: 52px;
            height: 34px;
            line-height: 32px;
            color: $color-white;
            text-align: center;
            font-size: 14px;
          }

          .sign-in {
            border: 1px solid rgba(255,255,255,.8);
            margin-left: 30px;

            &:hover {
              background: $color-white;
              text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.1);
              color: #000;
              border: 1px solid #ccc;
            }
          }

          .sign-up {
            margin-left: 7px;
            border: 0;
            background-color: rgba($color-blue-normal, .8);

            &:hover {
              background-color: $color-blue-normal;
            }
          }
        }
      }
    }

    .wrap {
      z-index: -1;
    }

    &.mask {
      background-color: transparent;

      &.scroll-show,
      &.scroll-hide {
        .header-left {
          a {
            padding: 5px 20px;
            border-radius: 10px;
            margin: 0 5px;
            font-size: 15px;
            transition: .4s background-color, .4s color;

            &:hover {
              background-color: $color-white;
              color: $color-blue-normal;
              transition-duration: 0s;
            }
          }
        }
      }

      &.scroll-show {
        background-color: $color-white;
        box-shadow: rgba(0,0,0,0.1) 0 1px 2px;

        .header-left {
          a {
            color: $color-link;
          }
        }

        .header-right {

          .search-ctx:focus {
            border: 1px solid #D9D9D9;
            border-right: 0;

            &+.search-btn {
              border: 1px solid #D9D9D9;
              border-left: 0;
            }
          }

          .sign-in {
            color: $color-link;
            border: 1px solid #D9D9D9;
            background: linear-gradient(#FAFAFA, #F2F2F2);
            text-shadow: 0 1px 0 rgba(255,255,255,.5);

            &:hover {
              background: linear-gradient(#FFF, #F7F7F7);
              box-shadow: inset 0 1px 0 white, 0 1px 0 rgba(255,255,255,.05);
              border: 1px solid #CCC;
            }
          }

          .sign-up {
            background: linear-gradient($color-blue-light, $color-blue-normal);
            border: 1px solid $color-blue-deep;
            text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.1);
            box-shadow: inset 0 1px 0 rgba(255,255,255,.08), 0 1px 0 rgba(255,255,255,.3);

            &:hover {
              background: linear-gradient(#00bfef, #00a7de);
              box-shadow: inset 0 1px 0 rgba(255,255,255,.08), 0 1px 0 rgba(255,255,255,.1);
            }
          }
        }
      }

      &.scroll-hide {
        .header-left {
          a {
            color: $color-white;
          }
        }

        .shim {
          width: 100%;
          height: 100px;
          position: absolute;
          left: 0;
          top: 0;
          z-index: -1;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAABkCAYAAABOx/oaAAAAAXNSR0IArs4c6QAAAX5JREFUSA2llAtuwzAMQ5NtN9r9r9bUZP0I2VW7ATWQ2KZISv4k53Ecv+NZ2tcym5MOvDrwBLyKjZkCzvEQOH8mIGICkosBy0E8xTIwXpfkam+ZJiCvzAPQHrzIztxyEnkyI+0yW8/s0pJdngKybvlS0sLsQK99l3s/ZYPcPYkUoKUkAPd17ZJa3mbfwTA9QKq+y+5lVqbHbHINHDuoOnOXxIRt5m0A3BCNW7nByKYinlIp2MqdUCU5KupsuQwA6r12SiJhmABhLsBAfZoVbJkCn1b0IegruR+cKulPc2d+mF2JvEvOaLPHa8nOxmSX6neU6805mU2di69uMixy3WAKWBJVYPFEakKVC/CVBKROy/fvyDYwPeElJqXQP13vlyUtXxyW3k9N4qdJTaS52mvmI14s/pQnGUwBbEp+gM46zXOakSrwPR7JIhUoT7WF2YEXUuTq7QU7Nkr01CorQYE1s8c2HgF6sdtA/gxhaEBDTm98mcCsvQn/Y1XZ+/EdtDiR1Lr0wCcAAAAASUVORK5CYII=);
        }
      }
    }

    &.blur {
      background-color: $color-white;

      .header-left {
        li {
          margin: 0 5px;
        }

        a {
          color: $color-white;
          padding: 0 20px;
          font-size: 15px;
          height: 100%;
          display: block;

          &:hover {
            background-color: rgba(255, 255, 255, 0.24);
          }
        }
      }

      &.black {
        box-shadow: rgba(0,0,0,0.1) 0 1px 2px;
        .text {
          background-color: rgba(0, 0, 0, 0.2);
        }
      }

      &.white {
        box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px;
        .text {
          background-color: rgba(255, 255, 255, 0.2);
        }
      }

      .wrap {
        overflow: hidden;

        .shim {
          position: absolute;
          left: -12.5%;
          top: 0;
          width: 125%;
          background-repeat: no-repeat;
          background-position: center;
          background-size: 80%;
          z-index: -1;
          @include filter-blur();
        }
      }
    }

    .another {
      display: none;
    }
  }
</style>

<template>
  <header id="header" :class="[theme, imageGrayLevel > 165 ? 'white' : 'black', scrollFlag ? 'scroll-show' : 'scroll-hide']">
    <div class="text">
      <div class="container">
        <nav class="header-left">
          <ul class="flexbox">
            <li>
              <nuxt-link to="/">主站</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/bangumi/news">番剧</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/bangumi/tags">分类</nuxt-link>
            </li>
          </ul>
        </nav>
        <nav class="header-right flexbox flex-row">
          <v-search :placeholder="'搜索'" :history="true"></v-search>
          <button class="sign-in" @click="signIn">登录</button>
          <button class="sign-up" @click="signUp">注册</button>
        </nav>
      </div>
    </div>
    <div class="wrap abs">
      <div class="shim" :style="computedBg"></div>
    </div>
    <img class="another"
         v-if="img"
         crossOrigin="anonymous"
         ref="another"
         :src="img"
         :flag="imageGrayLevel"
         alt="another">
    <v-sign></v-sign>
  </header>
</template>

<script>
  import vSearch from '~/components/Search.vue'
  import vSign from '~/components/Sign.vue'

  export default {
    name: 'v-header',
    components: {
      vSearch, vSign
    },
    data () {
      return {
        height: 0,
        theme: 'mask',
        img: '',
        another: '',
        imageGrayLevel: 0,
        scrollFlag: false
      }
    },
    computed: {
      computedBg () {
        return this.img ? {
          backgroundImage: `url(${this.img})`,
          height: `${this.height}px`
        } : {}
      }
    },
    methods: {
      signIn () {
        this.$channel.$emit('sign-in')
      },
      signUp () {
        this.$channel.$emit('sign-up')
      }
    },
    beforeMount () {
      this.$channel.$on('change-page-background', ({ img, hgt, theme }) => {
        this.img = img
        this.theme = theme
        this.height = hgt

        if (img) {
          setTimeout(() => {
            this.imageGrayLevel = this.$imageGrayLevel(this.$refs.another)
          }, 0)
        }
      })
    },
    mounted () {
      document.addEventListener('scroll', () => {
        this.scrollFlag = document.body.scrollTop > 200
      })
    }
  }
</script>
