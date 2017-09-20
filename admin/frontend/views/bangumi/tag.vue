<style lang="scss" scoped="">

</style>

<template>
  <section>
    <header>
      <el-button type="primary" size="large" @click="createDialogFormVisible = true">创建标签</el-button>
    </header>
    <el-table
      :data="filter"
      class="main-view"
      v-loading="loading"
      highlight-current-row>
      <el-table-column
        prop="id"
        sortable
        width="100"
        label="索引">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称">
      </el-table-column>
      <el-table-column
        prop="model"
        label="类型">
      </el-table-column>
      <el-table-column
        width="200"
        label="操作">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEditOpen(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="editDialogFormVisible">
      <h3 slot="title">{{ `标签编辑：《${dialogTitle}》`  }}</h3>
      <el-form :model="editForm">
        <el-form-item label="名称" :label-width="'60px'">
          <el-input v-model="editForm.name" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleEditDone">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="createDialogFormVisible">
      <h3 slot="title">创建标签</h3>
      <el-form :model="createForm">
        <el-form-item label="类型" :label-width="'60px'">
          <el-select v-model="createForm.model" placeholder="请选择">
            <el-option
              v-for="model in models"
              :key="model.id"
              :value="model.name">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="名称" :label-width="'60px'">
          <el-input v-model="createForm.name" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="createDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleCreateDone">确 定</el-button>
      </div>
    </el-dialog>
    <footer>
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        :current-page="pagination.curPage"
        :page-sizes="[20, 50, 100]"
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
    name: 'v-page-bangumi-tag',
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
          pageSize: 20,
          curPage: 1
        },
        models: [
          {
            id: 0,
            name: '番剧'
          }
        ],
        editDialogFormVisible: false,
        createDialogFormVisible: false,
        dialogTitle: '',
        editForm: {
          name: ''
        },
        createForm: {
          name: '',
          model: ''
        },
        loading: true
      }
    },
    created () {
      this.getTags()
    },
    methods: {
      getTags() {
        this.$http.get('/bangumi/tags').then((data) => {
          this.list = data
          this.pagination.totalPage =  Math.ceil(this.list.length / this.pagination.pageSize)
          this.loading = false
        })
      },
      handleSizeChange(val) {
        this.pagination.pageSize = val
      },
      handleCurrentChange(val) {
        this.pagination.curPage = val
      },
      modelFormat(key) {
        for (const model of this.models) {
          if (model.name === key) {
            return model.id
          }
          if (model.id === key) {
            return model.name
          }
        }
      },
      handleEditOpen(index, row) {
        this.dialogTitle = row.name;
        this.editForm = {
          index: index,
          id: row.id,
          name: row.name
        };
        this.editDialogFormVisible = true;
      },
      handleEditDone() {
        this.$http.post('/tag/edit', {
          id: this.editForm.id,
          name: this.editForm.name
        }).then(() => {
          this.list[this.editForm.index].name = this.editForm.name;
          this.editDialogFormVisible = false;
          this.$message.success('操作成功');
        }, (err) => {
          this.$message.error('操作失败');
          console.log(err);
        });
      },
      handleCreateDone() {
        for (const tag of this.list) {
          if (tag.name === this.createForm.name) {
            this.$message({
              message: '标签已存在',
              type: 'warning'
            });
            return;
          }
        }
        this.$http.post('/tag/create', {
          name: this.createForm.name,
          model: this.modelFormat(this.createForm.model)
        }).then((data) => {
          this.list.push({
            id: data,
            name: this.createForm.name,
            model: this.modelFormat(this.createForm.model)
          });
          this.createDialogFormVisible = false;
          this.$message.success('操作成功');
          this.createForm = {
            name: '',
            model: ''
          }
        }, (err) => {
          this.$message.error('操作失败');
          console.log(err);
        });
      }
    }
  }
</script>
