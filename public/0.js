webpackJsonp([0],{

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(63)
/* template */
var __vue_template__ = __webpack_require__(65)
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
Component.options.__file = "resources\\assets\\js\\TimeLog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f6f8d91c", Component.options)
  } else {
    hotAPI.reload("data-v-f6f8d91c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = convertDateToSheetsDateString;
/* harmony export (immutable) */ __webpack_exports__["b"] = getNow;
/* harmony export (immutable) */ __webpack_exports__["c"] = toDateInputStr;
/**
 * Collection of date related utilities
 */

/**
 * Given a string, attempts to parse it
 */
function convertDateToSheetsDateString(str) {
    var dateObject = new Date(str + 'Z');

    return dateObject.toISOString().substr(0, '2016-09-27T02:10:00'.length).replace(/T/, ' ').replace(/-/g, '/');
}

/**
 * returns current time as an <input type='datetime-local'/> value.
 */
function getNow() {
    return toDateInputStr(new Date());
}

/**
 * Given a Date object returns its string value that can be set on <input type='datetime-local'/>
 *
 * @see https://www.w3.org/TR/html-markup/input.datetime.html#input.datetime.attrs.value
 */
function toDateInputStr(date) {
    /* eslint prefer-template: 0 */
    return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate()) + 'T' + pad(date.getHours()) + ':' + pad(date.getMinutes()) + ':' + pad(date.getSeconds());
}

function pad(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getSpreadsheetIdFromComponentRoute;
function getSpreadsheetIdFromComponentRoute(component) {
    return component.$route.params.sheetId;
}

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_appModel_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_goog_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_dateUtils_js__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_getLastRecordsForComponent_js__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_getSpreadsheetIdFromComponentRoute_js__ = __webpack_require__(58);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// This is the heart of the application. This file may not be the prettiest.





/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            recordsState: 'loading',
            lastRecords: [],
            start: '',
            end: Object(__WEBPACK_IMPORTED_MODULE_2__lib_dateUtils_js__["b" /* getNow */])(),
            what: '',
            saveState: ''
        };
    },

    computed: {
        /**
         * Provides a Google Docs link to edit a spreadsheet
         */
        editLink: function editLink() {
            var sheetId = Object(__WEBPACK_IMPORTED_MODULE_4__lib_getSpreadsheetIdFromComponentRoute_js__["a" /* default */])(this);
            return 'https://docs.google.com/spreadsheets/d/' + sheetId + '/edit';
        }
    },
    mounted: function mounted() {

        Object(__WEBPACK_IMPORTED_MODULE_3__lib_getLastRecordsForComponent_js__["a" /* default */])(this).then(function () {
            __WEBPACK_IMPORTED_MODULE_0__lib_appModel_js__["a" /* default */].pageName = 'Loading data...';
            var sheetId = Object(__WEBPACK_IMPORTED_MODULE_4__lib_getSpreadsheetIdFromComponentRoute_js__["a" /* default */])(this);
            Object(__WEBPACK_IMPORTED_MODULE_1__lib_goog_js__["d" /* getSheetTitle */])(sheetId, function (title) {
                __WEBPACK_IMPORTED_MODULE_0__lib_appModel_js__["a" /* default */].pageName = title;
            });
        }.bind(this));
    },


    methods: {
        setData: function setData() {},
        refreshRecords: function refreshRecords() {
            Object(__WEBPACK_IMPORTED_MODULE_3__lib_getLastRecordsForComponent_js__["a" /* default */])(this);
        },
        logIt: function logIt() {
            var vm = this;
            this.saveState = 'saving';
            var start = Object(__WEBPACK_IMPORTED_MODULE_2__lib_dateUtils_js__["a" /* convertDateToSheetsDateString */])(vm.start);
            var end = Object(__WEBPACK_IMPORTED_MODULE_2__lib_dateUtils_js__["a" /* convertDateToSheetsDateString */])(vm.end);
            var spreadsheetId = Object(__WEBPACK_IMPORTED_MODULE_4__lib_getSpreadsheetIdFromComponentRoute_js__["a" /* default */])(vm);
            Object(__WEBPACK_IMPORTED_MODULE_1__lib_goog_js__["f" /* logTime */])(spreadsheetId, start, end, vm.what).then(function () {
                // TODO: This is not very reliable.
                vm.lastRecords.unshift([start, end, vm.what]);
                vm.start = vm.end;
                vm.end = Object(__WEBPACK_IMPORTED_MODULE_2__lib_dateUtils_js__["b" /* getNow */])();
                vm.what = '';
                vm.saveState = 'done';
                vm.error = '';
            }, function (response) {
                vm.saveState = 'error';
                vm.error = Object(__WEBPACK_IMPORTED_MODULE_1__lib_goog_js__["c" /* getError */])(response);
            });
        }
    }
});

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getLastRecordsForComponent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getSpreadsheetIdFromComponentRoute_js__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dateUtils_js__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goog_js__ = __webpack_require__(3);
/**
 * Attempts to load last records from the API, and updates component states accordingly
 */




