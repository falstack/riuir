webpackJsonp([3],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(108)("79ef09a2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../node_modules/_vue-loader@13.0.5@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6572ce94\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../../node_modules/_sass-resources-loader@1.3.0@sass-resources-loader/lib/loader.js?{\"resources\":[\"/Users/yuistack/Documents/Sites/riuir/admin/frontend/assets/css/variables.scss\",\"/Users/yuistack/Documents/Sites/riuir/admin/frontend/assets/css/mixins.scss\"]}!../../../node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=styles&index=0!./tag.vue", function() {
     var newContent = require("!!../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../node_modules/_vue-loader@13.0.5@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6572ce94\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../../node_modules/_sass-resources-loader@1.3.0@sass-resources-loader/lib/loader.js?{\"resources\":[\"/Users/yuistack/Documents/Sites/riuir/admin/frontend/assets/css/variables.scss\",\"/Users/yuistack/Documents/Sites/riuir/admin/frontend/assets/css/mixins.scss\"]}!../../../node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=styles&index=0!./tag.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(107)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/views/bangumi/tag.vue
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

/* harmony default export */ var tag = ({
  name: 'v-page-bangumi-tag',
  computed: {
    filter: function filter() {
      var begin = (this.pagination.curPage - 1) * this.pagination.pageSize;
      return this.list.slice(begin, begin + this.pagination.pageSize);
    }
  },
  data: function data() {
    return {
      list: [],
      pagination: {
        totalPage: 0,
        pageSize: 20,
        curPage: 1
      },
      models: [{
        id: 0,
        name: '番剧'
      }],
      showEditorModal: false,
      showCreateModal: false,
      editForm: {
        name: ''
      },
      createForm: {
        name: '',
        model: ''
      },
      loading: true
    };
  },
  created: function created() {
    this.getTags();
  },

  methods: {
    getTags: function getTags() {
      var _this = this;

      this.$http.get('/bangumi/tags').then(function (data) {
        _this.list = data;
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
    modelFormat: function modelFormat(key) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.models[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var model = _step.value;

          if (model.name === key) {
            return model.id;
          }
          if (model.id === key) {
            return model.name;
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
    },
    handleEditOpen: function handleEditOpen(index, row) {
      this.editForm = {
        index: index,
        id: row.id,
        name: row.name
      };
      this.showEditorModal = true;
    },
    handleEditDone: function handleEditDone() {
      var _this2 = this;

      this.$http.post('/tag/edit', {
        id: this.editForm.id,
        name: this.editForm.name
      }).then(function () {
        _this2.list[_this2.editForm.index].name = _this2.editForm.name;
        _this2.showEditorModal = false;
        _this2.$message.success('操作成功');
      }, function (err) {
        _this2.$message.error('操作失败');
        console.log(err);
      });
    },
    handleCreateDone: function handleCreateDone() {
      var _this3 = this;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var tag = _step2.value;

          if (tag.name === this.createForm.name) {
            this.$message({
              message: '标签已存在',
              type: 'warning'
            });
            return;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.$http.post('/tag/create', {
        name: this.createForm.name,
        model: this.modelFormat(this.createForm.model)
      }).then(function (data) {
        _this3.list.push({
          id: data,
          name: _this3.createForm.name,
          model: _this3.modelFormat(_this3.createForm.model)
        });
        _this3.showCreateModal = false;
        _this3.$message.success('操作成功');
        _this3.createForm = {
          name: '',
          model: ''
        };
      }, function (err) {
        _this3.$message.error('操作失败');
        console.log(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-6572ce94","hasScoped":true}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/views/bangumi/tag.vue
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
            [_vm._v("创建标签")]
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
            attrs: { prop: "id", sortable: "", width: "100", label: "索引" }
          }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "name", label: "名称" } }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "model", label: "类型" } }),
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
          staticClass: "tag-editor-modal",
          attrs: { "header-text": "标签编辑" },
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
                "el-form-item",
                { attrs: { label: "名称", "label-width": "60px" } },
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
        "v-modal",
        {
          staticClass: "tag-creator-modal",
          attrs: { "header-text": "创建标签" },
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
                "el-form-item",
                { attrs: { label: "类型", "label-width": "60px" } },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择" },
                      model: {
                        value: _vm.createForm.model,
                        callback: function($$v) {
                          _vm.createForm.model = $$v
                        },
                        expression: "createForm.model"
                      }
                    },
                    _vm._l(_vm.models, function(model) {
                      return _c("el-option", {
                        key: model.id,
                        attrs: { value: model.name }
                      })
                    })
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "名称", "label-width": "60px" } },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
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
              "page-sizes": [20, 50, 100],
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
/* harmony default export */ var bangumi_tag = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6572ce94", esExports)
  }
}
// CONCATENATED MODULE: ./frontend/views/bangumi/tag.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(116)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6572ce94"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  tag,
  bangumi_tag,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "frontend/views/bangumi/tag.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tag.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6572ce94", Component.options)
  } else {
    hotAPI.reload("data-v-6572ce94", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var views_bangumi_tag = __webpack_exports__["default"] = (Component.exports);


/***/ })

});