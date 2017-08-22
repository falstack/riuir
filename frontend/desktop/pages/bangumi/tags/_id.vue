<style lang="scss">
  #bangumi-tags {
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

          }
        }
      }
    }

    .tags {
      margin-bottom: 25px;

      .tag, .btn {
        display: inline-block;
        padding: 0 5px;
        height: 24px;
        line-height: 22px;
        font-size: 12px;
        border-radius: 4px;
        box-sizing: border-box;
      }

      .tag {
        margin-right: 10px;
        margin-bottom: 10px;
        background-color: rgba(32,160,255,.1);
        padding: 0 5px;
        height: 24px;
        line-height: 22px;
        font-size: 12px;
        border-radius: 4px;
        box-sizing: border-box;
        border: 1px solid rgba(32,160,255,.2);
        white-space: nowrap;
        color: #20a0ff;
        cursor: pointer;

        &.selected {
          background-color: #20a0ff;
          color: #fff;
        }
      }

      .btn {
        background-color: #e4e8f1;
        border-color: #e4e8f1;
        color: #48576a;

        &:hover {
          color: #fff;
          background-color: #8391a5;
        }
      }
    }
  }
</style>

<template>
  <div id="bangumi-tags" class="main">
    <v-banner></v-banner>
    <div class="container clearfix">
      <section class="col-main">
        <div class="tags">
          <h2 class="subtitle">标签列表</h2>
          <ul>
            <li class="tag"
                v-for="tag in tags"
                :class="{ 'selected': tag.selected }"
                @click="tag.selected = !tag.selected">
              <strong v-text="tag.name"></strong>
            </li>
            <li>
              <button class="btn" @click="getList">点击查找</button>
            </li>
          </ul>
        </div>
        <div class="bangumis" v-if="bangumis.length">
          <h2 class="subtitle">番剧列表</h2>
          <ul>
            <li class="bangumi" v-for="item in bangumis">
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
                    <!--<span v-text="item.count_like"></span>-->
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </section>
      <aside class="col-aside"></aside>
    </div>
  </div>
</template>

<script>
  import axios from '~plugins/axios'
  import vBanner from '~components/Banner.vue'

  export default {
    name: 'bangumi-tags',
    head: {
      title: '番剧列表'
    },
    components: {
      vBanner
    },
    validate ({ params }) {
      const id = params.id
      if (id === undefined || /^\d+$/.test(id)) {
        return true
      }
      if (id.indexOf('-') !== -1) {
        return id.split('-').every(item => /^\d+$/.test(item))
      }
      return false
    },
    watch: {
      '$route' () {
        this.bangumis = []
      }
    },
    asyncData ({ params }) {
      return axios.get(`bangumi/tags`, {
        params: {
          id: params.id
        }
      }).then((res) => {
        const tags = res.data.tags
        const ids = params.id ? params.id.split('-') : undefined
        for (let i = 0; i < tags.length; ++i) {
          tags[i].selected = ids ? ids.indexOf(`${tags[i].id}`) !== -1 : false
        }
        return {
          tags: tags,
          bangumis: res.data.bangumis
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    data () {
      return {
        tags: [],
        bangumis: []
      }
    },
    methods: {
      getList () {
        const selected = []
        for (const tag of this.tags) {
          if (tag.selected) {
            selected.push(tag.id)
          }
        }
        if (selected.length) {
          this.$router.push({
            name: 'bangumi-tags-id',
            params: {
              id: selected.join('-')
            }
          })
        }
      }
    }
  }
</script>