function getLastRecordsForComponent(component) {
    // immediately before loading, switch to progress mode:
    component.recordsState = 'loading';

    var spreadsheetId = Object(__WEBPACK_IMPORTED_MODULE_0__getSpreadsheetIdFromComponentRoute_js__["a" /* default */])(component);

    return Object(__WEBPACK_IMPORTED_MODULE_2__goog_js__["b" /* fetchLastRecords */])(spreadsheetId).then(function (response) {
        // we've got our data!
        component.recordsState = 'loaded';

        var values = response.result.values || [];
        var lastRecords = values.reverse().slice(0, 100);

        component.lastRecords = lastRecords;
        var lastDate = getLastDate(lastRecords);
        if (lastDate) component.start = lastDate;else {
            component.start = Object(__WEBPACK_IMPORTED_MODULE_1__dateUtils_js__["b" /* getNow */])();
            component.end = Object(__WEBPACK_IMPORTED_MODULE_1__dateUtils_js__["b" /* getNow */])();
        }
    }, function (response) {
        console.error('failed to load range', response);
    });
}

function getLastDate(records) {
    if (records.length === 0) return '';

    var lastRecord = records[0];
    if (lastRecord.length < 2) return '';

    var lastEnd = lastRecord[1];

    if (!lastEnd) return '';

    var d = new Date(lastEnd);
    if (Number.isNaN(d.getDate())) return '';

    return Object(__WEBPACK_IMPORTED_MODULE_1__dateUtils_js__["c" /* toDateInputStr */])(d);
}

/***/ }),

/***/ 65:
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
                attrs: { novalidate: "" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    _vm.logIt($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "input-field" }, [
                  _c("label", { attrs: { for: "start" } }, [_vm._v("Start?")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.start,
                        expression: "start"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "start", type: "text", placeholder: "Start" },
                    domProps: { value: _vm.start },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.start = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-field" }, [
                  _c("label", { attrs: { for: "end" } }, [_vm._v("End?")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.end,
                        expression: "end"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      id: "end",
                      type: "text",
                      autofocus: "",
                      placeholder: "End"
                    },
                    domProps: { value: _vm.end },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.end = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-field" }, [
                  _c("label", { attrs: { for: "what" } }, [_vm._v("What?")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.what,
                        expression: "what"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "what", type: "text", placeholder: "What" },
                    domProps: { value: _vm.what },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.what = $event.target.value
                      }
                    }
                  })
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-footer" }, [
            _vm.saveState !== "saving"
              ? _c("input", {
                  staticClass: "btn btn-primary",
                  attrs: { type: "submit", value: "Log time" }
                })
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.saveState === "saving"
            ? _c("div", [
                _c("h4", [_vm._v("Saving...")]),
                _vm._v(" "),
                _vm._m(1)
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.saveState === "error"
            ? _c("div", { staticClass: "card-panel red-text" }, [
                _c("h4", [_vm._v("Error...")]),
                _vm._v(" "),
                _c("pre", [_c("code", [_vm._v(_vm._s(_vm.error))])]),
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    "\n                        Refresh the page maybe?\n                    "
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.recordsState === "loaded"
            ? _c("div", [
                _c("table", { staticClass: "table" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", { attrs: { "data-field": "start" } }, [
                        _vm._v("Start")
                      ]),
                      _vm._v(" "),
                      _c("th", { attrs: { "data-field": "end" } }, [
                        _vm._v("End")
                      ]),
                      _vm._v(" "),
                      _c("th", { attrs: { "data-field": "what" } }, [
                        _vm._v(
                          "\n                                What?\n                                "
                        ),
                        _c(
                          "a",
                          {
                            staticClass: "right",
                            attrs: { href: "#", title: "refresh" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.refreshRecords($event)
                              }
                            }
                          },
                          [_vm._v("\n                                    ↻")]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.lastRecords, function(record) {
                      return _c("tr", [
                        _c("td", [_vm._v(_vm._s(record[0]))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(record[1]))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(record[2]))])
                      ])
                    })
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "fixed-action-btn",
                    staticStyle: { bottom: "12px", right: "12px" }
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "btn-floating btn-small red",
                        attrs: {
                          href: _vm.editLink,
                          title: "Edit records...",
                          target: "_blank"
                        }
                      },
                      [
                        _c("i", { staticClass: "small material-icons" }, [
                          _vm._v("mode_edit")
                        ])
                      ]
                    )
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.recordsState === "loading"
            ? _c("div", [
                _c("h4", [_vm._v("Loading records...")]),
                _vm._v(" "),
                _vm._m(2)
              ])
            : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-f6f8d91c", module.exports)
  }
}

/***/ })

});