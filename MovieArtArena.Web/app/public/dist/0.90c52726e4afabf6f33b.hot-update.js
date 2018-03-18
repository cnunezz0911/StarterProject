webpackHotUpdate(0,{

/***/ "./node_modules/react-router-dom/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router-dom/es/index.js ***!
  \***************************************************/
/*! exports provided: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Prompt, Redirect, Route, Router, StaticRouter, Switch, matchPath, withRouter */
/*! exports used: BrowserRouter, Route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__ = __webpack_require__(/*! ./BrowserRouter */ "./node_modules/react-router-dom/es/BrowserRouter.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HashRouter__ = __webpack_require__(/*! ./HashRouter */ "./node_modules/react-router-dom/es/HashRouter.js");
/* unused harmony reexport HashRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(/*! ./Link */ "./node_modules/react-router-dom/es/Link.js");
/* unused harmony reexport Link */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__ = __webpack_require__(/*! ./MemoryRouter */ "./node_modules/react-router-dom/es/MemoryRouter.js");
/* unused harmony reexport MemoryRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavLink__ = __webpack_require__(/*! ./NavLink */ "./node_modules/react-router-dom/es/NavLink.js");
/* unused harmony reexport NavLink */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Prompt__ = __webpack_require__(/*! ./Prompt */ "./node_modules/react-router-dom/es/Prompt.js");
/* unused harmony reexport Prompt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__(/*! ./Redirect */ "./node_modules/react-router-dom/es/Redirect.js");
/* unused harmony reexport Redirect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__(/*! ./Route */ "./node_modules/react-router-dom/es/Route.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Router__ = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/es/Router.js");
/* unused harmony reexport Router */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StaticRouter__ = __webpack_require__(/*! ./StaticRouter */ "./node_modules/react-router-dom/es/StaticRouter.js");
/* unused harmony reexport StaticRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__(/*! ./Switch */ "./node_modules/react-router-dom/es/Switch.js");
/* unused harmony reexport Switch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__matchPath__ = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router-dom/es/matchPath.js");
/* unused harmony reexport matchPath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__withRouter__ = __webpack_require__(/*! ./withRouter */ "./node_modules/react-router-dom/es/withRouter.js");
/* unused harmony reexport withRouter */



























/***/ }),

/***/ "./src/NavBar/NavBar.js":
/*!******************************!*\
  !*** ./src/NavBar/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _jsxFileName = 'C:\\StarterProject\\MoviePosterArena\\StarterProject\\MovieArtArena.Web\\app\\public\\src\\NavBar\\NavBar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var NavBar = function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar() {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
  }

  _createClass(NavBar, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'App', __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'nav',
            { className: 'navbar navbar-toggleable-md navbar-light bg-faded', __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'navbar-toggler navbar-toggler-right', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarNav', 'aria-controls': 'navbarNav', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'navbar-toggler-icon', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11
                },
                __self: this
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'navbar-brand', href: '#', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                },
                __self: this
              },
              'Movie Art Arena'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'collapse navbar-collapse', id: 'navbarNav', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                { className: 'navbar-nav', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  { className: 'nav-item active', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 16
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: 'nav-link', href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                      },
                      __self: this
                    },
                    'Home ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { className: 'sr-only', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 17
                        },
                        __self: this
                      },
                      '(current)'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  { className: 'nav-item', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 19
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: 'nav-link', href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                      },
                      __self: this
                    },
                    'Features'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  { className: 'nav-item', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 22
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: 'nav-link', href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                      },
                      __self: this
                    },
                    'Pricing'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  { className: 'nav-item', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: 'nav-link disabled', href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      },
                      __self: this
                    },
                    'Disabled'
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          },
          this.props.children
        )
      );
    }
  }]);

  return NavBar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (NavBar);

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NavBar_NavBar__ = __webpack_require__(/*! ./NavBar/NavBar */ "./src/NavBar/NavBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = 'C:\\StarterProject\\MoviePosterArena\\StarterProject\\MovieArtArena.Web\\app\\public\\src\\routes.js',
    _this = this;






var Routes = function Routes() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["a" /* BrowserRouter */],
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                },
                __self: _this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__NavBar_NavBar__["a" /* default */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    },
                    __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */], __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    },
                    __self: _this
                })
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Routes);

/***/ })

})
//# sourceMappingURL=0.90c52726e4afabf6f33b.hot-update.js.map