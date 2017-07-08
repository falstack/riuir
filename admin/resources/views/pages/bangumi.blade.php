@extends('layouts.app')

@section('content')
    <div id="list">
        <el-table
                :data="list"
                style="width: 100%"
                height="660"
                highlight-current-row
                stripe
                :row-class-name="tableRowClassName">
            <el-table-column type="expand">
                <template scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <div>
                            <el-form-item label="ID">
                                <span v-text="props.row.id"></span>
                            </el-form-item>
                        </div>
                        <el-form-item label="简介">
                            <span v-html="props.row.summary"></span>
                        </el-form-item>
                        <div>
                            <el-form-item label="横幅">
                                <span v-text="props.row.banner"></span>
                            </el-form-item>
                            <el-form-item label="头像">
                                <span v-text="props.row.avatar"></span>
                            </el-form-item>
                        </div>
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
                    prop="name"
                    label="番名">
            </el-table-column>
            <el-table-column
                    width="200"
                    label="操作">
                <template scope="scope">
                    <el-button
                            size="small"
                            @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog :visible.sync="editDialogFormVisible">
            <h3 slot="title">@{{ `番剧编辑：《${dialogTitle}》`  }}</h3>
            <el-form :model="editForm">
                <el-form-item label="番名" :label-width="'70px'">
                    <el-input v-model="editForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-row>
                    <el-col :span="18">
                        <el-form-item label="头像" :label-width="'70px'">
                            <el-input v-model="editForm.avatar" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2" :offset="1">
                        <el-button icon="more"></el-button>
                    </el-col>
                    <el-col :span="2" :offset="1">
                        <el-form-item>
                            <el-upload
                                    class="avatar-uploader"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="18">
                        <el-form-item label="横幅" :label-width="'70px'">
                            <el-input v-model="editForm.banner" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2" :offset="1">
                        <el-button icon="more"></el-button>
                    </el-col>
                    <el-col :span="2" :offset="1">
                        <el-form-item>
                            <el-upload
                                    class="avatar-uploader"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="简介" :label-width="'70px'">
                    <el-input
                            type="textarea"
                            :rows="5"
                            placeholder="请输入番剧简介"
                            v-model="editForm.summary">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editDialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="editDialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
    <script>
      new Vue({
          el: '#list',
          data () {
            return {
              list: <?php echo $list ?>,
              editDialogFormVisible: false,
              dialogTitle: '',
              imageUrl: '',
              editForm: {
                name: '',
                avatar: '',
                banner: '',
                summary: ''
              },
              fileList: [
                {
                  name: 'food.jpeg',
                  url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                },
                {
                  name: 'food2.jpeg',
                  url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }
              ]
            }
          },
          methods : {
            tableRowClassName(row, index) {
              if (index === 1) {
                return 'info-row';
              } else if (index === 3) {
                return 'positive-row';
              }
              return '';
            },
            handleEdit(row) {
              console.log(row);
              this.dialogTitle = row.name;
              this.editForm = {
                name: row.name,
                banner: row.banner,
                avatar: row.avatar,
                summary: row.summary
              };
              this.editDialogFormVisible = true;
            },
            handleDelete(index, row) {

            },
            handleRemove(file, fileList) {
              console.log(file, fileList);
            },
            handlePreview(file) {
              console.log(file);
            },
            handleAvatarSuccess(res, file) {
              this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
              const isJPG = file.type === 'image/jpeg';
              const isLt2M = file.size / 1024 / 1024 < 2;

              if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
              }
              if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
              }
              return isJPG && isLt2M;
            }
          }
       });
    </script>
@endsection
