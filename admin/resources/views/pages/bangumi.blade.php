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
                    <el-form label-position="left" inline>
                        <div>
                            <el-form-item label="别名">
                                <span v-text="props.row.alias"></span>
                            </el-form-item>
                        </div>
                        <div>
                            <el-form-item label="横幅">
                                <span style="cursor: pointer;" v-text="props.row.banner" @click="preview(props.row.banner)"></span>
                            </el-form-item>
                            <el-form-item label="头像">
                                <span style="cursor: pointer;" v-text="props.row.avatar" @click="preview(props.row.avatar)"></span>
                            </el-form-item>
                        </div>
                        <div v-if="props.row.tags.length">
                            <el-form-item label="标签">
                                <el-tag type="gray" v-for="tag in props.row.tags" style="margin-right: 10px" v-text="tag.name"></el-tag>
                            </el-form-item>
                        </div>
                        <el-form-item label="简介">
                            <span v-html="props.row.summary"></span>
                        </el-form-item>
                        <div>
                            <el-form-item label="关注人数">
                                <span>@{{ props.row.like ? props.row.like : 0 }}</span>
                            </el-form-item>
                            <el-form-item label="总评分数">
                                <span>@{{ props.row.score ? props.row.score : 0 }}</span>
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
                    prop="name"
                    label="番名">
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
            <h3 slot="title">@{{ `番剧编辑：《${dialogTitle}》`  }}</h3>
            <el-form :model="editForm">
                <el-form-item label="番名" :label-width="'60px'">
                    <el-input v-model="editForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="别名" :label-width="'60px'">
                    <el-input v-model="editForm.alias" auto-complete="off"></el-input>
                </el-form-item>
                <el-row>
                    <el-col :span="18">
                        <el-form-item label="头像" :label-width="'60px'">
                            <el-input v-model="editForm.avatar" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2" :offset="1">
                        <el-button icon="more" @click="preview(editForm.avatar)"></el-button>
                    </el-col>
                    <el-col :span="2" :offset="1">
                        <el-form-item>
                            <el-upload
                                    action="http://up.qiniu.com"
                                    :data="uploadHeaders"
                                    :show-file-list="false"
                                    :on-success="handleEditAvatarSuccess"
                                    :before-upload="beforeUpload">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="18">
                        <el-form-item label="横幅" :label-width="'60px'">
                            <el-input v-model="editForm.banner" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2" :offset="1">
                        <el-button icon="more" @click="preview(editForm.banner)"></el-button>
                    </el-col>
                    <el-col :span="2" :offset="1">
                        <el-form-item>
                            <el-upload
                                    action="http://up.qiniu.com"
                                    :data="uploadHeaders"
                                    :show-file-list="false"
                                    :on-success="handleEditBannerSuccess"
                                    :before-upload="beforeUpload">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="标签" :label-width="'60px'">
                    <el-select v-model="editForm.tags" style="width:100%" multiple placeholder="请选择">
                        <el-option
                                v-for="item in tags"
                                :key="item.id"
                                :label="item.name"
                                :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="季度" :label-width="'60px'">
                    <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入番剧季度信息，JSON格式，包含 part，time，name 字段"
                            v-model="editForm.season">
                    </el-input>
                </el-form-item>
                <el-form-item label="简介" :label-width="'60px'">
                    <el-input
                            type="textarea"
                            :rows="4"
                            placeholder="请输入番剧简介"
                            v-model="editForm.summary">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editDialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleEditDone">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="createDialogFormVisible">
            <h3 slot="title">创建番剧</h3>
            <el-form :model="createForm">
                <el-form-item label="番名" :label-width="'60px'">
                    <el-input v-model="createForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="别名" :label-width="'60px'">
                    <el-input v-model="createForm.alias" auto-complete="off"></el-input>
                </el-form-item>
                <el-row>
                    <el-col :span="18">
                        <el-form-item label="头像" :label-width="'60px'">
                            <el-input v-model="createForm.avatar" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2" :offset="1">
                        <el-button icon="more" @click="preview(createForm.avatar)"></el-button>
                    </el-col>
                    <el-col :span="2" :offset="1">
                        <el-form-item>
                            <el-upload
                                    action="http://up.qiniu.com"
                                    :data="uploadHeaders"
                                    :show-file-list="false"
                                    :on-success="handleCreateAvatarSuccess"
                                    :before-upload="beforeUpload">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="18">
                        <el-form-item label="横幅" :label-width="'60px'">
                            <el-input v-model="createForm.banner" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2" :offset="1">
                        <el-button icon="more" @click="preview(createForm.banner)"></el-button>
                    </el-col>
                    <el-col :span="2" :offset="1">
                        <el-form-item>
                            <el-upload
                                    action="http://up.qiniu.com"
                                    :data="uploadHeaders"
                                    :show-file-list="false"
                                    :on-success="handleCreateBannerSuccess"
                                    :before-upload="beforeUpload">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="简介" :label-width="'60px'">
                    <el-input
                            type="textarea"
                            :rows="5"
                            placeholder="请输入番剧简介"
                            v-model="createForm.summary">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="createDialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleCreateDone">确 定</el-button>
            </div>
        </el-dialog>
        <el-button type="primary" style="margin-top: 20px;margin-right: 80px;float: right" size="large" @click="createDialogFormVisible = true">创建番剧</el-button>
    </div>
    <script>
      new Vue({
          el: '#list',
          data () {
            return {
              list: <?php echo $list ?>,
              tags: <?php echo $tags ?>,
              uptoken: '<?php echo $uptoken ?>',
              editDialogFormVisible: false,
              createDialogFormVisible: false,
              dialogTitle: '',
              defaultSeason: '{"name": ["xx", "xx"], "part": [0, "xx", -1], "time": ["xxxx.xx", "xxxx.xx"]}',
              editForm: {
                name: '',
                avatar: '',
                banner: '',
                summary: '',
                alias: '',
                season: '',
                tags: []
              },
              createForm: {
                name: '',
                avatar: '',
                banner: '',
                alias: '',
                season: '',
                summary: '',
                tags: []
              },
              uploadHeaders: {
                token: '<?php echo $uptoken ?>'
              },
              CDNPrefixp: 'https://cdn.riuir.com/'
            }
          },
          methods: {
            handleEditOpen(index, row) {
              this.dialogTitle = row.name;
              let tags = [];
              for (const tag of row.tags) {
                tags.push(tag.name)
              }
              this.editForm = {
                index: index,
                id: row.id,
                name: row.name,
                banner: row.banner,
                avatar: row.avatar,
                summary: row.summary,
                season: row.season ? JSON.stringify(row.season) : this.defaultSeason,
                alias: row.alias,
                tags: tags
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
            handleEditAvatarSuccess(res, file) {
              this.editForm.avatar = `${this.CDNPrefixp}${res.key}`
            },
            handleEditBannerSuccess(res, file) {
              this.editForm.banner = `${this.CDNPrefixp}${res.key}`
            },
            getTagIdByName(name) {
              for (const tag of this.tags) {
                if (tag.name === name) {
                  return tag.id
                }
              }
            },
            handleEditDone() {
              let tags = [];
              for (const tag of this.editForm.tags) {
                tags.push(tag.id ? tag.id : this.getTagIdByName(tag));
              }
              let season = this.editForm.season === this.defaultSeason ? '' : this.editForm.season;
              if (season) {
                try {
                  let tempSeason = JSON.parse(season);
                  const name = tempSeason.name;
                  const part = tempSeason.part;
                  const time = tempSeason.time;
                  if (time.every(eif => /^\d{4}\.\d{1,2}$/.test(eif)) && part.some(item => typeof item !== 'number')) {
                    delete tempSeason.name;
                    delete tempSeason.part;
                    season = JSON.stringify(tempSeason)
                  } else {
                    if (!name || !part || !time) {
                      this.$message.error('season 缺少 key');
                      return;
                    }
                    if (name.length !== part.length -1 || part.length < 2) {
                      this.$message.error('season 信息不完整');
                      return;
                    }
                    if (part.some(item => typeof item !== 'number')) {
                      this.$message.error('season 的 part 必须是数字');
                      return;
                    }
                    if (!part.every((item, index, arr) => {
                        if (index) {
                          if (index === arr.length - 1) {
                            return item === -1 || item > arr[index - 1];
                          } else {
                            return item > arr[index - 1];
                          }
                        } else {
                          return item === 0;
                        }
                      })) {
                      this.$message.error('season part 要从 0 开始，升序排列，最后一项可为 -1');
                      return;
                    }
                    if (time.every(eif => eif === 'xxxx.xx')) {
                      delete tempSeason.time;
                      season = JSON.stringify(tempSeason)
                    } else if (time.every(eif => !/^\d{4}\.\d{1,2}$/.test(eif))) {
                      this.$message.error('time 格式不正确');
                      return;
                    } else if (name.length !== time.length) {
//                      this.$message.error('time 数量不对');
//                      return;
                    }
                  }
                } catch (e) {
                  this.$message.error('season 不是 JSON 格式');
                  return;
                }
              }
              this.$http.post('/bangumi/edit', {
                id: this.editForm.id,
                name: this.editForm.name,
                avatar: this.editForm.avatar.replace(this.CDNPrefixp, ''),
                banner: this.editForm.banner.replace(this.CDNPrefixp, ''),
                alias: this.editForm.alias.split(/,|，/).join(','),
                season: season,
                summary: this.editForm.summary,
                tags: tags
              }).then(() => {
                let newTags = [];
                for (const tag of this.tags) {
                  for (const item of tags) {
                    if (item === tag.id) {
                      console.log(tag.name);
                      newTags.push(tag);
                    }
                  }
                }
                this.list[this.editForm.index].name = this.editForm.name;
                this.list[this.editForm.index].avatar = this.editForm.avatar;
                this.list[this.editForm.index].banner = this.editForm.banner;
                this.list[this.editForm.index].summary = this.editForm.summary;
                this.list[this.editForm.index].season = season;
                this.list[this.editForm.index].tags = newTags;
                this.list[this.editForm.index].alias = this.editForm.alias.split(/,|，/).join(',');
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
                this.$http.post('/bangumi/delete', {
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
            handleCreateAvatarSuccess(res, file) {
              this.createForm.avatar = `${this.CDNPrefixp}${res.key}`
            },
            handleCreateBannerSuccess(res, file) {
              this.createForm.banner = `${this.CDNPrefixp}${res.key}`
            },
            handleCreateDone() {
              this.$http.post('/bangumi/create', {
                name: this.createForm.name,
                avatar: this.createForm.avatar.replace(this.CDNPrefixp, ''),
                banner: this.createForm.banner.replace(this.CDNPrefixp, ''),
                alias: this.createForm.alias.split(/,|，/).join(','),
                summary: this.createForm.summary
              }).then((res) => {
                this.list.unshift({
                  id: res.data,
                  name: this.createForm.name,
                  avatar: this.createForm.avatar,
                  banner: this.createForm.banner,
                  summary: this.createForm.summary,
                  alias: this.createForm.alias.split(/,|，/).join(',')
                });
                this.createDialogFormVisible = false;
                this.$message.success('操作成功');
              }, (err) => {
                  this.$message.error('操作失败');
                  console.log(err);
              });
            }
          }
       });
    </script>
@endsection
