@extends('layouts.app')

@section('content')
    <div id="list" v-cloak>
        <el-table
                :data="list"
                style="width: 100%"
                height="660"
                highlight-current-row
                stripe>
            <el-table-column type="expand">
                <template scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
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
                            @click="handleDelete(scope.$index, scope.row)">@{{ scope.row.deleted_at ? '恢复' : '删除' }}</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog :visible.sync="editDialogFormVisible">
            <h3 slot="title">@{{ `视频编辑：《${dialogTitle}》`  }}</h3>
            <el-form :model="editForm">
                <el-form-item label="番剧" :label-width="'60px'">
                    <el-select v-model="editForm.bname" placeholder="请选择">
                        <el-option
                            v-for="item in bangumis"
                            :key="item.id"
                            :value="item.name"
                            :disabled="item.deleted_at">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="集数" :label-width="'60px'">
                    <el-input v-model="editForm.part" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="名称" :label-width="'60px'">
                    <el-input v-model="editForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-row>
                    <el-col :span="18">
                        <el-form-item label="海报" :label-width="'60px'">
                            <el-input v-model="editForm.poster" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2" :offset="1">
                        <el-button icon="more" @click="preview(editForm.poster)"></el-button>
                    </el-col>
                    <el-col :span="2" :offset="1">
                        <el-form-item>
                            <el-upload
                                    action="http://up.qiniu.com"
                                    :data="uploadHeaders"
                                    :show-file-list="false"
                                    :on-success="handleEditPosterSuccess"
                                    :before-upload="beforeUpload">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="18">
                        <el-form-item label="资源" :label-width="'60px'">
                            <el-input v-model="editForm.url" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2" :offset="1">
                        <el-button icon="more" @click="preview(editForm.url)"></el-button>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editDialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleEditDone">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="createDialogFormVisible">
            <h3 slot="title">新建视频</h3>
            <el-form :model="createForm">
                <el-form-item label="番剧" :label-width="'60px'">
                    <el-select v-model="createForm.bname" placeholder="请选择">
                        <el-option
                                v-for="item in bangumis"
                                :key="item.id"
                                :value="item.name"
                                :disabled="item.deleted_at">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="名称" :label-width="'60px'">
                    <el-input v-model="createForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="集数" :label-width="'60px'">
                    <el-input v-model="createForm.part" auto-complete="off"></el-input>
                </el-form-item>
                <el-row>
                    <el-col :span="18">
                        <el-form-item label="海报" :label-width="'60px'">
                            <el-input v-model="createForm.poster" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2" :offset="1">
                        <el-button icon="more" @click="preview(createForm.poster)"></el-button>
                    </el-col>
                    <el-col :span="2" :offset="1">
                        <el-form-item>
                            <el-upload
                                    action="http://up.qiniu.com"
                                    :data="uploadHeaders"
                                    :show-file-list="false"
                                    :on-success="handleCreatePosterSuccess"
                                    :before-upload="beforeUpload">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="18">
                        <el-form-item label="资源" :label-width="'60px'">
                            <el-input v-model="createForm.url" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2" :offset="1">
                        <el-button icon="more" @click="preview(createForm.url)"></el-button>
                    </el-col>
                    <el-col :span="2" :offset="1">
                        <el-form-item>
                            <el-upload
                                    action="http://up.qiniu.com"
                                    :data="uploadHeaders"
                                    :show-file-list="false"
                                    :on-progress="handleVideoUploadProgress"
                                    :on-success="handleVideoUploadSuccess"
                                    :before-upload="beforeVideoUpload">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="handleCreateCancel">取 消</el-button>
                <el-button type="primary" @click="handleCreateDone">确 定</el-button>
            </div>
        </el-dialog>
        <el-row>
            <el-button type="primary" style="margin-top: 20px;margin-right: 80px;float: right" size="large" @click="openCreateDialog">新建视频</el-button>
        </el-row>
        <el-row style="margin-bottom: 30px">
            <el-row style="margin-top: 20px" class="item" v-for="item in createForms" v-if="item.show">
                <el-col :span="3" :offset="1">
                    <el-progress type="circle"
                                 width="100"
                                 :percentage="item.percent"
                                 :status="item.response === null ? '' : item.response ? 'success' : 'exception'">
                    </el-progress>
                </el-col>
                <el-col :span="20">
                    <p>番剧：@{{ item.bname }}</p>
                    <p>名称：@{{ item.name }}</p>
                    <p>集数：@{{ item.part }}</p>
                    <p>海报：@{{ item.poster }}</p>
                </el-col>
            </el-row>
        </el-row>
    </div>
    <script>
      new Vue({
        el: '#list',
        data () {
          return {
            list: <?php echo $list ?>,
            bangumis: <?php echo $bangumis ?>,
            uptoken: '<?php echo $uptoken ?>',
            uploadHeaders: {
              token: '<?php echo $uptoken ?>'
            },
            editDialogFormVisible: false,
            createDialogFormVisible: false,
            dialogTitle: '',
            editForm: {
              bname: '',
              name: '',
              part: '',
              poster: '',
              url: ''
            },
            createForm: {
              bname: '',
              name: '',
              part: '',
              poster: '',
              url: ''
            },
            createFormId: -1,
            createForms: [],
            CDNPrefixp: 'http://cdn.riuir.com/'
          }
        },
        methods : {
          handleEditOpen(index, row) {
            this.dialogTitle = row.name;
            this.editForm = {
              index: index,
              bname: row.bname,
              id: row.id,
              name: row.name,
              poster: row.poster,
              url: row.url,
              part: row.part
            };
            this.editDialogFormVisible = true;
          },
          preview(url) {
            if (url) {
              window.open(url)
            }
          },
          beforeUpload(file) {
            const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
              this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
              this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
          },
          beforeVideoUpload(file) {
            this.createForms[this.createFormId].uid = file.uid;
            return new Promise((resolve, reject) => {
              this.$on(`createFormDone-${this.createFormId}`, () => {
                resolve();
              });
            });
          },
          handleEditPosterSuccess(res, file) {
            this.editForm.avatar = `${this.CDNPrefixp}${res.key}`
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
            this.$http.post('/video/edit', {
              id: this.editForm.id,
              name: this.editForm.name,
              bangumi_id: bangumi_id,
              poster: this.editForm.poster.replace(this.CDNPrefixp, ''),
              url: this.editForm.url.replace(this.CDNPrefixp, ''),
              part: this.editForm.part
            }).then(() => {
              this.list[this.editForm.index].name = this.editForm.name;
              this.list[this.editForm.index].bname = this.editForm.bname;
              this.list[this.editForm.index].bangumi_id = bangumi_id;
              this.list[this.editForm.index].url = this.editForm.url;
              this.list[this.editForm.index].part = this.editForm.part;
              this.list[this.editForm.index].poster = this.editForm.poster;
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
          openCreateDialog() {
            let bname = '',
                part = '';
            if (this.createFormId !== -1) {
              bname = this.createForms[this.createFormId].bname;
              part = parseInt(this.createForms[this.createFormId].part, 10) + 1;
            }
            this.createForms.push({
              bname: bname,
              part: part,
              name: '',
              poster: '',
              url: '',
              show: false,
              percent: 0,
              response: null
            });
            this.createFormId++;
            this.createDialogFormVisible = true;
          },
          handleCreateCancel() {
            this.createForm = {
              bname: '',
              name: '',
              part: '',
              poster: '',
              url: ''
            };
            this.createForms[this.createFormId].show = false;
            this.createDialogFormVisible = false
          },
          handleCreatePosterSuccess(res, file) {
            const image = `${this.CDNPrefixp}${res.key}`;
            this.createForm.poster = image;
            this.createForms[this.createFormId].poster = image
          },
          handleVideoUploadSuccess(res, file) {
            const uid = file.uid;
            for (let i=0; i<this.createForms.length; ++i) {
              if (this.createForms[i].uid === uid) {
                this.createForms[i].url = `${this.CDNPrefixp}${res.key}`;
                const form = this.createForms[i];
                const bangumi_id = this.computedBangumiId(form.bname);
                this.$http.post('/video/create', {
                  name: form.name,
                  poster: form.poster.replace(this.CDNPrefixp, ''),
                  url: form.url.replace(this.CDNPrefixp, ''),
                  bangumi_id: bangumi_id,
                  part: form.part
                }).then((res) => {
                  this.list.unshift({
                    id: res.data,
                    name: form.name,
                    poster: form.poster,
                    url: form.url,
                    part: form.part,
                    bname: form.bname,
                    bangumi_id: bangumi_id,
                    count_comment: 0,
                    count_played: 0
                  });
                  this.createForms[i].response = true;
                  this.$message.success('操作成功');
                }, (err) => {
                  this.createForms[i].response = false;
                  this.$message.error('操作失败');
                  console.log(err);
                });
              }
            }
          },
          handleCreateDone() {
            this.$emit(`createFormDone-${this.createFormId}`);
            this.createForms[this.createFormId].show = true;
            this.createForms[this.createFormId].bname = this.createForm.bname;
            this.createForms[this.createFormId].name = this.createForm.name;
            this.createForms[this.createFormId].part = this.createForm.part;
            this.createForms[this.createFormId].poster = this.createForm.poster;
            this.createForm = {
              bname: '',
              name: '',
              part: '',
              poster: '',
              url: ''
            };
            this.createDialogFormVisible = false
          },
          handleVideoUploadProgress(event, file, fileList) {
            const uid = file.uid;
            for (let i=0;  i<this.createForms.length; ++i) {
              if (this.createForms[i].uid === uid) {
                this.createForms[i].percent = parseInt(event.percent, 10);
              }
            }
          }
        }
      });
    </script>
@endsection
