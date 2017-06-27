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
      background-color: gray;
      flex-shrink: 0;
      margin-right: 15px;
      cursor: pointer;
    }

    .content {
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
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
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
  <div class="container">
    <div class="list col-8">
      <div class="bangumi" v-for="item in list">
        <router-link :to="'/bangumi/' + item.id" tag="div" class="face"></router-link>
        <div class="content">
          <div class="head">
            <router-link :to="'/bangumi/' + item.id" class="name" v-text="item.name"></router-link>
            <span v-text="item.count_score"></span>
          </div>
          <div class="body">{{ html2text(item.summary) }}</div>
          <div class="foot">
            <span v-text="item.count_like"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'bangumi-news',
    asyncData () {
      return axios.get('http://riuir.dev/bangumi/news')
        .then((res) => {
          return { list: res.data }
        })
    },
    components: {

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
      html2text (html) {
        return html.replace(/<p>/g, '').replace(/<\/p>/g, '\n')
      }
    },
    mounted () {

    }
  }
</script>
