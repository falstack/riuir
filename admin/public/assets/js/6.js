webpackJsonp([6],{

/***/ 112:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(112)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/views/bangumi/list.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var list = ({
  name: 'v-page-bangumi-list',
  watch: {},
  computed: {},
  data: function data() {
    return {
      bangumis: [],
      tags: [],
      uptoken: '',
      loading: true,
      pagination: {
        total: 0,
        curPage: 1,
        pageSize: 20
      }
    };
  },
  created: function created() {
    this.getBangumis();
  },

  methods: {
    getBangumis: function getBangumis() {
      var _this = this;

      this.$http.get('/bangumi/list').then(function (res) {
        var data = res.data;
        _this.bangumis = data.bangumis;
        _this.tags = data.tags;
        _this.uptoken = data.uptoken;
        _this.loading = false;
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-6d7951d8","hasScoped":true}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/views/bangumi/list.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c(
        "el-table",
        {
          staticStyle: { width: "100%" },
          attrs: { data: _vm.bangumis, border: "" }
        },
        [
          _c("el-table-column", { attrs: { prop: "id", label: "序号" } }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "name", label: "名字" } })
        ],
        1
      ),
      _vm._v(" "),
      _c("el-pagination", {
        attrs: {
          "current-page": _vm.pagination.curPage,
          "page-sizes": [20, 50, 100],
          "page-size": _vm.pagination.pageSize,
          layout: "total, sizes, prev, pager, next, jumper",
          total: _vm.pagination.total
        }
      })
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
  __webpack_require__(44)
}
var normalizeComponent = __webpack_require__(6)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6d7951d8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  list,
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

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(113)("b0e01a96", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../node_modules/_vue-loader@13.0.5@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6d7951d8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../../node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
     var newContent = require("!!../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../node_modules/_vue-loader@13.0.5@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6d7951d8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../../node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});