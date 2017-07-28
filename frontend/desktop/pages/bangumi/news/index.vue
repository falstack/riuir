<style lang="scss" scoped="">
  .bangumi {
    border-bottom: 1px solid #dae9f4;

    &:last-child {
      border-bottom-width: 0;
    }

    figure {
      padding: 20px 10px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;

      .face {
        width: 90px;
        height: 90px;
        flex-shrink: 0;
        margin-right: 15px;
        display: block;
      }

      .content {
        flex: auto;

        .head {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          .name {
            font-size: 18px;

            &:hover {
              text-decoration: underline;
            }
          }

          .score {

          }
        }

        .body {
          margin: 8.5px 0;
          text-indent: 2em;
          color: #222;
          font-size: 13px;
          line-height: 18px;
        }

        .foot {
          .icon-item-tag {

            li {
              position: relative;
              margin-right: 10px;

              &:after {
                content: '·';
                position: absolute;
                width: 10px;
                right:-10px;
                bottom: 0;
                top: 0;
                text-align: center;
              }

              &:last-child {
                margin-right: 0;

                &:after {
                  content: '';
                }
              }
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div id="main">
    <v-banner></v-banner>
    <div class="container">
      <section class="col-9">
        <ul class="list">
          <li class="bangumi" v-for="item in list">
            <figure>
              <nuxt-link
                :to="`/bangumi/${item.id}`">
                <v-img
                  class="face"
                  :title="item.name"
                  :alt="item.name"
                  :src="$resize(item.avatar, { width: 180 })">
                </v-img>
              </nuxt-link>
              <figcaption class="content">
                <p class="head">
                  <nuxt-link :to="`/bangumi/${item.id}`" class="name" v-text="item.name"></nuxt-link>
                  <!--<span v-text="item.count_score"></span>-->
                </p>
                <p class="body twoline" v-text="item.summary"></p>
                <div class="foot">
                  <ul class="icon-item icon-item-tag oneline" v-if="item.tags.length">
                    <li v-for="tag in item.tags">
                      <strong v-text="tag.name"></strong>
                    </li>
                  </ul>
                  <!--<span v-text="item.count_like"></span>-->
                </div>
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>
      <aside class="col-3"></aside>
    </div>
  </div>
</template>

<script>
  import axios from '~plugins/axios'
  import vBanner from '~components/Banner.vue'

  export default {
    name: 'bangumi-news',
    head: {
      title: '番剧列表'
    },
    components: {
      vBanner
    },
    asyncData () {
      return axios.get('/bangumi/news')
        .then((res) => {
          return { list: res.data }
        }).catch((err) => {
          console.log(err)
        })
    },
    data () {
      return {
        list: []
      }
    }
  }
</script>
