webpackJsonp([3],{

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(66)
/* template */
var __vue_template__ = __webpack_require__(67)
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
Component.options.__file = "resources\\assets\\js\\CreateTimeLog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1def82d4", Component.options)
  } else {
    hotAPI.reload("data-v-1def82d4", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_goog_js__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        return {
            name: '',
            status: '',
            error: ''
        };
    },

    methods: {
        create: function create() {
            var vm = this;
            vm.status = 'saving';
            Object(__WEBPACK_IMPORTED_MODULE_0__lib_goog_js__["a" /* createSpreadsheet */])(vm.name).then(function (result) {
                vm.status = '';
                var spreadsheetId = result.spreadsheetId;
                vm.$router.push({ name: 'TimeLog', params: { sheetId: spreadsheetId } });
            }, function (response) {
                vm.error = Object(__WEBPACK_IMPORTED_MODULE_0__lib_goog_js__["c" /* getError */])(response);
            });
        }
    }
});

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-8 col-md-offset-2" }, [
        _c("div", { staticClass: "panel panel-default" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    _vm.create($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.name,
                        expression: "name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", autofocus: "", placeholder: "name" },
                    domProps: { value: _vm.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.name = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.status === ""
                  ? _c("input", {
                      staticClass: "btn btn-default",
                      attrs: { type: "submit", value: "Create new file" }
                    })
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _vm.status === "saving"
              ? _c("div", [
                  _c("h4", [_vm._v("Saving " + _vm._s(_vm.name) + "...")]),
                  _vm._v(" "),
                  _vm._m(1)
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.error
              ? _c("div", { staticClass: "card-panel red-text" }, [
                  _c("h4", [_vm._v("Error...")]),
                  _vm._v(" "),
                  _c("pre", [_c("code", [_vm._v(_vm._s(_vm.error))])]),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v(
                      "\n                            Refresh the page maybe?\n                        "
                    )
                  ])
                ])
              : _vm._e()
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("h3", [_vm._v("Create new time log")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "progress" }, [
      _c("div", { staticClass: "indeterminate" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1def82d4", module.exports)
  }
}

/***/ })

});