webpackJsonp([8],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("2274cf68", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b9e0b16\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":[\"/Users/yuistack/Documents/Sites/riuir/admin/frontend/assets/css/variables.scss\",\"/Users/yuistack/Documents/Sites/riuir/admin/frontend/assets/css/mixins.scss\"]}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./video.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b9e0b16\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":[\"/Users/yuistack/Documents/Sites/riuir/admin/frontend/assets/css/variables.scss\",\"/Users/yuistack/Documents/Sites/riuir/admin/frontend/assets/css/mixins.scss\"]}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./video.vue");
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

exports = module.exports = __webpack_require__(106)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./frontend/views/bangumi/video.vue
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var video = ({
  name: 'v-page-bangumi-video',
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0b9e0b16","hasScoped":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./frontend/views/bangumi/video.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("bangumi video")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var bangumi_video = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0b9e0b16", esExports)
  }
}
// CONCATENATED MODULE: ./frontend/views/bangumi/video.vue
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
var __vue_scopeId__ = "data-v-0b9e0b16"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  video,
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
  var hotAPI = require("vue-hot-reload-api")
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