webpackHotUpdate(0,{

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
          'nav',
          { className: 'navbar navbar-expand-lg navbar-light bg-light', __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: 'navbar-brand', href: '#', __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              },
              __self: this
            },
            'MoviePosterArena'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarSupportedContent', 'aria-controls': 'navbarSupportedContent', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation', __source: {
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
            'div',
            { className: 'collapse navbar-collapse', id: 'navbarSupportedContent', __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              { className: 'navbar-nav mr-auto', __source: {
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
                  'Link'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { className: 'nav-item dropdown', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'nav-link dropdown-toggle', href: '#', id: 'navbarDropdown', role: 'button', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 23
                    },
                    __self: this
                  },
                  'Dropdown'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'dropdown-menu', 'aria-labelledby': 'navbarDropdown', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: 'dropdown-item', href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                      },
                      __self: this
                    },
                    'Action'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: 'dropdown-item', href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                      },
                      __self: this
                    },
                    'Another action'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-divider', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 29
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: 'dropdown-item', href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                      },
                      __self: this
                    },
                    'Something else here'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { className: 'nav-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'nav-link disabled', href: '#', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 34
                    },
                    __self: this
                  },
                  'Disabled'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'form',
              { className: 'form-inline my-2 my-lg-0', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control mr-sm-2', type: 'search', placeholder: 'Search', 'aria-label': 'Search', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { className: 'btn btn-outline-success my-2 my-sm-0', type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  },
                  __self: this
                },
                'Search'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
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

/***/ })

})
//# sourceMappingURL=0.5ef984aa8cba1f1d25c0.hot-update.js.map