<style lang="scss" scoped="">
  .loop {
    width: 280px;
    height: 173px;
    float: left;
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    transition-duration: .2s;
    cursor: pointer;
    overflow: hidden;
    position: relative;

    &:hover {
      box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1), 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    img {
      width: 100%;
      height: 100%;
    }

    .control {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 40px;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.2) 35%, rgba(0, 0, 0, 0.4) 65%, rgba(0, 0, 0, 0.6));
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-content: center;
      padding: 10px;
    }
  }
</style>

<template>
  <section>
    <header>
      <el-button type="primary" icon="plus" size="large" @click="showCreateModal = true">添加图片</el-button>
    </header>
    <div class="main-view">
      <div class="loop" v-for="(item, index) in filter">
        <img :src="$resize(item.url, { width: 280, height: 173 })" alt="loop">
        <div class="control">
          <el-switch on-text="" off-text="" v-model="item.use" @change="handleSwitch(item, index)"></el-switch>
        </div>
      </div>
    </div>
    <v-modal v-model="showCreateModal">
      <el-form :model="createForm">
        <el-col :span="11">
          <el-form-item label="番剧id" :label-width="'60px'">
            <el-input v-model="createForm.bangumiId" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="1">
          <el-form-item label="用户id" :label-width="'60px'">
            <el-input v-model="createForm.userId" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-form>
    </v-modal>
    <footer>
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        :current-page="pagination.curPage"
        :page-sizes="[12, 24, 48]"
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
          pageSize: 12,
          curPage: 1
        },
        showCreateModal: false,
        createForm: {
          url: '',
          userId: '',
          bangumiId: ''
        }
      }
    },
    created () {
      this.getLoops()
    },
    methods: {
      getLoops() {
        this.$http.get('/image/loop/list').then((data) => {
          this.pagination.totalPage = data.length
          this.list = data.map(item => {
            item.use = !item.deleted_at
            return item
          })
        })
      },
      handleSizeChange(val) {
        this.pagination.pageSize = val
      },
      handleCurrentChange(val) {
        this.pagination.curPage = val
      },
      handleSwitch(item, index) {
        this.$confirm('确认要执行该操作吗?', '提示').then(() => {
          this.$http.post('/image/loop/toggle', {
            id: item.id,
            isDelete: !item.deleted_at
          }).then(() => {
            this.$message.success('操作成功');
          }).catch(() => {
            this.$message.error('操作失败');
            this.list[index + (this.pagination.curPage - 1) * this.pagination.pageSize].use = !item.deleted_at
          })
        }).catch(() => {
          this.list[index + (this.pagination.curPage - 1) * this.pagination.pageSize].use = !item.deleted_at
        })
      }
    }
  }
</script>
