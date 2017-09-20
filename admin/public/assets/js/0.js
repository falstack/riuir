webpackJsonp([0],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(108)("172feaba", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../node_modules/_vue-loader@13.0.5@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b9e0b16\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../../node_modules/_sass-resources-loader@1.3.0@sass-resources-loader/lib/loader.js?{\"resources\":[\"/Users/yuistack/Documents/Sites/riuir/admin/frontend/assets/css/variables.scss\",\"/Users/yuistack/Documents/Sites/riuir/admin/frontend/assets/css/mixins.scss\"]}!../../../node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=styles&index=0!./video.vue", function() {
     var newContent = require("!!../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../node_modules/_vue-loader@13.0.5@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b9e0b16\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../../node_modules/_sass-resources-loader@1.3.0@sass-resources-loader/lib/loader.js?{\"resources\":[\"/Users/yuistack/Documents/Sites/riuir/admin/frontend/assets/css/variables.scss\",\"/Users/yuistack/Documents/Sites/riuir/admin/frontend/assets/css/mixins.scss\"]}!../../../node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=styles&index=0!./video.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(107)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(moment) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var defaultResource = {
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
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-page-bangumi-video',
  computed: {
    filter: function filter() {
      var begin = (this.pagination.curPage - 1) * this.pagination.pageSize;
      return this.list.slice(begin, begin + this.pagination.pageSize);
    }
  },
  data: function data() {
    return {
      loading: true,
      list: [],
      bangumis: [],
      pagination: {
        totalPage: 0,
        pageSize: 24,
        curPage: 1
      },
      showEditorModal: false,
      showCreateModal: false,
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
        poster: 'bangumi/${name}/poster/${n}.jpg'
      },
      CDNPrefixp: 'https://cdn.riuir.com/'
    };
  },
  created: function created() {
    this.getVideos();
  },

  methods: {
    getVideos: function getVideos() {
      var _this = this;

      this.$http.get('/bangumi/videos').then(function (data) {
        _this.list = data.videos;
        _this.bangumis = data.bangumis;
        _this.pagination.totalPage = Math.ceil(_this.list.length / _this.pagination.pageSize);
        _this.loading = false;
      });
    },
    handleSizeChange: function handleSizeChange(val) {
      this.pagination.pageSize = val;
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.pagination.curPage = val;
    },
    handleEditOpen: function handleEditOpen(index, row) {
      this.dialogTitle = row.name;
      var def = {
        useLyc: false,
        src: ''
      };
      var resource = {};
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
          };
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
      this.showEditorModal = true;
    },
    preview: function preview(url) {
      if (url) {
        window.open(url);
      }
    },
    computedBangumiId: function computedBangumiId(bname) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.bangumis[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var bangumi = _step.value;

          if (bangumi.name === bname) {
            return bangumi.id;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return 0;
    },
    handleEditDone: function handleEditDone() {
      var _this2 = this;

      var bangumi_id = this.computedBangumiId(this.editForm.bname);
      var resource = this.editForm.resource;
      var url = this.editForm.url.replace(this.CDNPrefixp, '');
      if (!resource.video[720].src && !resource.video[1080].src) {
        resource = '';
        url = this.editForm.poster.replace(this.CDNPrefixp, '').split('poster')[0] + this.editForm.part + '.mp4';
      } else {
        if (!resource.video[720].src) {
          resource.video = {
            '1080': resource.video[1080]
          };
        }
        if (!resource.video[1080].src) {
          resource.video = {
            '720': resource.video[720]
          };
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
      }).then(function () {
        if (!resource.video[720]) {
          resource.video[720] = {
            "useLyc": false,
            "src": ""
          };
        }
        if (!resource.video[1080]) {
          resource.video[1080] = {
            "useLyc": false,
            "src": ""
          };
        }
        _this2.list[_this2.editForm.index].name = _this2.editForm.name;
        _this2.list[_this2.editForm.index].bname = _this2.editForm.bname;
        _this2.list[_this2.editForm.index].bangumi_id = bangumi_id;
        _this2.list[_this2.editForm.index].url = _this2.editForm.url;
        _this2.list[_this2.editForm.index].part = _this2.editForm.part;
        _this2.list[_this2.editForm.index].poster = _this2.editForm.poster;
        _this2.list[_this2.editForm.index].resource = resource;
        _this2.showEditorModal = false;
        _this2.$message.success('操作成功');
      }, function (err) {
        _this2.$message.error('操作失败');
        console.log(err);
      });
    },
    handleDelete: function handleDelete(index, row) {
      var _this3 = this;

      var isDeleted = row.deleted_at !== null;
      this.$confirm("\u786E\u5B9A\u8981" + (isDeleted ? '恢复' : '删除') + "\u300A" + row.name + "\u300B\u5417?", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this3.$http.post('/video/delete', {
          id: row.id,
          isDeleted: isDeleted
        }).then(function () {
          _this3.list[index].deleted_at = isDeleted ? null : moment().format('YYYY-MM-DD H:m:s');
          _this3.$message.success('操作成功');
        }, function (err) {
          _this3.$message.error('操作失败');
          console.log(err);
        });
      });
    },
    handleCreateCancel: function handleCreateCancel() {
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
        poster: 'bangumi/${name}/poster/${n}.jpg'
      };
      this.showCreateModal = false;
    },
    handleCreateDone: function handleCreateDone() {
      var _this4 = this;

      var part = this.createForm.part.split('-');
      if (!this.createForm.bname) {
        this.$message.error('先选择番剧');
        return;
      }
      if (part.length !== 2) {
        this.$message.error('集数不符合规范');
        return;
      }
      var begin = part[0] - 0,
          end = part[1] - 0;

      var length = end - begin + 1;
      if (length <= 0 || begin === 0) {
        this.$message.error('集数不符合规范');
        return;
      }
      var resName = this.createForm.resourceName;
      if (resName === '') {
        this.$message.error('未修改链接中的番剧名');
        return;
      }
      var names = this.createForm.name.split('\n');
      if (names.length !== length) {
        this.$message.error('名称个数不对');
        return;
      }
      var arr = [],
          j = 0;
      var bangumi_id = this.computedBangumiId(this.createForm.bname);
      var _ref = [this.createForm.P720.show, this.createForm.P1080.show, this.createForm.P720.useLyc, this.createForm.P1080.useLyc],
          use720P = _ref[0],
          use1080P = _ref[1],
          use720Lyc = _ref[2],
          use1080Lyc = _ref[3];

      var url = void 0,
          resource = void 0;
      for (var i = begin; i <= end; i++) {
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
          };
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
        if (use720Lyc && use720P || use1080P && use1080Lyc) {
          resource.lyric = {
            'zh': this.createForm.lyric.zh.replace('${n}', i).replace('${name}', resName)
          };
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
      }).then(function () {
        _this4.$message.success('操作成功');
        _this4.handleCreateCancel();
      }, function (err) {
        _this4.$message.error('操作失败');
        console.log(err);
      });
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)))

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/views/bangumi/video.vue
var video = __webpack_require__(120);

// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-0b9e0b16","hasScoped":true}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/views/bangumi/video.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c(
        "header",
        [
          _c(
            "el-button",
            {
              attrs: { type: "primary", size: "large" },
              on: {
                click: function($event) {
                  _vm.showCreateModal = true
                }
              }
            },
            [_vm._v("新建视频")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-table",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.loading,
              expression: "loading"
            }
          ],
          staticClass: "main-view",
          attrs: { data: _vm.filter, "highlight-current-row": "" }
        },
        [
          _c("el-table-column", {
            attrs: { type: "expand" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(props) {
                  return [
                    _c(
                      "el-form",
                      { attrs: { "label-position": "left", inline: "" } },
                      [
                        _c(
                          "div",
                          [
                            _c("el-form-item", { attrs: { label: "视频 ID" } }, [
                              _c("span", {
                                domProps: { textContent: _vm._s(props.row.id) }
                              })
                            ]),
                            _vm._v(" "),
                            _c("el-form-item", { attrs: { label: "番剧 ID" } }, [
                              _c("span", {
                                domProps: {
                                  innerHTML: _vm._s(props.row.bangumi_id)
                                }
                              })
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("el-form-item", { attrs: { label: "海报" } }, [
                              _c("span", {
                                staticStyle: { cursor: "pointer" },
                                domProps: {
                                  textContent: _vm._s(props.row.poster)
                                },
                                on: {
                                  click: function($event) {
                                    _vm.preview(props.row.poster)
                                  }
                                }
                              })
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("el-form-item", { attrs: { label: "播放量" } }, [
                              _c("span", {
                                domProps: {
                                  textContent: _vm._s(props.row.count_played)
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("el-form-item", { attrs: { label: "评论数" } }, [
                              _c("span", {
                                domProps: {
                                  textContent: _vm._s(props.row.count_comment)
                                }
                              })
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("el-form-item", { attrs: { label: "创建时间" } }, [
                              _c("span", {
                                domProps: {
                                  textContent: _vm._s(props.row.created_at)
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("el-form-item", { attrs: { label: "更新时间" } }, [
                              _c("span", {
                                domProps: {
                                  textContent: _vm._s(props.row.updated_at)
                                }
                              })
                            ]),
                            _vm._v(" "),
                            props.row.deleted_at
                              ? _c(
                                  "el-form-item",
                                  { attrs: { label: "删除时间" } },
                                  [
                                    _c("span", {
                                      domProps: {
                                        textContent: _vm._s(
                                          props.row.deleted_at
                                        )
                                      }
                                    })
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ]
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "id", sortable: "", width: "100", label: "索引" }
          }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "bname", label: "番名" } }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "name", label: "名称" } }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "part", width: "100", label: "集数" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              sortable: "",
              width: "110",
              prop: "count_played",
              label: "播放量"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              sortable: "",
              width: "110",
              prop: "count_comment",
              label: "评论数"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { width: "200", label: "操作" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "el-button",
                      {
                        attrs: { size: "small" },
                        on: {
                          click: function($event) {
                            _vm.handleEditOpen(scope.$index, scope.row)
                          }
                        }
                      },
                      [_vm._v("编辑")]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        attrs: {
                          size: "small",
                          type: scope.row.deleted_at ? "warning" : "danger"
                        },
                        on: {
                          click: function($event) {
                            _vm.handleDelete(scope.$index, scope.row)
                          }
                        }
                      },
                      [_vm._v(_vm._s(scope.row.deleted_at ? "恢复" : "删除"))]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-modal",
        {
          staticClass: "video-editor-modal",
          attrs: { "header-text": "视频编辑" },
          on: { submit: _vm.handleEditDone },
          model: {
            value: _vm.showEditorModal,
            callback: function($$v) {
              _vm.showEditorModal = $$v
            },
            expression: "showEditorModal"
          }
        },
        [
          _c(
            "el-form",
            { attrs: { model: _vm.editForm } },
            [
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { span: 8 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "番剧", "label-width": "85px" } },
                        [
                          _c(
                            "el-select",
                            {
                              attrs: { placeholder: "请选择" },
                              model: {
                                value: _vm.editForm.bname,
                                callback: function($$v) {
                                  _vm.editForm.bname = $$v
                                },
                                expression: "editForm.bname"
                              }
                            },
                            _vm._l(_vm.bangumis, function(item) {
                              return _c("el-option", {
                                key: item.id,
                                attrs: {
                                  value: item.name,
                                  disabled: item.deleted_at
                                }
                              })
                            })
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 6 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "集数", "label-width": "85px" } },
                        [
                          _c("el-input", {
                            attrs: { "auto-complete": "off" },
                            model: {
                              value: _vm.editForm.part,
                              callback: function($$v) {
                                _vm.editForm.part = $$v
                              },
                              expression: "editForm.part"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 10 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "名称", "label-width": "85px" } },
                        [
                          _c("el-input", {
                            attrs: { "auto-complete": "off" },
                            model: {
                              value: _vm.editForm.name,
                              callback: function($$v) {
                                _vm.editForm.name = $$v
                              },
                              expression: "editForm.name"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "海报", "label-width": "85px" } },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.editForm.poster,
                      callback: function($$v) {
                        _vm.editForm.poster = $$v
                      },
                      expression: "editForm.poster"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.editForm.url
                ? _c(
                    "el-form-item",
                    { attrs: { label: "外链资源", "label-width": "85px" } },
                    [
                      _c("el-input", {
                        attrs: { "auto-complete": "off" },
                        model: {
                          value: _vm.editForm.url,
                          callback: function($$v) {
                            _vm.editForm.url = $$v
                          },
                          expression: "editForm.url"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "字幕", "label-width": "85px" } },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.editForm.resource.lyric.zh,
                      callback: function($$v) {
                        _vm.editForm.resource.lyric.zh = $$v
                      },
                      expression: "editForm.resource.lyric.zh"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              [
                _c(
                  "el-form-item",
                  { attrs: { label: "720P 资源", "label-width": "85px" } },
                  [
                    _c(
                      "el-col",
                      { attrs: { span: 18 } },
                      [
                        _c("el-input", {
                          attrs: { "auto-complete": "off" },
                          model: {
                            value: _vm.editForm.resource.video[720].src,
                            callback: function($$v) {
                              _vm.editForm.resource.video[720].src = $$v
                            },
                            expression: "editForm.resource.video[720].src"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { span: 4, offset: 1 } },
                      [
                        _vm._v("\n            字幕："),
                        _c("el-switch", {
                          staticStyle: { float: "right", "margin-top": "7px" },
                          attrs: { "on-text": "", "off-text": "" },
                          model: {
                            value: _vm.editForm.resource.video[720].useLyc,
                            callback: function($$v) {
                              _vm.editForm.resource.video[720].useLyc = $$v
                            },
                            expression: "editForm.resource.video[720].useLyc"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              _vm._v(" "),
              [
                _c(
                  "el-form-item",
                  { attrs: { label: "1080P 资源", "label-width": "85px" } },
                  [
                    _c(
                      "el-col",
                      { attrs: { span: 18 } },
                      [
                        _c("el-input", {
                          attrs: { "auto-complete": "off" },
                          model: {
                            value: _vm.editForm.resource.video[1080].src,
                            callback: function($$v) {
                              _vm.editForm.resource.video[1080].src = $$v
                            },
                            expression: "editForm.resource.video[1080].src"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { span: 4, offset: 1 } },
                      [
                        _vm._v("\n            字幕："),
                        _c("el-switch", {
                          staticStyle: { float: "right", "margin-top": "7px" },
                          attrs: { "on-text": "", "off-text": "" },
                          model: {
                            value: _vm.editForm.resource.video[1080].useLyc,
                            callback: function($$v) {
                              _vm.editForm.resource.video[1080].useLyc = $$v
                            },
                            expression: "editForm.resource.video[1080].useLyc"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-modal",
        {
          staticClass: "video-creator-modal",
          attrs: { "header-text": "新建视频" },
          on: { submit: _vm.handleCreateDone },
          model: {
            value: _vm.showCreateModal,
            callback: function($$v) {
              _vm.showCreateModal = $$v
            },
            expression: "showCreateModal"
          }
        },
        [
          _c(
            "el-form",
            { attrs: { model: _vm.createForm } },
            [
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { span: 8 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "番剧", "label-width": "85px" } },
                        [
                          _c(
                            "el-select",
                            {
                              attrs: { placeholder: "请选择" },
                              model: {
                                value: _vm.createForm.bname,
                                callback: function($$v) {
                                  _vm.createForm.bname = $$v
                                },
                                expression: "createForm.bname"
                              }
                            },
                            _vm._l(_vm.bangumis, function(item) {
                              return _c("el-option", {
                                key: item.id,
                                attrs: {
                                  value: item.name,
                                  disabled: item.deleted_at
                                }
                              })
                            })
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 8 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "集数", "label-width": "85px" } },
                        [
                          _c("el-input", {
                            attrs: {
                              placeholder: "1-n",
                              "auto-complete": "off"
                            },
                            model: {
                              value: _vm.createForm.part,
                              callback: function($$v) {
                                _vm.createForm.part = $$v
                              },
                              expression: "createForm.part"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 8 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "名称", "label-width": "85px" } },
                        [
                          _c("el-input", {
                            attrs: {
                              placeholder: "${name}",
                              "auto-complete": "off"
                            },
                            model: {
                              value: _vm.createForm.resourceName,
                              callback: function($$v) {
                                _vm.createForm.resourceName = $$v
                              },
                              expression: "createForm.resourceName"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "画质", "label-width": "85px" } },
                [
                  _c(
                    "div",
                    [
                      _c(
                        "el-checkbox",
                        {
                          model: {
                            value: _vm.createForm.P720.show,
                            callback: function($$v) {
                              _vm.createForm.P720.show = $$v
                            },
                            expression: "createForm.P720.show"
                          }
                        },
                        [_vm._v("720P")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-checkbox",
                        {
                          model: {
                            value: _vm.createForm.P1080.show,
                            callback: function($$v) {
                              _vm.createForm.P1080.show = $$v
                            },
                            expression: "createForm.P1080.show"
                          }
                        },
                        [_vm._v("1080P")]
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _vm.createForm.P720.show
                ? _c(
                    "el-row",
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "720P 资源", "label-width": "85px" } },
                        [
                          _c(
                            "el-col",
                            { attrs: { span: 18 } },
                            [
                              _c("el-input", {
                                attrs: { "auto-complete": "off" },
                                model: {
                                  value: _vm.createForm.P720.src,
                                  callback: function($$v) {
                                    _vm.createForm.P720.src = $$v
                                  },
                                  expression: "createForm.P720.src"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "el-col",
                            { attrs: { span: 4, offset: 1 } },
                            [
                              _vm._v("\n            字幕："),
                              _c("el-switch", {
                                staticStyle: {
                                  float: "right",
                                  "margin-top": "7px"
                                },
                                attrs: { "on-text": "", "off-text": "" },
                                model: {
                                  value: _vm.createForm.P720.useLyc,
                                  callback: function($$v) {
                                    _vm.createForm.P720.useLyc = $$v
                                  },
                                  expression: "createForm.P720.useLyc"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.createForm.P1080.show
                ? _c(
                    "el-row",
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "1080P 资源", "label-width": "85px" } },
                        [
                          _c(
                            "el-col",
                            { attrs: { span: 18 } },
                            [
                              _c("el-input", {
                                attrs: { "auto-complete": "off" },
                                model: {
                                  value: _vm.createForm.P1080.src,
                                  callback: function($$v) {
                                    _vm.createForm.P1080.src = $$v
                                  },
                                  expression: "createForm.P1080.src"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "el-col",
                            { attrs: { span: 4, offset: 1 } },
                            [
                              _vm._v("\n            字幕："),
                              _c("el-switch", {
                                staticStyle: {
                                  float: "right",
                                  "margin-top": "7px"
                                },
                                attrs: { "on-text": "", "off-text": "" },
                                model: {
                                  value: _vm.createForm.P1080.useLyc,
                                  callback: function($$v) {
                                    _vm.createForm.P1080.useLyc = $$v
                                  },
                                  expression: "createForm.P1080.useLyc"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.createForm.P720.show && !_vm.createForm.P1080.show
                ? _c(
                    "el-form-item",
                    { attrs: { label: "外链资源", "label-width": "85px" } },
                    [
                      _c("el-input", {
                        attrs: { "auto-complete": "off" },
                        model: {
                          value: _vm.createForm.url,
                          callback: function($$v) {
                            _vm.createForm.url = $$v
                          },
                          expression: "createForm.url"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "字幕", "label-width": "85px" } },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.createForm.lyric.zh,
                      callback: function($$v) {
                        _vm.createForm.lyric.zh = $$v
                      },
                      expression: "createForm.lyric.zh"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "海报", "label-width": "85px" } },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.createForm.poster,
                      callback: function($$v) {
                        _vm.createForm.poster = $$v
                      },
                      expression: "createForm.poster"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "名称", "label-width": "85px" } },
                [
                  _c("el-input", {
                    attrs: {
                      type: "textarea",
                      placeholder: "一行一个",
                      "auto-complete": "off"
                    },
                    model: {
                      value: _vm.createForm.name,
                      callback: function($$v) {
                        _vm.createForm.name = $$v
                      },
                      expression: "createForm.name"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "footer",
        [
          _c("el-pagination", {
            attrs: {
              layout: "total, sizes, prev, pager, next, jumper",
              "current-page": _vm.pagination.curPage,
              "page-sizes": [24, 50, 100],
              "page-size": _vm.pagination.pageSize,
              pageCount: _vm.pagination.totalPage,
              total: _vm.list.length
            },
            on: {
              "size-change": _vm.handleSizeChange,
              "current-change": _vm.handleCurrentChange
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var bangumi_video = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0b9e0b16", esExports)
  }
}
// CONCATENATED MODULE: ./frontend/views/bangumi/video.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(118)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0b9e0b16"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  video["a" /* default */],
  bangumi_video,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "frontend/views/bangumi/video.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] video.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b9e0b16", Component.options)
  } else {
    hotAPI.reload("data-v-0b9e0b16", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var views_bangumi_video = __webpack_exports__["default"] = (Component.exports);


/***/ })

});