<style lang="scss" scoped="">
  .loop {
    width: 300px;
    height: 200px;
  }
</style>

<template>
  <section>
    <header></header>
    <div class="main-view">
      <div class="loop bg" v-for="item in filter" :style="{ backgroundImage: `url(${item.url})` }"></div>
    </div>
    <footer>
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        :current-page="pagination.curPage"
        :page-sizes="[10, 20, 50]"
        :page-size="pagination.pageSize"
        :pageCount="pagination.totalPage"
        :total="list.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </footer>
  </section>
</template>

<script>
  export default {
    name: 'v-page-image-loop',
    components: {

    },
    props: {

    },
    watch: {

    },
    computed: {
      filter () {
        const begin = (this.pagination.curPage - 1) * this.pagination.pageSize;
        return this.list.slice(begin, begin + this.pagination.pageSize)
      }
    },
    data () {
      return {
        list: [],
        pagination: {
          totalPage: 0,
          pageSize: 24,
          curPage: 1
        }
      }
    },
    created () {
      this.getLoops()
    },
    methods: {
      getLoops() {
        this.$http.get('/image/loop/list').then((data) => {
          this.list = data
        })
      },
      handleSizeChange(val) {
        this.pagination.pageSize = val
      },
      handleCurrentChange(val) {
        this.pagination.curPage = val
      },
    },
    mounted () {

    }
  }
</script>
