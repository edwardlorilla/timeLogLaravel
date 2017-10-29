webpackJsonp([2],{

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(61)
/* template */
var __vue_template__ = __webpack_require__(62)
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\ListFiles.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48abe8f4", Component.options)
  } else {
    hotAPI.reload("data-v-48abe8f4", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_appModel_js__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return __WEBPACK_IMPORTED_MODULE_0__lib_appModel_js__["a" /* default */];
    },

    computed: {
        empty: function empty() {
            return __WEBPACK_IMPORTED_MODULE_0__lib_appModel_js__["a" /* default */].files.length === 0 && __WEBPACK_IMPORTED_MODULE_0__lib_appModel_js__["a" /* default */].filesLoaded;
        }
    }
});

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-8 col-md-offset-2" }, [
        _c("div", { staticClass: "panel panel-default" }, [
          _c("div", { staticClass: "panel-heading" }, [
            _vm.filesLoaded && !_vm.empty
              ? _c("div", [_c("h4", [_vm._v("Your Sheets")])])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "list-group" },
            _vm._l(_vm.files, function(file) {
              return _c(
                "li",
                { staticClass: "list-group-item" },
                [
                  _c(
                    "router-link",
                    { attrs: { to: { path: "/time-log/" + file.id } } },
                    [
                      _c("a", [
                        _vm._v(
                          "\n                                " +
                            _vm._s(file.name) +
                            "\n                            "
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            })
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "panel-footer" },
            [
              _vm.empty
                ? _c("div", [
                    _c("h3", [_vm._v("No time sheets?")]),
                    _vm._v(" "),
                    _c(
                      "p",
                      [
                        _vm._v(
                          "I could not find any time logs in your account.\n                            "
                        ),
                        _c(
                          "router-link",
                          { attrs: { to: { path: "/create-time-log" } } },
                          [_vm._v("Create new time log")]
                        ),
                        _vm._v(
                          "\n                            .\n                        "
                        )
                      ],
                      1
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-info",
                  attrs: {
                    to: { path: "/create-time-log" },
                    title: "Create new time log"
                  }
                },
                [_c("i", { staticClass: "glyphicon glyphicon-plus-sign" })]
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-48abe8f4", module.exports)
  }
}

/***/ })

});