<style lang="scss" scoped="">
  .bangumi {
    border-bottom: 1px solid darkgray;
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
      cursor: pointer;
      background-color: #eaeaea;
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
        line-height: 1.5;
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
          <router-link :to="`/bangumi/${item.id}`" tag="div" class="face" :data-src="item.avatar"></router-link>
          <div class="content">
            <div class="head">
              <router-link :to="`/bangumi/${item.id}`" class="name" v-text="item.name"></router-link>
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
    <v-footer></v-footer>
  </div>
</template>

<script>
  import axios from '~plugins/axios'
  import vBanner from '~components/Banner.vue'
  import vFooter from '~components/Footer.vue'

  export default {
    name: 'bangumi-news',
    components: {
      vBanner, vFooter
    },
    asyncData () {
      return axios.get('/bangumi/news')
        .then((res) => {
          return { list: res.data }
        }).catch((err) => {
          console.log(err)
        })
    },
    props: {

    },
    watch: {

    },
    computed: {

    },
    data () {
      return {
        list: []
      }
    },
    created () {

    },
    methods: {

    },
    mounted () {
      window.imageLoader.heartbeat()
    }
  }
</script>
