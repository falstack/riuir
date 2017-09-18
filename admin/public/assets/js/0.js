webpackJsonp([0],{

/***/ 107:
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

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(41)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(108)("2274cf68", content, false);
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
  components: {},
  props: {},
  watch: {},
  computed: {},
  data: function data() {
    return {
      loading: true,
      videos: [],
      bangumis: [],
      editDialogFormVisible: false,
      createDialogFormVisible: false,
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

      this.$http.get('/bangumi/videos').then(function (res) {
        var data = res.data;
        _this.videos = data.videos;
        _this.bangumis = data.bangumis;
        _this.loading = false;
      });
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
      this.editDialogFormVisible = true;
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
        _this2.videos[_this2.editForm.index].name = _this2.editForm.name;
        _this2.videos[_this2.editForm.index].bname = _this2.editForm.bname;
        _this2.videos[_this2.editForm.index].bangumi_id = bangumi_id;
        _this2.videos[_this2.editForm.index].url = _this2.editForm.url;
        _this2.videos[_this2.editForm.index].part = _this2.editForm.part;
        _this2.videos[_this2.editForm.index].poster = _this2.editForm.poster;
        _this2.videos[_this2.editForm.index].resource = resource;
        _this2.editDialogFormVisible = false;
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
          _this3.videos[index].deleted_at = isDeleted ? null : moment().format('YYYY-MM-DD H:m:s');
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
      this.createDialogFormVisible = false;
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

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./frontend/views/bangumi/video.vue
var video = __webpack_require__(120);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0b9e0b16","hasScoped":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./frontend/views/bangumi/video.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "list"
    }
  }, [_c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.videos,
      "height": "660",
      "highlight-current-row": "",
      "stripe": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "expand"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_c('el-form', {
          attrs: {
            "label-position": "left",
            "inline": ""
          }
        }, [_c('div', [_c('el-form-item', {
          attrs: {
            "label": "视频 ID"
          }
        }, [_c('span', {
          domProps: {
            "textContent": _vm._s(props.row.id)
          }
        })]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "番剧 ID"
          }
        }, [_c('span', {
          domProps: {
            "innerHTML": _vm._s(props.row.bangumi_id)
          }
        })])], 1), _vm._v(" "), _c('div', [_c('el-form-item', {
          attrs: {
            "label": "海报"
          }
        }, [_c('span', {
          staticStyle: {
            "cursor": "pointer"
          },
          domProps: {
            "textContent": _vm._s(props.row.poster)
          },
          on: {
            "click": function($event) {
              _vm.preview(props.row.poster)
            }
          }
        })])], 1), _vm._v(" "), _c('div', [_c('el-form-item', {
          attrs: {
            "label": "播放量"
          }
        }, [_c('span', {
          domProps: {
            "textContent": _vm._s(props.row.count_played)
          }
        })]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "评论数"
          }
        }, [_c('span', {
          domProps: {
            "textContent": _vm._s(props.row.count_comment)
          }
        })])], 1), _vm._v(" "), _c('div', [_c('el-form-item', {
          attrs: {
            "label": "创建时间"
          }
        }, [_c('span', {
          domProps: {
            "textContent": _vm._s(props.row.created_at)
          }
        })]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "更新时间"
          }
        }, [_c('span', {
          domProps: {
            "textContent": _vm._s(props.row.updated_at)
          }
        })]), _vm._v(" "), (props.row.deleted_at) ? _c('el-form-item', {
          attrs: {
            "label": "删除时间"
          }
        }, [_c('span', {
          domProps: {
            "textContent": _vm._s(props.row.deleted_at)
          }
        })]) : _vm._e()], 1)])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "id",
      "sortable": "",
      "width": "100",
      "label": "索引"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "bname",
      "label": "番名"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "part",
      "width": "100",
      "label": "集数"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "sortable": "",
      "width": "110",
      "prop": "count_played",
      "label": "播放量"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "sortable": "",
      "width": "110",
      "prop": "count_comment",
      "label": "评论数"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "width": "200",
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleEditOpen(scope.$index, scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small",
            "type": scope.row.deleted_at ? 'warning' : 'danger'
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.$index, scope.row)
            }
          }
        }, [_vm._v(_vm._s(scope.row.deleted_at ? '恢复' : '删除'))])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "visible": _vm.editDialogFormVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.editDialogFormVisible = $event
      }
    }
  }, [_c('h3', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(("视频编辑：《" + _vm.dialogTitle + "》")))]), _vm._v(" "), _c('el-form', {
    attrs: {
      "model": _vm.editForm
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "番剧",
      "label-width": '85px'
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.editForm.bname),
      callback: function($$v) {
        _vm.editForm.bname = $$v
      },
      expression: "editForm.bname"
    }
  }, _vm._l((_vm.bangumis), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "value": item.name,
        "disabled": item.deleted_at
      }
    })
  }))], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "集数",
      "label-width": '85px'
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.part),
      callback: function($$v) {
        _vm.editForm.part = $$v
      },
      expression: "editForm.part"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 10
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "名称",
      "label-width": '85px'
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.name),
      callback: function($$v) {
        _vm.editForm.name = $$v
      },
      expression: "editForm.name"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "海报",
      "label-width": '85px'
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.poster),
      callback: function($$v) {
        _vm.editForm.poster = $$v
      },
      expression: "editForm.poster"
    }
  })], 1), _vm._v(" "), (_vm.editForm.url) ? _c('el-form-item', {
    attrs: {
      "label": "外链资源",
      "label-width": '85px'
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.url),
      callback: function($$v) {
        _vm.editForm.url = $$v
      },
      expression: "editForm.url"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "字幕",
      "label-width": '85px'
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.resource.lyric.zh),
      callback: function($$v) {
        _vm.editForm.resource.lyric.zh = $$v
      },
      expression: "editForm.resource.lyric.zh"
    }
  })], 1), _vm._v(" "), [_c('el-form-item', {
    attrs: {
      "label": "720P 资源",
      "label-width": '85px'
    }
  }, [_c('el-col', {
    attrs: {
      "span": 18
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.resource.video[720].src),
      callback: function($$v) {
        _vm.editForm.resource.video[720].src = $$v
      },
      expression: "editForm.resource.video[720].src"
    }
  })], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4,
      "offset": 1
    }
  }, [_vm._v("\n            字幕："), _c('el-switch', {
    staticStyle: {
      "float": "right",
      "margin-top": "7px"
    },
    attrs: {
      "on-text": "",
      "off-text": ""
    },
    model: {
      value: (_vm.editForm.resource.video[720].useLyc),
      callback: function($$v) {
        _vm.editForm.resource.video[720].useLyc = $$v
      },
      expression: "editForm.resource.video[720].useLyc"
    }
  })], 1)], 1)], _vm._v(" "), [_c('el-form-item', {
    attrs: {
      "label": "1080P 资源",
      "label-width": '85px'
    }
  }, [_c('el-col', {
    attrs: {
      "span": 18
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.resource.video[1080].src),
      callback: function($$v) {
        _vm.editForm.resource.video[1080].src = $$v
      },
      expression: "editForm.resource.video[1080].src"
    }
  })], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4,
      "offset": 1
    }
  }, [_vm._v("\n            字幕："), _c('el-switch', {
    staticStyle: {
      "float": "right",
      "margin-top": "7px"
    },
    attrs: {
      "on-text": "",
      "off-text": ""
    },
    model: {
      value: (_vm.editForm.resource.video[1080].useLyc),
      callback: function($$v) {
        _vm.editForm.resource.video[1080].useLyc = $$v
      },
      expression: "editForm.resource.video[1080].useLyc"
    }
  })], 1)], 1)]], 2), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.editDialogFormVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.handleEditDone
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "visible": _vm.createDialogFormVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.createDialogFormVisible = $event
      }
    }
  }, [_c('h3', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("新建视频")]), _vm._v(" "), _c('el-form', {
    attrs: {
      "model": _vm.createForm
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "番剧",
      "label-width": '85px'
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.createForm.bname),
      callback: function($$v) {
        _vm.createForm.bname = $$v
      },
      expression: "createForm.bname"
    }
  }, _vm._l((_vm.bangumis), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "value": item.name,
        "disabled": item.deleted_at
      }
    })
  }))], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "集数",
      "label-width": '85px'
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "1-n",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.createForm.part),
      callback: function($$v) {
        _vm.createForm.part = $$v
      },
      expression: "createForm.part"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "名称",
      "label-width": '85px'
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "${name}",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.createForm.resourceName),
      callback: function($$v) {
        _vm.createForm.resourceName = $$v
      },
      expression: "createForm.resourceName"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "画质",
      "label-width": '85px'
    }
  }, [_c('div', [_c('el-checkbox', {
    model: {
      value: (_vm.createForm.P720.show),
      callback: function($$v) {
        _vm.createForm.P720.show = $$v
      },
      expression: "createForm.P720.show"
    }
  }, [_vm._v("720P")]), _vm._v(" "), _c('el-checkbox', {
    model: {
      value: (_vm.createForm.P1080.show),
      callback: function($$v) {
        _vm.createForm.P1080.show = $$v
      },
      expression: "createForm.P1080.show"
    }
  }, [_vm._v("1080P")])], 1)]), _vm._v(" "), (_vm.createForm.P720.show) ? _c('el-row', [_c('el-form-item', {
    attrs: {
      "label": "720P 资源",
      "label-width": '85px'
    }
  }, [_c('el-col', {
    attrs: {
      "span": 18
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.createForm.P720.src),
      callback: function($$v) {
        _vm.createForm.P720.src = $$v
      },
      expression: "createForm.P720.src"
    }
  })], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4,
      "offset": 1
    }
  }, [_vm._v("\n            字幕："), _c('el-switch', {
    staticStyle: {
      "float": "right",
      "margin-top": "7px"
    },
    attrs: {
      "on-text": "",
      "off-text": ""
    },
    model: {
      value: (_vm.createForm.P720.useLyc),
      callback: function($$v) {
        _vm.createForm.P720.useLyc = $$v
      },
      expression: "createForm.P720.useLyc"
    }
  })], 1)], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.createForm.P1080.show) ? _c('el-row', [_c('el-form-item', {
    attrs: {
      "label": "1080P 资源",
      "label-width": '85px'
    }
  }, [_c('el-col', {
    attrs: {
      "span": 18
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.createForm.P1080.src),
      callback: function($$v) {
        _vm.createForm.P1080.src = $$v
      },
      expression: "createForm.P1080.src"
    }
  })], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4,
      "offset": 1
    }
  }, [_vm._v("\n            字幕："), _c('el-switch', {
    staticStyle: {
      "float": "right",
      "margin-top": "7px"
    },
    attrs: {
      "on-text": "",
      "off-text": ""
    },
    model: {
      value: (_vm.createForm.P1080.useLyc),
      callback: function($$v) {
        _vm.createForm.P1080.useLyc = $$v
      },
      expression: "createForm.P1080.useLyc"
    }
  })], 1)], 1)], 1) : _vm._e(), _vm._v(" "), (!_vm.createForm.P720.show && !_vm.createForm.P1080.show) ? _c('el-form-item', {
    attrs: {
      "label": "外链资源",
      "label-width": '85px'
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.createForm.url),
      callback: function($$v) {
        _vm.createForm.url = $$v
      },
      expression: "createForm.url"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "字幕",
      "label-width": '85px'
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.createForm.lyric.zh),
      callback: function($$v) {
        _vm.createForm.lyric.zh = $$v
      },
      expression: "createForm.lyric.zh"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "海报",
      "label-width": '85px'
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.createForm.poster),
      callback: function($$v) {
        _vm.createForm.poster = $$v
      },
      expression: "createForm.poster"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "名称",
      "label-width": '85px'
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "placeholder": "一行一个",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.createForm.name),
      callback: function($$v) {
        _vm.createForm.name = $$v
      },
      expression: "createForm.name"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": _vm.handleCreateCancel
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.handleCreateDone
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-button', {
    staticStyle: {
      "margin-top": "20px",
      "margin-right": "80px",
      "float": "right"
    },
    attrs: {
      "type": "primary",
      "size": "large"
    },
    on: {
      "click": function($event) {
        _vm.createDialogFormVisible = true
      }
    }
  }, [_vm._v("新建视频")])], 1)], 1)
}
var staticRenderFns = []
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


/***/ }),

/***/ 41:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })

});