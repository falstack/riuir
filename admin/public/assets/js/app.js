webpackJsonp([5],{

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/moment/locale/zh-cn.js
var zh_cn = __webpack_require__(19);
var zh_cn_default = /*#__PURE__*/__webpack_require__.n(zh_cn);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.common.js
var vue_common = __webpack_require__(2);
var vue_common_default = /*#__PURE__*/__webpack_require__.n(vue_common);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./frontend/components/layouts/Sidebar.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  watch: {},
  computed: {},
  data: function data() {
    return {};
  },
  created: function created() {},

  methods: {},
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2ed21d08","hasScoped":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./frontend/components/layouts/Sidebar.vue
var Sidebar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-menu', {
    staticClass: "sidebar",
    attrs: {
      "theme": "dark",
      "collapse": _vm.collapse
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "0"
    }
  }, [_c('i', {
    staticClass: "el-icon-menu"
  }), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("首页")])]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "1"
    }
  }, [_c('i', {
    staticClass: "el-icon-picture"
  }), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("头图")])]), _vm._v(" "), _c('el-submenu', {
    attrs: {
      "index": "2"
    }
  }, [_c('template', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('i', {
    staticClass: "el-icon-star-on"
  }), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("番剧")])]), _vm._v(" "), _c('el-menu-item-group', {
    attrs: {
      "title": "番剧"
    }
  }, [_c('router-link', {
    attrs: {
      "to": "/bangumi/list"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "1-1"
    }
  }, [_vm._v("番剧列表")])], 1)], 1), _vm._v(" "), _c('el-menu-item-group', {
    attrs: {
      "title": "标签"
    }
  }, [_c('router-link', {
    attrs: {
      "to": "/bangumi/tag"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "1-2"
    }
  }, [_vm._v("标签列表")])], 1)], 1), _vm._v(" "), _c('el-menu-item-group', {
    attrs: {
      "title": "视频"
    }
  }, [_c('router-link', {
    attrs: {
      "to": "/bangumi/video"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "1-3"
    }
  }, [_vm._v("视频列表")])], 1)], 1)], 2), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "3"
    }
  }, [_c('i', {
    staticClass: "el-icon-share"
  }), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("用户")])]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "4"
    }
  }, [_c('i', {
    staticClass: "el-icon-date"
  }), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("统计")])]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "5"
    }
  }, [_c('i', {
    staticClass: "el-icon-setting"
  }), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("设置")])])], 1)
}
var staticRenderFns = []
Sidebar_render._withStripped = true
var esExports = { render: Sidebar_render, staticRenderFns: staticRenderFns }
/* harmony default export */ var layouts_Sidebar = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2ed21d08", esExports)
  }
}
// CONCATENATED MODULE: ./frontend/components/layouts/Sidebar.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(42)
}
var normalizeComponent = __webpack_require__(9)
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
  var hotAPI = require("vue-hot-reload-api")
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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./frontend/components/layouts/Header.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  watch: {},
  computed: {},
  data: function data() {
    return {};
  },
  created: function created() {},

  methods: {
    toggleCollapse: function toggleCollapse() {
      this.$emit('update:collapse', !this.collapse);
    },
    logout: function logout() {
      this.$http.post('/auth/logout').then(function () {
        return window.location.reload();
      });
    }
  },
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0c1017c6","hasScoped":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./frontend/components/layouts/Header.vue
var Header_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-menu', {
    staticClass: "header",
    class: {
      'header-collapse': _vm.collapse
    },
    attrs: {
      "mode": "horizontal"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "0"
    }
  }, [_c('button', {
    staticClass: "collapse-btn",
    class: [_vm.collapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'],
    on: {
      "click": _vm.toggleCollapse
    }
  })]), _vm._v(" "), _c('el-submenu', {
    staticClass: "user-panel",
    attrs: {
      "index": "9"
    }
  }, [_c('template', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("我")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "9-1"
    },
    on: {
      "click": _vm.logout
    }
  }, [_vm._v("退出")])], 2)], 1)
}
var Header_staticRenderFns = []
Header_render._withStripped = true
var Header_esExports = { render: Header_render, staticRenderFns: Header_staticRenderFns }
/* harmony default export */ var layouts_Header = (Header_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0c1017c6", Header_esExports)
  }
}
// CONCATENATED MODULE: ./frontend/components/layouts/Header.vue
var Header_disposed = false
function Header_injectStyle (ssrContext) {
  if (Header_disposed) return
  __webpack_require__(43)
}
var Header_normalizeComponent = __webpack_require__(9)
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
  var hotAPI = require("vue-hot-reload-api")
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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./frontend/app.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ed47791c","hasScoped":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./frontend/app.vue
var app_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "__orz"
    }
  }, [_c('v-header', {
    attrs: {
      "collapse": _vm.isCollapse
    },
    on: {
      "update:collapse": function($event) {
        _vm.isCollapse = $event
      }
    }
  }), _vm._v(" "), _c('v-side-bar', {
    attrs: {
      "collapse": _vm.isCollapse
    }
  }), _vm._v(" "), _c('router-view', {
    staticClass: "view",
    class: {
      'view-collapse': _vm.isCollapse
    }
  })], 1)
}
var app_staticRenderFns = []
app_render._withStripped = true
var app_esExports = { render: app_render, staticRenderFns: app_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_frontend_app = (app_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ed47791c", app_esExports)
  }
}
// CONCATENATED MODULE: ./frontend/app.vue
var app_disposed = false
function app_injectStyle (ssrContext) {
  if (app_disposed) return
  __webpack_require__(40)
}
var app_normalizeComponent = __webpack_require__(9)
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
  var hotAPI = require("vue-hot-reload-api")
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

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
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
    compoonent: function compoonent() {
      return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 118));
    }
  }, {
    path: '/bangumi/list',
    component: function component() {
      return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 119));
    }
  }, {
    path: '/bangumi/tag',
    component: function component() {
      return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 120));
    }
  }, {
    path: '/bangumi/video',
    component: function component() {
      return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 121));
    }
  }]
}));
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
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
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(44);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./frontend/utils/api.js


var http = axios_default.a.create({
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
  return res;
}, function (err) {
  // Do something with response error
  return Promise.reject(err.response.data);
});

/* harmony default export */ var api = (http);
// CONCATENATED MODULE: ./frontend/utils/helpers.js


var Helpers = {};

Helpers.install = function (Vue, options) {
  Vue.prototype.$http = api;
};

/* harmony default export */ var helpers = (Helpers);
// EXTERNAL MODULE: ./node_modules/element-ui/lib/element-ui.common.js
var element_ui_common = __webpack_require__(63);
var element_ui_common_default = /*#__PURE__*/__webpack_require__.n(element_ui_common);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(10);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// CONCATENATED MODULE: ./frontend/entry.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return entry_app; });









vue_common_default.a.use(__webpack_require__(104), {
  moment: moment_default.a
});
vue_common_default.a.use(element_ui_common_default.a);
vue_common_default.a.use(helpers);

var entry_app = new vue_common_default.a({
  router: router,
  store: store,
  render: function render(h) {
    return h(frontend_app);
  }
}).$mount('#app');

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

/***/ })

},[36]);