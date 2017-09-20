webpackJsonp([1],{

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

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(108)("027fbae3", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../node_modules/_vue-loader@13.0.5@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6d7951d8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../../node_modules/_sass-resources-loader@1.3.0@sass-resources-loader/lib/loader.js?{\"resources\":[\"/Users/yuistack/Documents/Sites/riuir/admin/frontend/assets/css/variables.scss\",\"/Users/yuistack/Documents/Sites/riuir/admin/frontend/assets/css/mixins.scss\"]}!../../../node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
     var newContent = require("!!../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../node_modules/_vue-loader@13.0.5@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6d7951d8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../../node_modules/_sass-resources-loader@1.3.0@sass-resources-loader/lib/loader.js?{\"resources\":[\"/Users/yuistack/Documents/Sites/riuir/admin/frontend/assets/css/variables.scss\",\"/Users/yuistack/Documents/Sites/riuir/admin/frontend/assets/css/mixins.scss\"]}!../../../node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(107)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 115:
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)))

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/views/bangumi/list.vue
var list = __webpack_require__(115);

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
              attrs: { type: "primary", size: "large" },
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
  __webpack_require__(113)
}
var normalizeComponent = __webpack_require__(9)
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