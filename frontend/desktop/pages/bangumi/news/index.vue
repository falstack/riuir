<style lang="scss">
  #bangumi-news {
    .timeline {
      h2 {
        margin-left: 15px;
        margin-right: 30px;
        margin-bottom: 0;
      }

      .card-wrap {
        height: 294px;
        margin-left: 45px;
        overflow-y: scroll;
        margin-bottom: 26px;

        .nothing {
          line-height: 100px;
        }
      }

      .bangumi {
        width: 180px;
        margin: 0 26px 26px 0;

        figure {
          position: relative;

          >a {
            margin-right: 12px;
            width: 72px;
            height: 72px;
            display: block;
            float: left;
            position: relative;
            z-index: 1;
            
            img {
              width: 100%;
              height: 100%;
            }
          }

          figcaption {
            padding: 5px 0 5px 84px;
            z-index: 0;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            span {
              color: #aaa;
              line-height: 18px;

              .part {
                border-radius: 9px;
                color: #fff;
                text-align: center;
                padding: 0 4px;
                height: 18px;
                min-width: 36px;
                max-width: 50px;
                margin-left: 5px;
                display: inline-block;
                vertical-align: top;

                &.new {
                  background-color: #ff8eb3;
                }

                &.old {
                  background-color: #b8c0cc;
                }
              }
            }
          }
        }
      }
    }

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
  }
</style>

<template>
  <div id="main">
    <v-banner></v-banner>
    <div id="bangumi-news" class="container">
      <div class="col-9">
        <section class="timeline">
          <tab-card :tabs="showtime"
                    :card="released"
                    :show-index="thisWeek">
            <h2 class="subtitle" slot="tabs-left">新番放送表</h2>
            <template slot="card-item" scope="props">
              <ul v-if="props.data.length">
                <li class="bangumi" :key="item.id" v-for="item in props.data">
                  <figure class="clearfix">
                    <nuxt-link
                      :to="`/bangumi/${item.id}`">
                      <v-img
                        class="face"
                        :title="item.name"
                        :alt="item.name"
                        :src="$resize(item.avatar, { width: 180 })">
                      </v-img>
                    </nuxt-link>
                    <figcaption class="abs">
                      <nuxt-link :to="`/bangumi/${item.id}`" class="href-fade-blue twoline" v-text="item.name"></nuxt-link>
                      <span>
                        更新至
                        <nuxt-link v-if="item.released_video_id"
                                   :class="[computePartStyle(item.published_at) ? 'new' : 'old']"
                                   :to="`/video/${item.released_video_id}`"
                                   class="part oneline">
                          {{ `${item.released_part}话` }}
                        </nuxt-link>
                        <strong class="part oneline"
                                :class="[computePartStyle(item.published_at) ? 'new' : 'old']"
                                v-else>
                          {{ `${item.released_part}话` }}
                        </strong>
                      </span>
                    </figcaption>
                  </figure>
                </li>
              </ul>
              <div class="nothing" v-else>
                还什么都没有
              </div>
            </template>
          </tab-card>
        </section>
        <section class="history">
          <h2 class="subtitle">时间轴</h2>
          <ul class="collections">
            <ul v-for="(col, index) in list" class="collection">
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
        </section>
      </div>
      <aside class="col-3"></aside>
    </div>
  </div>
</template>

<script>
  import axios from '~plugins/axios'
  import vBanner from '~components/Banner.vue'
  import tabCard from '~components/TabCard.vue'
  import { groupBy, orderBy } from '~plugins/util/lodash'

  const nowTime = new Date().getTime()

  export default {
    name: 'bangumi-news',
    head: {
      title: '番剧列表'
    },
    components: {
      vBanner, tabCard
    },
    asyncData () {
      return axios.get('/bangumi/news')
        .then((res) => {
          const timeline = []
          const released = {}
          const releaseNews = []
          for (const bangumi of res.data) {
            const time = bangumi.season
            if (timeline.indexOf(time) === -1) {
              timeline.push(time)
            }
            if (bangumi.released_at) {
              if (released[bangumi.released_at] === undefined) {
                released[bangumi.released_at] = []
              }
              released[bangumi.released_at].push(bangumi)
              releaseNews.push(bangumi)
            }
          }
          released[0] = releaseNews.sort((a, b) => {
            return b - a
          })
          return {
            released: released,
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
        showtime: ['最新', '一', '二', '三', '四', '五', '六', '日'],
        released: null,
        thisWeek: new Date().getDay() ? new Date().getDay() : 7,
        timeline: [],
        list: []
      }
    },
    methods: {
      formatTime (time) {
        return `${time.toString().replace('.', ' 年 ')} 月`
      },
      computePartStyle (timestamp) {
        return nowTime / 1000 - timestamp < 604800
      }
    }
  }
</script>
