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
                <el-form-item label="海报" :label-width="'60px'">
                    <el-input v-model="editForm.poster" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="资源" :label-width="'60px'">
                    <el-input v-model="editForm.url" auto-complete="off"></el-input>
                </el-form-item>
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
                        <el-input v-model="createForm.P720.src" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="720P 字幕" :label-width="'85px'">
                        <el-col :span="18">
                            <el-input v-model="createForm.P720.lyric" auto-complete="off"></el-input>
                        </el-col>
                        <el-switch style="float: right;margin-top: 7px" on-text="" off-text="" v-model="createForm.P720.useLyc"></el-switch>
                    </el-form-item>
                </el-row>
                <el-row v-if="createForm.P1080.show">
                    <el-form-item label="1080P 资源" :label-width="'85px'">
                        <el-input v-model="createForm.P1080.src" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="1080P 字幕" :label-width="'85px'">
                        <el-col :span="18">
                            <el-input v-model="createForm.P1080.lyric" auto-complete="off"></el-input>
                        </el-col>
                        <el-switch style="float: right;margin-top: 7px" on-text="" off-text="" v-model="createForm.P1080.useLyc"></el-switch>
                    </el-form-item>
                </el-row>
                <el-form-item v-if="!createForm.P720.show && !createForm.P1080.show" label="普通资源" :label-width="'85px'">
                    <el-input v-model="createForm.url" auto-complete="off"></el-input>
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
        <el-row>
            <el-button type="primary" style="margin-top: 20px;margin-right: 80px;float: right" size="large" @click="createDialogFormVisible = true">新建视频</el-button>
        </el-row>
    </div>
    <script>
      new Vue({
        el: '#list',
        data () {
          return {
            list: <?php echo $list ?>,
            bangumis: <?php echo $bangumis ?>,
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
              P720: {
                show: false,
                src: 'bangumi/${name}/video/720/${n}.mp4',
                lyric: 'bangumi/${name}/video/720/${n}.aac',
                useLyc: true
              },
              P1080: {
                show: false,
                src: 'bangumi/${name}/video/1080/${n}.mp4',
                lyric: 'bangumi/${name}/video/1080/${n}.aac',
                useLyc: true
              },
              resourceName: '',
              bname: '',
              name: '',
              part: '',
              url: 'bangumi/${name}/video/${n}.mp4',
              poster: 'bangumi/${name}/poster/${n}.jpg',
            },
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
          handleCreateCancel() {
            this.createForm = {
              checkP: ['P720'],
              P720: {
                src: 'bangumi/${name}/video/720/${n}.mp4',
                lyric: 'bangumi/${name}/video/720/${n}.aac',
                useLyc: true
              },
              P1080: {
                src: 'bangumi/${name}/video/1080/${n}.mp4',
                lyric: 'bangumi/${name}/video/1080/${n}.aac',
                useLyc: true
              },
              panel: 'P720',
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
            const [use720P, use1080P] = [this.createForm.P720.show, this.createForm.P1080.show];
            let url, resource;
            const use720PLyc = this.createForm.P720.useLyc;
            const use1080PLyc = this.createForm.P1080.useLyc;
            for (let i = begin; i <= end; i++) {
              if (use1080P || use1080P) {
                url = '';
              } else {
                url = undefined;
              }
              if (!use1080P && !use720P) {
                resource = '';
              } else {
                resource = {}
              }
              if (use720P) {
                resource['720'] = {
                  useLyc: use720PLyc,
                  video: this.createForm.P720.src.replace('${n}', i).replace('${name}', resName)
                };
                if (use720PLyc) {
                  resource['720'].lyric = this.createForm.P720.lyric.replace('${n}', i).replace('${name}', resName);
                }
              }
              if (use1080P) {
                resource['1080'] = {
                  useLyc: use1080PLyc,
                  video: this.createForm.P1080.src.replace('${n}', i).replace('${name}', resName)
                };
                if (use1080PLyc) {
                  resource['1080'].lyric = this.createForm.P1080.lyric.replace('${n}', i).replace('${name}', resName);
                }
              }
              arr.push({
                'resource': resource,
                'bangumi_id': bangumi_id,
                'part': i,
                'name': names[j++],
                'poster': this.createForm.poster.replace('${n}', i).replace('${name}', resName),
                'url': url === undefined ? this.createForm.url.replace('${n}', i).replace('${name}', resName) : url
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
      });
    </script>
@endsection
