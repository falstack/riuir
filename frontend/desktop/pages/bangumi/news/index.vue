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
        margin: 10px 0 20px 0;
        text-indent: 2em;
        color: #99a2aa;
        font-size: 13px;
        line-height: 18px;
      }

      .foot {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
      }
    }
  }
</style>

<template>
  <div id="main">
    <v-banner></v-banner>
    <div class="container">
      <div class="list col-8">
        <div class="bangumi" v-for="item in list">
          <nuxt-link
            :to="`/bangumi/${item.id}`">
            <v-img
              class="face"
              :alt="item.name"
              :src="$resize(item.avatar, { width: 180 })">
            </v-img>
          </nuxt-link>
          <div class="content">
            <div class="head">
              <nuxt-link :to="`/bangumi/${item.id}`" class="name" v-text="item.name"></nuxt-link>
              <!--<span v-text="item.count_score"></span>-->
            </div>
            <div class="body twoline" v-text="item.summary"></div>
            <div class="foot">
              <!--<span v-text="item.count_like"></span>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '~plugins/axios'
  import vBanner from '~components/Banner.vue'

  export default {
    name: 'bangumi-news',
    head: {
      title: '新番 index'
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
