<style lang="scss" scoped="">
  .history {
    $time-size: 30px;
    .subtitle {
      margin-left: $time-size / 2;
    }

    .collections {
      position: relative;

      &:before {
        content: '';
        position: absolute;
        left: 14.5px;
        top: 0;
        bottom: 0;
        width: 1px;
        background-color: #bfcbd9;
      }

      .collection {
        padding-left: $time-size;

        .time {
          height: $time-size;
          line-height: $time-size;
          padding-left: $time-size * 1.5;
          margin-left: -$time-size;
          position: relative;
          font-weight: 400;
          color: #97a8be;
          font-size: 16px;

          &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: $time-size;
            height: $time-size;
            border-radius: 50%;
            border: 1px solid $color-blue;
            background-color: #fff;
          }
        }
      }
    }

    .bangumi {

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

                a {
                  color: #99a2aa;
                  font-weight: bold;
                }

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
  }
</style>

<template>
  <div id="main">
    <v-banner></v-banner>
    <div class="container">
      <section class="col-9">
        <div class="history">
          <h2 class="subtitle">番剧时间轴</h2>
          <ul class="collections">
            <ul v-for="(col, index) in list" class="clearfix collection">
              <h3 class="time" v-text="formatTime(timeline[index])"></h3>
              <li class="bangumi" v-for="item in col">
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
                          <nuxt-link :to="`/bangumi/tags/${tag.pivot.tag_id}`" v-text="tag.name"></nuxt-link>
                        </li>
                      </ul>
                      <!--<span v-text="item.count_like"></span>-->
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </ul>
        </div>
      </section>
      <aside class="col-3"></aside>
    </div>
  </div>
</template>

<script>
  import axios from '~plugins/axios'
  import vBanner from '~components/Banner.vue'
  import { groupBy, orderBy } from '~plugins/util/lodash'

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
          const timeline = []
          for (const one of res.data) {
            const time = one.season
            if (timeline.indexOf(time) === -1) {
              timeline.push(time)
            }
          }
          return {
            timeline: timeline.sort((a, b) => {
              return b - a
            }),
            list: orderBy(groupBy(res.data, 'season'), (time) => {
              return time[0].season
            }).reverse()
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    data () {
      return {
        timeline: [],
        list: []
      }
    },
    methods: {
      formatTime (time) {
        return `${time.toString().replace('.', ' 年 ')} 月`
      }
    }
  }
</script>
