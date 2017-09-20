<style lang="scss" scoped="">

</style>

<template>
  <section>
    <header>
      <el-button type="primary" size="large" @click="createDialogFormVisible = true">新建视频</el-button>
    </header>
    <el-table
      :data="filter"
      class="main-view"
      v-loading="loading"
      highlight-current-row>
      <el-table-column type="expand">
        <template scope="props">
          <el-form label-position="left" inline>
            <div>
              <el-form-item label="视频 ID">
                <span v-text="props.row.id"></span>
              </el-form-item>
              <el-form-item label="番剧 ID">
                <span v-html="props.row.bangumi_id"></span>
              </el-form-item>
            </div>
            <div>
              <el-form-item label="海报">
                <span style="cursor: pointer;" v-text="props.row.poster" @click="preview(props.row.poster)"></span>
              </el-form-item>
            </div>
            <div>
              <el-form-item label="播放量">
                <span v-text="props.row.count_played"></span>
              </el-form-item>
              <el-form-item label="评论数">
                <span v-text="props.row.count_comment"></span>
              </el-form-item>
            </div>
            <div>
              <el-form-item label="创建时间">
                <span v-text="props.row.created_at"></span>
              </el-form-item>
              <el-form-item label="更新时间">
                <span v-text="props.row.updated_at"></span>
              </el-form-item>
              <el-form-item v-if="props.row.deleted_at" label="删除时间">
                <span v-text="props.row.deleted_at"></span>
              </el-form-item>
            </div>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        prop="id"
        sortable
        width="100"
        label="索引">
      </el-table-column>
      <el-table-column
        prop="bname"
        label="番名">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称">
      </el-table-column>
      <el-table-column
        prop="part"
        width="100"
        label="集数">
      </el-table-column>
      <el-table-column
        sortable
        width="110"
        prop="count_played"
        label="播放量">
      </el-table-column>
      <el-table-column
        sortable
        width="110"
        prop="count_comment"
        label="评论数">
      </el-table-column>
      <el-table-column
        width="200"
        label="操作">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEditOpen(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            :type="scope.row.deleted_at ? 'warning' : 'danger'"
            @click="handleDelete(scope.$index, scope.row)">{{ scope.row.deleted_at ? '恢复' : '删除' }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="editDialogFormVisible">
      <h3 slot="title">{{ `视频编辑：《${dialogTitle}》`  }}</h3>
      <el-form :model="editForm">
        <el-row>
          <el-col :span="8">
            <el-form-item label="番剧" :label-width="'85px'">
              <el-select v-model="editForm.bname" placeholder="请选择">
                <el-option
                  v-for="item in bangumis"
                  :key="item.id"
                  :value="item.name"
                  :disabled="item.deleted_at">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="集数" :label-width="'85px'">
              <el-input v-model="editForm.part" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="名称" :label-width="'85px'">
              <el-input v-model="editForm.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="海报" :label-width="'85px'">
          <el-input v-model="editForm.poster" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="editForm.url" label="外链资源" :label-width="'85px'">
          <el-input v-model="editForm.url" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="字幕" :label-width="'85px'">
          <el-input v-model="editForm.resource.lyric.zh" auto-complete="off"></el-input>
        </el-form-item>
        <template>
          <el-form-item label="720P 资源" :label-width="'85px'">
            <el-col :span="18">
              <el-input v-model="editForm.resource.video[720].src" auto-complete="off"></el-input>
            </el-col>
            <el-col :span="4" :offset="1">
              字幕：<el-switch style="float: right;margin-top: 7px" on-text="" off-text="" v-model="editForm.resource.video[720].useLyc"></el-switch>
            </el-col>
          </el-form-item>
        </template>
        <template>
          <el-form-item label="1080P 资源" :label-width="'85px'">
            <el-col :span="18">
              <el-input v-model="editForm.resource.video[1080].src" auto-complete="off"></el-input>
            </el-col>
            <el-col :span="4" :offset="1">
              字幕：<el-switch style="float: right;margin-top: 7px" on-text="" off-text="" v-model="editForm.resource.video[1080].useLyc"></el-switch>
            </el-col>
          </el-form-item>
        </template>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleEditDone">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="createDialogFormVisible">
      <h3 slot="title">新建视频</h3>
      <el-form :model="createForm">
        <el-row>
          <el-col :span="8">
            <el-form-item label="番剧" :label-width="'85px'">
              <el-select v-model="createForm.bname" placeholder="请选择">
                <el-option
                  v-for="item in bangumis"
                  :key="item.id"
                  :value="item.name"
                  :disabled="item.deleted_at">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="集数" :label-width="'85px'">
              <el-input v-model="createForm.part" placeholder="1-n" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="名称" :label-width="'85px'">
              <el-input v-model="createForm.resourceName" placeholder="${name}" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="画质" :label-width="'85px'">
          <div>
            <el-checkbox v-model="createForm.P720.show">720P</el-checkbox>
            <el-checkbox v-model="createForm.P1080.show">1080P</el-checkbox>
          </div>
        </el-form-item>
        <el-row v-if="createForm.P720.show">
          <el-form-item label="720P 资源" :label-width="'85px'">
            <el-col :span="18">
              <el-input v-model="createForm.P720.src" auto-complete="off"></el-input>
            </el-col>
            <el-col :span="4" :offset="1">
              字幕：<el-switch style="float: right;margin-top: 7px" on-text="" off-text="" v-model="createForm.P720.useLyc"></el-switch>
            </el-col>
          </el-form-item>
        </el-row>
        <el-row v-if="createForm.P1080.show">
          <el-form-item label="1080P 资源" :label-width="'85px'">
            <el-col :span="18">
              <el-input v-model="createForm.P1080.src" auto-complete="off"></el-input>
            </el-col>
            <el-col :span="4" :offset="1">
              字幕：<el-switch style="float: right;margin-top: 7px" on-text="" off-text="" v-model="createForm.P1080.useLyc"></el-switch>
            </el-col>
          </el-form-item>
        </el-row>
        <el-form-item v-if="!createForm.P720.show && !createForm.P1080.show" label="外链资源" :label-width="'85px'">
          <el-input v-model="createForm.url" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="字幕" :label-width="'85px'">
          <el-input v-model="createForm.lyric.zh" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="海报" :label-width="'85px'">
          <el-input v-model="createForm.poster" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="名称" :label-width="'85px'">
          <el-input v-model="createForm.name" type="textarea" placeholder="一行一个" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCreateCancel">取 消</el-button>
        <el-button type="primary" @click="handleCreateDone">确 定</el-button>
      </div>
    </el-dialog>
    <footer>
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        :current-page="pagination.curPage"
        :page-sizes="[24, 50, 100]"
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
  const defaultResource = {
    "video": {
      "720": {
        "useLyc": true,
        "src": ""
      },
      "1080": {
        "useLyc": false,
        "src": ""
      }
    },
    "lyric": {
      "zh": "",
      "en": ""
    }
  };
  export default {
    name: 'v-page-bangumi-video',
    computed: {
      filter () {
        const begin = (this.pagination.curPage - 1) * this.pagination.pageSize;
        return this.list.slice(begin, begin + this.pagination.pageSize)
      }
    },
    data () {
      return {
        loading: true,
        list: [],
        bangumis: [],
        pagination: {
          totalPage: 0,
          pageSize: 24,
          curPage: 1
        },
        editDialogFormVisible: false,
        createDialogFormVisible: false,
        dialogTitle: '',
        editForm: {
          bname: '',
          name: '',
          part: '',
          poster: '',
          url: '',
          resource: defaultResource
        },
        createForm: {
          P720: {
            show: false,
            src: 'bangumi/${name}/video/720/${n}.mp4',
            useLyc: true
          },
          P1080: {
            show: false,
            src: 'bangumi/${name}/video/1080/${n}.mp4',
            useLyc: true
          },
          lyric: {
            zh: 'bangumi/${name}/lyric/zh/${n}.ass'
          },
          resourceName: '',
          bname: '',
          name: '',
          part: '',
          url: 'bangumi/${name}/video/${n}.mp4',
          poster: 'bangumi/${name}/poster/${n}.jpg',
        },
        CDNPrefixp: 'https://cdn.riuir.com/'
      }
    },
    created () {
      this.getVideos()
    },
    methods: {
      getVideos() {
        this.$http.get('/bangumi/videos').then((data) => {
          this.list = data.videos
          this.bangumis = data.bangumis
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
      handleEditOpen(index, row) {
        this.dialogTitle = row.name;
        const def = {
          useLyc: false,
          src: ''
        };
        let resource = {};
        if (row.resource) {
          resource = row.resource;
          if (!resource.video[720]) {
            resource.video[720] = def;
          }
          if (!resource.video[1080]) {
            resource.video[1080] = def;
          }
          if (!row.resource.lyric) {
            resource.lyric = {
              "zh": "",
              "en": ""
            }
          }
        } else {
          resource = defaultResource;
        }
        this.editForm = {
          index: index,
          bname: row.bname,
          id: row.id,
          name: row.name,
          poster: row.poster,
          url: row.url,
          part: row.part,
          resource: resource
        };
        this.editDialogFormVisible = true;
      },
      preview(url) {
        if (url) {
          window.open(url)
        }
      },
      computedBangumiId(bname) {
        for (const bangumi of this.bangumis) {
          if (bangumi.name === bname) {
            return bangumi.id
          }
        }
        return 0;
      },
      handleEditDone() {
        const bangumi_id = this.computedBangumiId(this.editForm.bname);
        let resource = this.editForm.resource;
        let url = this.editForm.url.replace(this.CDNPrefixp, '');
        if (!resource.video[720].src && !resource.video[1080].src) {
          resource = '';
          url = this.editForm.poster.replace(this.CDNPrefixp, '').split('poster')[0] + this.editForm.part + '.mp4'
        } else {
          if (!resource.video[720].src) {
            resource.video = {
              '1080': resource.video[1080]
            }
          }
          if (!resource.video[1080].src) {
            resource.video = {
              '720': resource.video[720]
            }
          }
        }
        this.$http.post('/video/edit', {
          id: this.editForm.id,
          name: this.editForm.name,
          bangumi_id: bangumi_id,
          poster: this.editForm.poster.replace(this.CDNPrefixp, ''),
          url: this.editForm.url.replace(this.CDNPrefixp, ''),
          part: this.editForm.part,
          resource: resource
        }).then(() => {
          if (!resource.video[720]) {
            resource.video[720] = {
              "useLyc": false,
              "src": ""
            }
          }
          if (!resource.video[1080]) {
            resource.video[1080] = {
              "useLyc": false,
              "src": ""
            }
          }
          this.list[this.editForm.index].name = this.editForm.name;
          this.list[this.editForm.index].bname = this.editForm.bname;
          this.list[this.editForm.index].bangumi_id = bangumi_id;
          this.list[this.editForm.index].url = this.editForm.url;
          this.list[this.editForm.index].part = this.editForm.part;
          this.list[this.editForm.index].poster = this.editForm.poster;
          this.list[this.editForm.index].resource = resource;
          this.editDialogFormVisible = false;
          this.$message.success('操作成功');
        }, (err) => {
          this.$message.error('操作失败');
          console.log(err);
        });
      },
      handleDelete(index, row) {
        const isDeleted = row.deleted_at !== null;
        this.$confirm(`确定要${isDeleted ? '恢复' : '删除'}《${row.name}》吗?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('/video/delete', {
            id: row.id,
            isDeleted: isDeleted
          }).then(() => {
            this.list[index].deleted_at = isDeleted ? null : moment().format('YYYY-MM-DD H:m:s');
            this.$message.success('操作成功');
          }, (err) => {
            this.$message.error('操作失败');
            console.log(err);
          });
        })
      },
      handleCreateCancel() {
        this.createForm = {
          P720: {
            show: false,
            src: 'bangumi/${name}/video/720/${n}.mp4',
            useLyc: true
          },
          P1080: {
            show: false,
            src: 'bangumi/${name}/video/1080/${n}.mp4',
            useLyc: true
          },
          lyric: {
            zh: 'bangumi/${name}/lyric/zh/${n}.ass'
          },
          resourceName: '',
          bname: '',
          name: '',
          part: '',
          url: 'bangumi/${name}/video/${n}.mp4',
          poster: 'bangumi/${name}/poster/${n}.jpg',
        };
        this.createDialogFormVisible = false
      },
      handleCreateDone() {
        const part = this.createForm.part.split('-');
        if (!this.createForm.bname) {
          this.$message.error('先选择番剧');
          return;
        }
        if (part.length !== 2) {
          this.$message.error('集数不符合规范');
          return;
        }
        const [begin, end] = [part[0] - 0, part[1] - 0];
        const length = end - begin + 1;
        if (length <= 0 || begin === 0) {
          this.$message.error('集数不符合规范');
          return;
        }
        const resName = this.createForm.resourceName;
        if (resName === '') {
          this.$message.error('未修改链接中的番剧名');
          return;
        }
        const names = this.createForm.name.split('\n');
        if (names.length !== length) {
          this.$message.error('名称个数不对');
          return;
        }
        let arr = [], j =0;
        const bangumi_id = this.computedBangumiId(this.createForm.bname);
        const [
          use720P,
          use1080P,
          use720Lyc,
          use1080Lyc
        ] = [
          this.createForm.P720.show,
          this.createForm.P1080.show,
          this.createForm.P720.useLyc,
          this.createForm.P1080.useLyc
        ];
        let url, resource;
        for (let i = begin; i <= end; i++) {
          if (use720P || use1080P) {
            url = '';
          } else {
            url = undefined;
          }
          if (!use1080P && !use720P) {
            resource = '';
          } else {
            resource = {
              video: {},
              lyric: ''
            }
          }
          if (use720P) {
            resource.video['720'] = {
              src: this.createForm.P720.src.replace('${n}', i).replace('${name}', resName),
              useLyc: use720Lyc
            };
          }
          if (use1080P) {
            resource.video['1080'] = {
              src: this.createForm.P1080.src.replace('${n}', i).replace('${name}', resName),
              useLyc: use1080Lyc
            };
          }
          if ((use720Lyc && use720P) || (use1080P && use1080Lyc)) {
            resource.lyric = {
              'zh': this.createForm.lyric.zh.replace('${n}', i).replace('${name}', resName)
            }
          }
          arr.unshift({
            'resource': resource,
            'bangumi_id': bangumi_id,
            'part': i,
            'name': names[j++],
            'poster': this.createForm.poster.replace('${n}', i).replace('${name}', resName),
            'url': url === undefined ? this.createForm.url.replace('${n}', i).replace('${name}', resName) : url,
            'deleted_at': moment().format('YYYY-MM-DD H:m:s')
          });
        }

        this.$http.post('/video/create', {
          arr: arr
        }).then(() => {
          this.$message.success('操作成功');
          this.handleCreateCancel();
        }, (err) => {
          this.$message.error('操作失败');
          console.log(err);
        });
      }
    }
  }
</script>
