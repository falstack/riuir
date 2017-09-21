webpackJsonp([1],{

/***/ 115:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_moment@2.18.1@moment/locale/zh-cn.js
var zh_cn = __webpack_require__(19);
var zh_cn_default = /*#__PURE__*/__webpack_require__.n(zh_cn);

// EXTERNAL MODULE: ./node_modules/_vue@2.4.4@vue/dist/vue.common.js
var vue_common = __webpack_require__(2);
var vue_common_default = /*#__PURE__*/__webpack_require__.n(vue_common);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/components/layouts/Sidebar.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Sidebar = ({
  name: 'v-sideBar',
  components: {},
  props: ['collapse'],
  computed: {},
  data: function data() {
    return {
      defaultActive: ''
    };
  },
  created: function created() {},

  methods: {},
  mounted: function mounted() {
    this.defaultActive = this.$route.path;
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-2ed21d08","hasScoped":true}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/components/layouts/Sidebar.vue
var Sidebar_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-menu",
    {
      staticClass: "sidebar",
      attrs: {
        theme: "dark",
        collapse: _vm.collapse,
        "default-active": _vm.defaultActive,
        router: true
      }
    },
    [
      _c("el-menu-item", { attrs: { index: "/dashboard" } }, [
        _c("i", { staticClass: "el-icon-menu" }),
        _vm._v(" "),
        _c("span", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("首页")])
      ]),
      _vm._v(" "),
      _c(
        "el-submenu",
        { attrs: { index: "3" } },
        [
          _c("template", { attrs: { slot: "title" }, slot: "title" }, [
            _c("i", { staticClass: "el-icon-star-on" }),
            _vm._v(" "),
            _c("span", { attrs: { slot: "title" }, slot: "title" }, [
              _vm._v("番剧")
            ])
          ]),
          _vm._v(" "),
          _c(
            "el-menu-item-group",
            { attrs: { title: "番剧" } },
            [
              _c("el-menu-item", { attrs: { index: "/bangumi/list" } }, [
                _vm._v("番剧列表")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-menu-item-group",
            { attrs: { title: "标签" } },
            [
              _c("el-menu-item", { attrs: { index: "/bangumi/tag" } }, [
                _vm._v("标签列表")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-menu-item-group",
            { attrs: { title: "视频" } },
            [
              _c("el-menu-item", { attrs: { index: "/bangumi/video" } }, [
                _vm._v("视频列表")
              ])
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
Sidebar_render._withStripped = true
var esExports = { render: Sidebar_render, staticRenderFns: staticRenderFns }
/* harmony default export */ var layouts_Sidebar = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2ed21d08", esExports)
  }
}
// CONCATENATED MODULE: ./frontend/components/layouts/Sidebar.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(42)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2ed21d08"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Sidebar,
  layouts_Sidebar,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "frontend/components/layouts/Sidebar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Sidebar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ed21d08", Component.options)
  } else {
    hotAPI.reload("data-v-2ed21d08", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_layouts_Sidebar = (Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/components/layouts/Header.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Header = ({
  name: 'v-header',
  components: {},
  props: ['collapse'],
  watch: {
    '$route': function $route(router) {
      this.breadcrumb = router.name;
    }
  },
  computed: {},
  data: function data() {
    return {
      breadcrumb: this.$route.name
    };
  },
  created: function created() {},

  methods: {
    toggleCollapse: function toggleCollapse() {
      this.$emit('update:collapse', !this.collapse);
    },
    logout: function logout() {
      this.$http.post('/auth/logout').then(function () {
        return window.location = '/';
      });
    }
  },
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-0c1017c6","hasScoped":true}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/components/layouts/Header.vue
var Header_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-menu",
    {
      staticClass: "header",
      class: { "header-collapse": _vm.collapse },
      attrs: { mode: "horizontal" }
    },
    [
      _c("el-menu-item", { attrs: { index: "0" } }, [
        _c("button", {
          staticClass: "collapse-btn",
          class: [
            _vm.collapse ? "el-icon-d-arrow-right" : "el-icon-d-arrow-left"
          ],
          on: { click: _vm.toggleCollapse }
        })
      ]),
      _vm._v(" "),
      _c("span", {
        staticClass: "breadcrumb",
        domProps: { textContent: _vm._s(_vm.breadcrumb) }
      }),
      _vm._v(" "),
      _c(
        "el-submenu",
        { staticClass: "user-panel", attrs: { index: "9" } },
        [
          _c("template", { attrs: { slot: "title" }, slot: "title" }, [
            _c("img", {
              staticClass: "avatar",
              attrs: { src: __webpack_require__(44), alt: "avatar" }
            })
          ]),
          _vm._v(" "),
          _c(
            "el-menu-item",
            { attrs: { index: "9-1" }, on: { click: _vm.logout } },
            [_vm._v("退出")]
          )
        ],
        2
      )
    ],
    1
  )
}
var Header_staticRenderFns = []
Header_render._withStripped = true
var Header_esExports = { render: Header_render, staticRenderFns: Header_staticRenderFns }
/* harmony default export */ var layouts_Header = (Header_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0c1017c6", Header_esExports)
  }
}
// CONCATENATED MODULE: ./frontend/components/layouts/Header.vue
var Header_disposed = false
function Header_injectStyle (ssrContext) {
  if (Header_disposed) return
  __webpack_require__(43)
}
var Header_normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var Header___vue_styles__ = Header_injectStyle
/* scopeId */
var Header___vue_scopeId__ = "data-v-0c1017c6"
/* moduleIdentifier (server only) */
var Header___vue_module_identifier__ = null
var Header_Component = Header_normalizeComponent(
  Header,
  layouts_Header,
  Header___vue_styles__,
  Header___vue_scopeId__,
  Header___vue_module_identifier__
)
Header_Component.options.__file = "frontend/components/layouts/Header.vue"
if (Header_Component.esModule && Object.keys(Header_Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Header_Component.options.functional) {console.error("[vue-loader] Header.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c1017c6", Header_Component.options)
  } else {
    hotAPI.reload("data-v-0c1017c6", Header_Component.options)
  }
  module.hot.dispose(function (data) {
    Header_disposed = true
  })
})()}

/* harmony default export */ var components_layouts_Header = (Header_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/app.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var app = ({
  name: 'v-index',
  components: {
    vHeader: components_layouts_Header, vSideBar: components_layouts_Sidebar
  },
  props: {},
  watch: {},
  computed: {},
  data: function data() {
    return {
      isCollapse: false
    };
  },

  methods: {},
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-ed47791c","hasScoped":false}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/app.vue
var app_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "__orz" } },
    [
      _c("v-header", {
        attrs: { collapse: _vm.isCollapse },
        on: {
          "update:collapse": function($event) {
            _vm.isCollapse = $event
          }
        }
      }),
      _vm._v(" "),
      _c("v-side-bar", { attrs: { collapse: _vm.isCollapse } }),
      _vm._v(" "),
      _c("router-view", {
        staticClass: "view",
        class: { "view-collapse": _vm.isCollapse }
      })
    ],
    1
  )
}
var app_staticRenderFns = []
app_render._withStripped = true
var app_esExports = { render: app_render, staticRenderFns: app_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_frontend_app = (app_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-ed47791c", app_esExports)
  }
}
// CONCATENATED MODULE: ./frontend/app.vue
var app_disposed = false
function app_injectStyle (ssrContext) {
  if (app_disposed) return
  __webpack_require__(40)
}
var app_normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var app___vue_styles__ = app_injectStyle
/* scopeId */
var app___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var app___vue_module_identifier__ = null
var app_Component = app_normalizeComponent(
  app,
  selectortype_template_index_0_frontend_app,
  app___vue_styles__,
  app___vue_scopeId__,
  app___vue_module_identifier__
)
app_Component.options.__file = "frontend/app.vue"
if (app_Component.esModule && Object.keys(app_Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (app_Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ed47791c", app_Component.options)
  } else {
    hotAPI.reload("data-v-ed47791c", app_Component.options)
  }
  module.hot.dispose(function (data) {
    app_disposed = true
  })
})()}

/* harmony default export */ var frontend_app = (app_Component.exports);

// EXTERNAL MODULE: ./node_modules/_vue-router@2.7.0@vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__(20);

// CONCATENATED MODULE: ./frontend/router/index.js



vue_common_default.a.use(vue_router_esm["default"]);

/* harmony default export */ var router = (new vue_router_esm["default"]({
  mode: 'hash',
  scrollBehavior: function scrollBehavior() {
    return { y: 0 };
  },
  routes: [{
    path: '/',
    redirect: '/dashboard'
  }, {
    path: '/dashboard',
    name: '首页',
    component: __webpack_require__(45).default
  }, {
    path: '/bangumi/list',
    name: '番剧列表',
    component: __webpack_require__(47).default
  }, {
    path: '/bangumi/tag',
    name: '番剧标签',
    component: __webpack_require__(50).default
  }, {
    path: '/bangumi/video',
    name: '番剧视频',
    component: __webpack_require__(52).default
  }]
}));
// EXTERNAL MODULE: ./node_modules/_vuex@2.4.0@vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(21);

// CONCATENATED MODULE: ./frontend/store/index.js



vue_common_default.a.use(vuex_esm["default"]);

/* harmony default export */ var store = (new vuex_esm["default"].Store({
  state: {
    login: null
  },

  mutations: {
    SET_LOGIN: function SET_LOGIN(state, _ref) {
      var bool = _ref.bool;

      state.login = bool;
    }
  },

  actions: {
    setLogin: function setLogin(_ref2, _ref3) {
      var commit = _ref2.commit;
      var bool = _ref3.bool;

      commit('SET_LOGIN', { bool: bool });
    }
  },

  getters: {
    isLogin: function isLogin(state) {
      return state.login;
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/_axios@0.16.2@axios/index.js
var _axios_0_16_2_axios = __webpack_require__(55);
var _axios_0_16_2_axios_default = /*#__PURE__*/__webpack_require__.n(_axios_0_16_2_axios);

// CONCATENATED MODULE: ./frontend/utils/api.js


var http = _axios_0_16_2_axios_default.a.create({
  headers: {
    'Accept': 'application/json',
    'X-CSRF-TOKEN': document.getElementById('_csrf') && document.getElementById('_csrf').getAttribute('content')
  },
  timeout: 10000
});

http.interceptors.request.use(function (config) {
  return config;
});

http.interceptors.response.use(function (res) {
  // Do something with response data
  return res && res.data;
}, function (err) {
  return Promise.reject(err.response.data);
});

/* harmony default export */ var api = (http);
// CONCATENATED MODULE: ./frontend/utils/helpers.js


var Helpers = {};

Helpers.install = function (Vue, options) {
  Vue.prototype.$http = api;
};

/* harmony default export */ var helpers = (Helpers);
// EXTERNAL MODULE: ./node_modules/_element-ui@1.4.4@element-ui/lib/element-ui.common.js
var element_ui_common = __webpack_require__(74);
var element_ui_common_default = /*#__PURE__*/__webpack_require__.n(element_ui_common);

// EXTERNAL MODULE: ./node_modules/_moment@2.18.1@moment/moment.js
var moment = __webpack_require__(9);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/components/modal.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var modal = ({
  name: 'v-modal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    close: {
      type: Boolean,
      default: true
    },
    header: {
      type: Boolean,
      default: true
    },
    footer: {
      type: Boolean,
      default: true
    },
    submitText: {
      type: String,
      default: '确认'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    headerText: {
      type: String,
      default: '标题'
    }
  },
  watch: {
    toggle: function toggle(val) {
      this.$emit('input', val);
    },
    value: function value(val) {
      this.toggle = val;
    }
  },
  data: function data() {
    return {
      toggle: this.value
    };
  },

  methods: {
    handleClose: function handleClose() {
      this.toggle = false;
    },
    handleSubmit: function handleSubmit() {
      this.$emit('submit');
    },
    handleCancel: function handleCancel() {
      this.$emit('cancel');
      this.handleClose();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-42a5a873","hasScoped":false}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/components/modal.vue
var modal_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "modal" } }, [
    _vm.toggle
      ? _c("section", { staticClass: "v-modal-wrap" }, [
          _c("div", {
            staticClass: "v-modal-mask",
            on: {
              click: function($event) {
                $event.stopPropagation()
                $event.preventDefault()
                _vm.handleClose($event)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "v-modal",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  $event.preventDefault()
                }
              }
            },
            [
              _vm.header
                ? _c(
                    "header",
                    [
                      _vm._t("header", [
                        _c("h4", {
                          domProps: { textContent: _vm._s(_vm.headerText) }
                        }),
                        _vm._v(" "),
                        _vm.close
                          ? _c(
                              "a",
                              {
                                staticClass: "close",
                                on: { click: _vm.handleClose }
                              },
                              [_vm._v("×")]
                            )
                          : _vm._e()
                      ])
                    ],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("main", [_vm._t("default")], 2),
              _vm._v(" "),
              _vm.footer
                ? _c(
                    "footer",
                    [
                      _vm._t("footer", [
                        _c("button", {
                          staticClass: "submit",
                          domProps: { textContent: _vm._s(_vm.submitText) },
                          on: { click: _vm.handleSubmit }
                        }),
                        _vm._v(" "),
                        _c("button", {
                          staticClass: "cancel",
                          domProps: { textContent: _vm._s(_vm.cancelText) },
                          on: { click: _vm.handleCancel }
                        })
                      ])
                    ],
                    2
                  )
                : _vm._e()
            ]
          )
        ])
      : _vm._e()
  ])
}
var modal_staticRenderFns = []
modal_render._withStripped = true
var modal_esExports = { render: modal_render, staticRenderFns: modal_staticRenderFns }
/* harmony default export */ var components_modal = (modal_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-42a5a873", modal_esExports)
  }
}
// CONCATENATED MODULE: ./frontend/components/modal.vue
var modal_disposed = false
function modal_injectStyle (ssrContext) {
  if (modal_disposed) return
  __webpack_require__(115)
}
var modal_normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var modal___vue_styles__ = modal_injectStyle
/* scopeId */
var modal___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var modal___vue_module_identifier__ = null
var modal_Component = modal_normalizeComponent(
  modal,
  components_modal,
  modal___vue_styles__,
  modal___vue_scopeId__,
  modal___vue_module_identifier__
)
modal_Component.options.__file = "frontend/components/modal.vue"
if (modal_Component.esModule && Object.keys(modal_Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (modal_Component.options.functional) {console.error("[vue-loader] modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42a5a873", modal_Component.options)
  } else {
    hotAPI.reload("data-v-42a5a873", modal_Component.options)
  }
  module.hot.dispose(function (data) {
    modal_disposed = true
  })
})()}

/* harmony default export */ var frontend_components_modal = (modal_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/components/toggle.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var toggle = ({
  name: 'v-toggle',
  props: ['value'],
  methods: {
    handleToggle: function handleToggle() {
      this.$emit('input', !this.value);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-3800bffe","hasScoped":true}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/components/toggle.vue
var toggle_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vue-pwa-toggle" },
    [
      _vm._t("default"),
      _vm._v(" "),
      _c("div", {
        staticClass: "toggle-btn",
        class: { active: _vm.value },
        on: { click: _vm.handleToggle }
      })
    ],
    2
  )
}
var toggle_staticRenderFns = []
toggle_render._withStripped = true
var toggle_esExports = { render: toggle_render, staticRenderFns: toggle_staticRenderFns }
/* harmony default export */ var components_toggle = (toggle_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3800bffe", toggle_esExports)
  }
}
// CONCATENATED MODULE: ./frontend/components/toggle.vue
var toggle_disposed = false
function toggle_injectStyle (ssrContext) {
  if (toggle_disposed) return
  __webpack_require__(132)
}
var toggle_normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var toggle___vue_styles__ = toggle_injectStyle
/* scopeId */
var toggle___vue_scopeId__ = "data-v-3800bffe"
/* moduleIdentifier (server only) */
var toggle___vue_module_identifier__ = null
var toggle_Component = toggle_normalizeComponent(
  toggle,
  components_toggle,
  toggle___vue_styles__,
  toggle___vue_scopeId__,
  toggle___vue_module_identifier__
)
toggle_Component.options.__file = "frontend/components/toggle.vue"
if (toggle_Component.esModule && Object.keys(toggle_Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (toggle_Component.options.functional) {console.error("[vue-loader] toggle.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3800bffe", toggle_Component.options)
  } else {
    hotAPI.reload("data-v-3800bffe", toggle_Component.options)
  }
  module.hot.dispose(function (data) {
    toggle_disposed = true
  })
})()}

/* harmony default export */ var frontend_components_toggle = (toggle_Component.exports);

// CONCATENATED MODULE: ./frontend/entry.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return entry_app; });











vue_common_default.a.use(__webpack_require__(116), {
  moment: moment_default.a
});
vue_common_default.a.use(element_ui_common_default.a);
vue_common_default.a.use(helpers);
vue_common_default.a.component(frontend_components_modal.name, frontend_components_modal);
vue_common_default.a.component(frontend_components_toggle.name, frontend_components_toggle);

var entry_app = new vue_common_default.a({
  router: router,
  store: store,
  render: function render(h) {
    return h(frontend_app);
  }
}).$mount('#app');

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/views/dashboard.vue
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var dashboard = ({
  name: 'v-page-index',
  components: {},
  props: {},
  watch: {},
  computed: {},
  data: function data() {
    return {};
  },
  created: function created() {},

  methods: {},
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-270a7b04","hasScoped":true}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/views/dashboard.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("h1", [_vm._v("dashboard page")])])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_dashboard = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-270a7b04", esExports)
  }
}
// CONCATENATED MODULE: ./frontend/views/dashboard.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(46)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-270a7b04"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  dashboard,
  views_dashboard,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "frontend/views/dashboard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-270a7b04", Component.options)
  } else {
    hotAPI.reload("data-v-270a7b04", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var frontend_views_dashboard = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/views/bangumi/list.vue
var list = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-6d7951d8","hasScoped":true}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/views/bangumi/list.vue
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
              attrs: { type: "primary", icon: "plus", size: "large" },
              on: {
                click: function($event) {
                  _vm.showCreateModal = true
                }
              }
            },
            [_vm._v("创建番剧")]
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
          attrs: { data: _vm.filter, border: "", "highlight-current-row": "" }
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
                            _c("el-form-item", { attrs: { label: "别名" } }, [
                              _c("span", {
                                domProps: {
                                  textContent: _vm._s(props.row.alias)
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
                            _c("el-form-item", { attrs: { label: "横幅" } }, [
                              _c("span", {
                                domProps: {
                                  textContent: _vm._s(props.row.banner)
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("el-form-item", { attrs: { label: "头像" } }, [
                              _c("span", {
                                domProps: {
                                  textContent: _vm._s(props.row.avatar)
                                }
                              })
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        props.row.tags.length
                          ? _c(
                              "div",
                              [
                                _c(
                                  "el-form-item",
                                  { attrs: { label: "标签" } },
                                  _vm._l(props.row.tags, function(tag) {
                                    return _c("el-tag", {
                                      key: tag.id,
                                      staticStyle: { "margin-right": "10px" },
                                      attrs: { type: "gray" },
                                      domProps: {
                                        textContent: _vm._s(tag.name)
                                      }
                                    })
                                  })
                                )
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "简介" } }, [
                          _c("span", {
                            domProps: { innerHTML: _vm._s(props.row.summary) }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("el-form-item", { attrs: { label: "关注人数" } }, [
                              _c("span", [
                                _vm._v(
                                  _vm._s(props.row.like ? props.row.like : 0)
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("el-form-item", { attrs: { label: "总评分数" } }, [
                              _c("span", [
                                _vm._v(
                                  _vm._s(props.row.score ? props.row.score : 0)
                                )
                              ])
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
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "id", sortable: "", label: "索引" }
          }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "name", label: "番名" } }),
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
                        attrs: { size: "small", type: "primary", icon: "edit" },
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
                          icon: "delete",
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
          staticClass: "bangumi-editor-modal",
          attrs: { "header-text": "编辑番剧" },
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
                        { attrs: { label: "番名", "label-width": "60px" } },
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
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 16 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "别名", "label-width": "60px" } },
                        [
                          _c("el-input", {
                            attrs: { "auto-complete": "off" },
                            model: {
                              value: _vm.editForm.alias,
                              callback: function($$v) {
                                _vm.editForm.alias = $$v
                              },
                              expression: "editForm.alias"
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
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { span: 8 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "连载", "label-width": "60px" } },
                        [
                          _c(
                            "el-select",
                            {
                              staticStyle: { width: "100%" },
                              attrs: { placeholder: "请选择" },
                              model: {
                                value: _vm.editForm.released_at,
                                callback: function($$v) {
                                  _vm.editForm.released_at = $$v
                                },
                                expression: "editForm.released_at"
                              }
                            },
                            _vm._l(_vm.release_weekly, function(item) {
                              return _c("el-option", {
                                key: item.id,
                                attrs: { label: item.name, value: item.id }
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
                        { attrs: { label: "视频", "label-width": "60px" } },
                        [
                          _c("el-input", {
                            attrs: {
                              placeholder: "最新视频id",
                              "auto-complete": "off"
                            },
                            model: {
                              value: _vm.editForm.released_video_id,
                              callback: function($$v) {
                                _vm.editForm.released_video_id = $$v
                              },
                              expression: "editForm.released_video_id"
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
                { attrs: { label: "标签", "label-width": "60px" } },
                [
                  _c(
                    "el-select",
                    {
                      staticStyle: { width: "100%" },
                      attrs: { multiple: "", placeholder: "请选择" },
                      model: {
                        value: _vm.editForm.tags,
                        callback: function($$v) {
                          _vm.editForm.tags = $$v
                        },
                        expression: "editForm.tags"
                      }
                    },
                    _vm._l(_vm.tags, function(item) {
                      return _c("el-option", {
                        key: item.id,
                        attrs: { label: item.name, value: item }
                      })
                    })
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { span: 12 } },
                    [
                      _c(
                        "el-col",
                        { attrs: { span: 21 } },
                        [
                          _c(
                            "el-form-item",
                            { attrs: { label: "头像", "label-width": "60px" } },
                            [
                              _c("el-input", {
                                attrs: { "auto-complete": "off" },
                                model: {
                                  value: _vm.editForm.avatar,
                                  callback: function($$v) {
                                    _vm.editForm.avatar = $$v
                                  },
                                  expression: "editForm.avatar"
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
                        { attrs: { span: 2, offset: 1 } },
                        [
                          _c(
                            "el-form-item",
                            [
                              _c(
                                "el-upload",
                                {
                                  attrs: {
                                    action: "http://up.qiniu.com",
                                    data: _vm.uploadHeaders,
                                    "show-file-list": false,
                                    "on-success": _vm.handleEditAvatarSuccess,
                                    "before-upload": _vm.beforeUpload
                                  }
                                },
                                [_c("i", { staticClass: "el-icon-plus" })]
                              )
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
                    "el-col",
                    { attrs: { span: 12 } },
                    [
                      _c(
                        "el-col",
                        { attrs: { span: 21 } },
                        [
                          _c(
                            "el-form-item",
                            { attrs: { label: "横幅", "label-width": "60px" } },
                            [
                              _c("el-input", {
                                attrs: { "auto-complete": "off" },
                                model: {
                                  value: _vm.editForm.banner,
                                  callback: function($$v) {
                                    _vm.editForm.banner = $$v
                                  },
                                  expression: "editForm.banner"
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
                        { attrs: { span: 2, offset: 1 } },
                        [
                          _c(
                            "el-form-item",
                            [
                              _c(
                                "el-upload",
                                {
                                  attrs: {
                                    action: "http://up.qiniu.com",
                                    data: _vm.uploadHeaders,
                                    "show-file-list": false,
                                    "on-success": _vm.handleEditBannerSuccess,
                                    "before-upload": _vm.beforeUpload
                                  }
                                },
                                [_c("i", { staticClass: "el-icon-plus" })]
                              )
                            ],
                            1
                          )
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
                { attrs: { label: "季度", "label-width": "60px" } },
                [
                  _c("el-input", {
                    attrs: {
                      type: "textarea",
                      rows: 2,
                      placeholder: "请输入番剧季度信息，JSON格式，包含 part，time，name 字段"
                    },
                    model: {
                      value: _vm.editForm.season,
                      callback: function($$v) {
                        _vm.editForm.season = $$v
                      },
                      expression: "editForm.season"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "简介", "label-width": "60px" } },
                [
                  _c("el-input", {
                    attrs: {
                      type: "textarea",
                      rows: 4,
                      placeholder: "请输入番剧简介"
                    },
                    model: {
                      value: _vm.editForm.summary,
                      callback: function($$v) {
                        _vm.editForm.summary = $$v
                      },
                      expression: "editForm.summary"
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
          staticClass: "bangumi-create-modal",
          attrs: { "header-text": "创建番剧" },
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
                        { attrs: { label: "番名", "label-width": "60px" } },
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
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 16 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "别名", "label-width": "60px" } },
                        [
                          _c("el-input", {
                            attrs: { "auto-complete": "off" },
                            model: {
                              value: _vm.createForm.alias,
                              callback: function($$v) {
                                _vm.createForm.alias = $$v
                              },
                              expression: "createForm.alias"
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
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { span: 12 } },
                    [
                      _c(
                        "el-col",
                        { attrs: { span: 21 } },
                        [
                          _c(
                            "el-form-item",
                            { attrs: { label: "头像", "label-width": "60px" } },
                            [
                              _c("el-input", {
                                attrs: { "auto-complete": "off" },
                                model: {
                                  value: _vm.createForm.avatar,
                                  callback: function($$v) {
                                    _vm.createForm.avatar = $$v
                                  },
                                  expression: "createForm.avatar"
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
                        { attrs: { span: 2, offset: 1 } },
                        [
                          _c(
                            "el-form-item",
                            [
                              _c(
                                "el-upload",
                                {
                                  attrs: {
                                    action: "http://up.qiniu.com",
                                    data: _vm.uploadHeaders,
                                    "show-file-list": false,
                                    "on-success": _vm.handleCreateAvatarSuccess,
                                    "before-upload": _vm.beforeUpload
                                  }
                                },
                                [_c("i", { staticClass: "el-icon-plus" })]
                              )
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
                    "el-col",
                    { attrs: { span: 12 } },
                    [
                      _c(
                        "el-col",
                        { attrs: { span: 21 } },
                        [
                          _c(
                            "el-form-item",
                            { attrs: { label: "横幅", "label-width": "60px" } },
                            [
                              _c("el-input", {
                                attrs: { "auto-complete": "off" },
                                model: {
                                  value: _vm.createForm.banner,
                                  callback: function($$v) {
                                    _vm.createForm.banner = $$v
                                  },
                                  expression: "createForm.banner"
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
                        { attrs: { span: 2, offset: 1 } },
                        [
                          _c(
                            "el-form-item",
                            [
                              _c(
                                "el-upload",
                                {
                                  attrs: {
                                    action: "http://up.qiniu.com",
                                    data: _vm.uploadHeaders,
                                    "show-file-list": false,
                                    "on-success": _vm.handleCreateBannerSuccess,
                                    "before-upload": _vm.beforeUpload
                                  }
                                },
                                [_c("i", { staticClass: "el-icon-plus" })]
                              )
                            ],
                            1
                          )
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
                { attrs: { label: "简介", "label-width": "60px" } },
                [
                  _c("el-input", {
                    attrs: {
                      type: "textarea",
                      rows: 5,
                      placeholder: "请输入番剧简介"
                    },
                    model: {
                      value: _vm.createForm.summary,
                      callback: function($$v) {
                        _vm.createForm.summary = $$v
                      },
                      expression: "createForm.summary"
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
/* harmony default export */ var bangumi_list = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6d7951d8", esExports)
  }
}
// CONCATENATED MODULE: ./frontend/views/bangumi/list.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(48)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6d7951d8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  list["a" /* default */],
  bangumi_list,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "frontend/views/bangumi/list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d7951d8", Component.options)
  } else {
    hotAPI.reload("data-v-6d7951d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var views_bangumi_list = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 49:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-page-bangumi-list',
  computed: {
    filter: function filter() {
      var begin = (this.pagination.curPage - 1) * this.pagination.pageSize;
      return this.list.slice(begin, begin + this.pagination.pageSize);
    }
  },
  data: function data() {
    return {
      list: [],
      tags: [],
      pagination: {
        totalPage: 0,
        pageSize: 20,
        curPage: 1
      },
      showEditorModal: false,
      showCreateModal: false,
      dialogTitle: '',
      defaultSeason: '{"name": ["xx", "xx"], "part": [0, "xx", -1], "time": ["xxxx.xx", "xxxx.xx"]}',
      release_weekly: [{
        id: '0',
        name: '不连载'
      }, {
        id: '1',
        name: '周一'
      }, {
        id: '2',
        name: '周二'
      }, {
        id: '3',
        name: '周三'
      }, {
        id: '4',
        name: '周四'
      }, {
        id: '5',
        name: '周五'
      }, {
        id: '6',
        name: '周六'
      }, {
        id: '7',
        name: '周日'
      }],
      editForm: {
        name: '',
        avatar: '',
        released_at: '',
        released_video_id: '',
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
        token: ''
      },
      CDNPrefixp: 'https://cdn.riuir.com/',
      loading: true
    };
  },
  created: function created() {
    this.getBangumis();
  },

  methods: {
    getBangumis: function getBangumis() {
      var _this = this;

      this.$http.get('/bangumi/list').then(function (data) {
        _this.list = data.bangumis;
        _this.tags = data.tags;
        _this.uploadHeaders.token = data.uptoken;
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
      var tags = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = row.tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tag = _step.value;

          tags.push(tag.name);
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

      this.editForm = {
        index: index,
        id: row.id,
        name: row.name,
        banner: row.banner,
        avatar: row.avatar,
        released_at: row.released_at,
        released_video_id: row.released_video_id !== '0' ? row.released_video_id : '',
        summary: row.summary,
        season: row.season ? JSON.stringify(row.season) : this.defaultSeason,
        alias: row.alias,
        tags: tags
      };
      this.showEditorModal = true;
    },
    beforeUpload: function beforeUpload(file) {
      var isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
      var isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    handleEditAvatarSuccess: function handleEditAvatarSuccess(res, file) {
      this.editForm.avatar = '' + this.CDNPrefixp + res.key;
    },
    handleEditBannerSuccess: function handleEditBannerSuccess(res, file) {
      this.editForm.banner = '' + this.CDNPrefixp + res.key;
    },
    getTagIdByName: function getTagIdByName(name) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.tags[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var tag = _step2.value;

          if (tag.name === name) {
            return tag.id;
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
    },
    handleEditDone: function handleEditDone() {
      var _this2 = this;

      var tags = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.editForm.tags[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var tag = _step3.value;

          tags.push(tag.id ? tag.id : this.getTagIdByName(tag));
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      var season = this.editForm.season === this.defaultSeason ? '' : this.editForm.season;
      if (season) {
        try {
          var tempSeason = JSON.parse(season);
          var name = tempSeason.name;
          var part = tempSeason.part;
          var time = tempSeason.time;
          if (time.every(function (eif) {
            return (/^\d{4}\.\d{1,2}$/.test(eif)
            );
          }) && part.some(function (item) {
            return typeof item !== 'number';
          })) {
            delete tempSeason.name;
            delete tempSeason.part;
            season = JSON.stringify(tempSeason);
          } else {
            if (!name || !part || !time) {
              this.$message.error('season 缺少 key');
              return;
            }
            if (name.length !== part.length - 1 || part.length < 2) {
              this.$message.error('season 信息不完整');
              return;
            }
            if (part.some(function (item) {
              return typeof item !== 'number';
            })) {
              this.$message.error('season 的 part 必须是数字');
              return;
            }
            if (!part.every(function (item, index, arr) {
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
            if (time.every(function (eif) {
              return eif === 'xxxx.xx';
            })) {
              delete tempSeason.time;
              season = JSON.stringify(tempSeason);
            } else if (time.every(function (eif) {
              return !/^\d{4}\.\d{1,2}$/.test(eif);
            })) {
              this.$message.error('time 格式不正确');
              return;
            } else if (name.length !== time.length) {
              this.$message.error('time 数量不对');
              return;
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
        released_at: parseInt(this.editForm.released_at, 10),
        released_video_id: this.editForm.released_video_id ? parseInt(this.editForm.released_video_id, 10) : 0,
        avatar: this.editForm.avatar.replace(this.CDNPrefixp, ''),
        banner: this.editForm.banner.replace(this.CDNPrefixp, ''),
        alias: this.editForm.alias.split(/,|，/).join(','),
        season: season,
        summary: this.editForm.summary,
        tags: tags
      }).then(function () {
        var newTags = [];
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = _this2.tags[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _tag = _step4.value;
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = tags[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var item = _step5.value;

                if (item === _tag.id) {
                  newTags.push(_tag);
                }
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                  _iterator5.return();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        _this2.list[_this2.editForm.index].released_at = _this2.editForm.released_at;
        _this2.list[_this2.editForm.index].released_video_id = _this2.editForm.released_video_id;
        _this2.list[_this2.editForm.index].name = _this2.editForm.name;
        _this2.list[_this2.editForm.index].avatar = _this2.editForm.avatar;
        _this2.list[_this2.editForm.index].banner = _this2.editForm.banner;
        _this2.list[_this2.editForm.index].summary = _this2.editForm.summary;
        _this2.list[_this2.editForm.index].season = season;
        _this2.list[_this2.editForm.index].tags = newTags;
        _this2.list[_this2.editForm.index].alias = _this2.editForm.alias.split(/,|，/).join(',');
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
      this.$confirm('\u786E\u5B9A\u8981' + (isDeleted ? '恢复' : '删除') + '\u300A' + row.name + '\u300B\u5417?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this3.$http.post('/bangumi/delete', {
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
    handleCreateAvatarSuccess: function handleCreateAvatarSuccess(res, file) {
      this.createForm.avatar = '' + this.CDNPrefixp + res.key;
    },
    handleCreateBannerSuccess: function handleCreateBannerSuccess(res, file) {
      this.createForm.banner = '' + this.CDNPrefixp + res.key;
    },
    handleCreateDone: function handleCreateDone() {
      var _this4 = this;

      this.$http.post('/bangumi/create', {
        name: this.createForm.name,
        avatar: this.createForm.avatar.replace(this.CDNPrefixp, ''),
        banner: this.createForm.banner.replace(this.CDNPrefixp, ''),
        alias: this.createForm.alias.split(/,|，/).join(','),
        summary: this.createForm.summary
      }).then(function (data) {
        _this4.list.unshift({
          id: data,
          name: _this4.createForm.name,
          avatar: _this4.createForm.avatar,
          banner: _this4.createForm.banner,
          summary: _this4.createForm.summary,
          alias: _this4.createForm.alias.split(/,|，/).join(','),
          deleted_at: moment().format('YYYY-MM-DD H:m:s')
        });
        _this4.showCreateModal = false;
        _this4.$message.success('操作成功');
      }, function (err) {
        _this4.$message.error('操作失败');
        console.log(err);
      });
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),

/***/ 50:
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
        id: '0',
        name: '番剧'
      }],
      showEditorModal: false,
      showCreateModal: false,
      editForm: {
        index: '',
        name: '',
        id: '',
        model: ''
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
        name: row.name,
        model: row.model
      };
      this.showEditorModal = true;
    },
    handleEditDone: function handleEditDone() {
      var _this2 = this;

      this.$http.post('/tag/edit', {
        id: this.editForm.id,
        name: this.editForm.name,
        model: this.editForm.model
      }).then(function () {
        var index = _this2.editForm.index + (_this2.pagination.curPage - 1) * _this2.pagination.pageSize;
        _this2.list[index] = _this2.editForm;
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
              attrs: { type: "primary", icon: "plus", size: "large" },
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
          attrs: { data: _vm.filter, border: "", "highlight-current-row": "" }
        },
        [
          _c("el-table-column", {
            attrs: { prop: "id", sortable: "", label: "索引" }
          }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "name", label: "名称" } }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "类型" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.modelFormat(scope.row.model)) +
                        "\n      "
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "操作" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "el-button",
                      {
                        attrs: { type: "primary", size: "small", icon: "edit" },
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
  __webpack_require__(51)
}
var normalizeComponent = __webpack_require__(4)
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


/***/ }),

/***/ 51:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/views/bangumi/video.vue
var video = __webpack_require__(54);

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
              attrs: { type: "primary", icon: "plus", size: "large" },
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
          attrs: { data: _vm.filter, border: "", "highlight-current-row": "" }
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
                        attrs: { size: "small", type: "primary", icon: "edit" },
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
                          icon: "delete",
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
                                  disabled: !!item.deleted_at
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
              _c(
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
              ),
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
                      { attrs: { span: 17 } },
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
                    _vm.editForm.resource.video[720].src
                      ? _c(
                          "el-col",
                          { attrs: { span: 5, offset: 1 } },
                          [
                            _vm._v("\n            字幕："),
                            _c("v-toggle", {
                              model: {
                                value: _vm.editForm.resource.video[720].useLyc,
                                callback: function($$v) {
                                  _vm.editForm.resource.video[720].useLyc = $$v
                                },
                                expression:
                                  "editForm.resource.video[720].useLyc"
                              }
                            })
                          ],
                          1
                        )
                      : _vm._e()
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
                      { attrs: { span: 17 } },
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
                    _vm.editForm.resource.video[1080].src
                      ? _c(
                          "el-col",
                          { attrs: { span: 5, offset: 1 } },
                          [
                            _vm._v("\n            字幕："),
                            _c("v-toggle", {
                              model: {
                                value: _vm.editForm.resource.video[1080].useLyc,
                                callback: function($$v) {
                                  _vm.editForm.resource.video[1080].useLyc = $$v
                                },
                                expression:
                                  "editForm.resource.video[1080].useLyc"
                              }
                            })
                          ],
                          1
                        )
                      : _vm._e()
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
                                  disabled: !!item.deleted_at
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
  __webpack_require__(53)
}
var normalizeComponent = __webpack_require__(4)
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


/***/ }),

/***/ 53:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 54:
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
//
//
//
//

var defaultResource = {
  "video": {
    "720": {
      "useLyc": false,
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
        id: '',
        bangumi_id: '',
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
        if (!resource.video) {
          resource.video = {
            "720": {
              "useLyc": false,
              "src": ""
            },
            "1080": {
              "useLyc": false,
              "src": ""
            }
          };
        } else {
          if (!resource.video[720]) {
            resource.video[720] = def;
          } else {
            resource.video[720].src = this.CDNPrefixp + resource.video[720].src;
          }
          if (!resource.video[1080]) {
            resource.video[1080] = def;
          } else {
            resource.video[1080].src = this.CDNPrefixp + resource.video[1080].src;
          }
          if (!resource.lyric) {
            resource.lyric = {
              "zh": "",
              "en": ""
            };
          }
        }
      } else {
        resource = defaultResource;
      }
      this.editForm = {
        index: index + (this.pagination.curPage - 1) * this.pagination.pageSize,
        bname: row.bname,
        id: row.id,
        bangumi_id: row.bangumi_id,
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

      var resource = this.editForm.resource;
      var url = this.editForm.url.replace(this.CDNPrefixp, '');
      if (!resource.video[720].src && !resource.video[1080].src) {
        resource = '';
        url = this.editForm.poster.replace(this.CDNPrefixp, '').split('poster')[0] + this.editForm.part + '.mp4';
      } else {
        if (!resource.video[720].src) {
          delete resource.video[720];
        } else {
          resource.video[720].src = resource.video[720].src.replace(this.CDNPrefixp, '');
        }
        if (!resource.video[1080].src) {
          delete resource.video[1080];
        } else {
          resource.video[1080].src = resource.video[1080].src.replace(this.CDNPrefixp, '');
        }
      }
      this.$http.post('/video/edit', {
        id: this.editForm.id,
        name: this.editForm.name,
        bangumi_id: this.editForm.bangumi_id,
        poster: this.editForm.poster.replace(this.CDNPrefixp, ''),
        url: this.editForm.url.replace(this.CDNPrefixp, ''),
        part: this.editForm.part,
        resource: resource
      }).then(function () {
        if (resource) {
          if (resource.video) {
            resource.video = {
              "720": {
                "useLyc": false,
                "src": ""
              },
              "1080": {
                "useLyc": false,
                "src": ""
              }
            };
          } else {
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
          }
        } else {
          resource = defaultResource;
        }
        var index = _this2.editForm.index;
        _this2.list[index].name = _this2.editForm.name;
        _this2.list[index].bname = _this2.editForm.bname;
        _this2.list[index].bangumi_id = _this2.editForm.bangumi_id;
        _this2.list[index].url = _this2.editForm.url;
        _this2.list[index].part = _this2.editForm.part;
        _this2.list[index].poster = _this2.editForm.poster;
        _this2.list[index].resource = resource;
        _this2.showEditorModal = false;
        _this2.$message.success('操作成功');
      }, function () {
        _this2.$message.error('操作失败');
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ })

},[131]);