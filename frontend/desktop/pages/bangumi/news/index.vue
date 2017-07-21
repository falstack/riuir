<style lang="scss" scoped="">
  .bangumi {
    border-bottom: 1px solid #dae9f4;
    padding: 20px 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    &:last-child {
      border-bottom-width: 0;
    }

    .face {
      width: 90px;
      height: 90px;
      flex-shrink: 0;
      margin-right: 15px;
      background-color: #eaeaea;
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
        color: #99a2aa;
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
</style>

<template>
  <div id="main">
    <v-banner></v-banner>
    <div class="container">
      <ul class="list col-8">
        <li class="bangumi" v-for="item in list">
          <nuxt-link
            :to="`/bangumi/${item.id}`">
            <v-img
              class="face"
              :alt="item.name"
              :src="$resize(item.avatar, { width: 180 })">
            </v-img>
          </nuxt-link>
          <section class="content">
            <div class="head">
              <nuxt-link :to="`/bangumi/${item.id}`" class="name" v-text="item.name"></nuxt-link>
              <!--<span v-text="item.count_score"></span>-->
            </div>
            <div class="body twoline" v-text="item.summary"></div>
            <div class="foot">
              <ul class="icon-item icon-item-tag oneline" v-if="item.tags.length">
                <li v-for="tag in item.tags" v-text="tag.name"></li>
              </ul>
              <!--<span v-text="item.count_like"></span>-->
            </div>
          </section>
        </li>
      </ul>
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
