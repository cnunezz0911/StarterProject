webpackHotUpdate(0,{

/***/ "./src/Views/Post.js":
/*!***************************!*\
  !*** ./src/Views/Post.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
var _jsxFileName = 'C:\\StarterProject\\MoviePosterArena\\StarterProject\\MovieArtArena.Web\\app\\public\\src\\Views\\Post.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Post = function (_React$Component) {
    _inherits(Post, _React$Component);

    function Post(props) {
        _classCallCheck(this, Post);

        var _this = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));

        _this.handleInputChange = function (ev) {
            var addMovies = Object.assign({}, _this.state.addMovies);
            addMovies[ev.target.name] = ev.target.value;
            _this.setState({ addMovies: addMovies });
        };

        _this.handleSubmit = function (e) {
            e.preventDefault();
            var add = _this.state.addMovies;
            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post("http://localhost:65332/api/poster", add).then(function (resp) {
                _this.setState({
                    add: {}
                });
                console.log(resp);
            }, function (err) {
                return console.log(err);
            });
        };

        _this.state = {
            addMovies: {
                title: '',
                description: '',
                type: '',
                price: '',
                imageUrl: '',
                modifiedBy: ''
            }
        };
        return _this;
    }

    _createClass(Post, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'container col-md-6', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'form',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'form-group', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 42
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'label',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 43
                                },
                                __self: this
                            },
                            'Title'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control',
                            type: 'text',
                            name: 'title',
                            placeholder: 'Title',
                            value: this.title,
                            onChange: this.handleInputChange,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 44
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'form-group', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 52
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'label',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 53
                                },
                                __self: this
                            },
                            'Description'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control',
                            type: 'text',
                            name: 'description',
                            placeholder: 'Description',
                            value: this.description,
                            onChange: this.handleInputChange,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 54
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'form-group', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 62
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'label',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 63
                                },
                                __self: this
                            },
                            'Type'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control',
                            type: 'text',
                            name: 'type',
                            placeholder: 'Type',
                            value: this.type,
                            onChange: this.handleInputChange,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 64
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'form-group', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 72
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'label',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 73
                                },
                                __self: this
                            },
                            'Price'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control',
                            type: 'text',
                            name: 'price',
                            placeholder: 'Price',
                            value: this.price,
                            onChange: this.handleInputChange,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 74
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'form-group', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 82
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'label',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 83
                                },
                                __self: this
                            },
                            'ImageUrl'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control',
                            type: 'text',
                            name: 'imageUrl',
                            placeholder: 'ImageUrl',
                            value: this.imageUrl,
                            onChange: this.handleInputChange,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 84
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { className: 'btn btn-primary', onClick: this.handleSubmit, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 93
                            },
                            __self: this
                        },
                        'Submit'
                    )
                )
            );
        }
    }]);

    return Post;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Post);

/***/ })

})
//# sourceMappingURL=0.6403fdff715b2613445b.hot-update.js.map