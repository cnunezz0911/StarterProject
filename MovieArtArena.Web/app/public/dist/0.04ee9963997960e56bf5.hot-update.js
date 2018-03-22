webpackHotUpdate(0,{

/***/ "./src/Views/Posters.js":
/*!******************************!*\
  !*** ./src/Views/Posters.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_Footer_Footer__ = __webpack_require__(/*! ../Components/Footer/Footer */ "./src/Components/Footer/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_query_string__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_query_string__);
var _jsxFileName = 'C:\\StarterProject\\MoviePosterArena\\StarterProject\\MovieArtArena.Web\\app\\public\\src\\Views\\Posters.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Posters = function (_React$Component) {
    _inherits(Posters, _React$Component);

    function Posters(props) {
        _classCallCheck(this, Posters);

        var _this = _possibleConstructorReturn(this, (Posters.__proto__ || Object.getPrototypeOf(Posters)).call(this, props));

        _this.componentWillMount = function () {
            _this.getMovies();
        };

        _this.getMovies = function () {
            __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get("http://localhost:65332/api/poster/getall").then(function (resp) {
                var movies = resp.data.items;
                _this.setState({ movies: movies });
                console.log(resp);
                console.log(movies);
            });
        };

        _this.state = {
            movies: [],
            addMovies: {
                title: '',
                description: '',
                type: '',
                price: '',
                imageUrl: '',
                id: ''

            }
        };

        return _this;
    }

    _createClass(Posters, [{
        key: 'handleItem',
        value: function handleItem(id) {
            debugger;
            var urlParams = new URLSearchParams(location.search);

            console.log('btn');
            // window.location.href = "http://localhost:65332/Posters/?id=" + id;
        }

        // selectedItem = (id) => {
        //     debugger;
        //     this.setState({
        //         id: id
        //     });
        //     axios.get("http://localhost.65332/api/poster/" + id)
        //     .then(resp => {
        //         let arr = resp.data.item;
        //         let id = resp.data.item.id;
        //         this.setState({
        //             movieObj:{
        //             id: resp.data.item.id,
        //             title: resp.data.item.title,
        //             description: resp.data.item.description,
        //             type: resp.data.item.type,
        //             imageUrl: resp.data.item.imageUrl
        //             }
        //         });
        //       console.log(id, data);
        //     });
        // }

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'container', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'container more', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 76
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h2',
                        { className: 'movietitlefont', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 77
                            },
                            __self: this
                        },
                        'MoviePosters'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 79
                        },
                        __self: this
                    },
                    this.state.movies.map(function (movie) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: ' row col-4', key: movie.id, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 81
                                },
                                __self: _this2
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'container box', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 82
                                    },
                                    __self: _this2
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'a',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 83
                                        },
                                        __self: _this2
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { href: '/Deta', className: 'row ibox md-3 movies', src: movie.imageUrl, onClick: _this2.handleItem.bind(_this2, movie.id), __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 83
                                        },
                                        __self: _this2
                                    })
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'title', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 84
                                        },
                                        __self: _this2
                                    },
                                    movie.title
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'description', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 85
                                        },
                                        __self: _this2
                                    },
                                    movie.description
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'price', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 86
                                        },
                                        __self: _this2
                                    },
                                    movie.price
                                )
                            )
                        );
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Components_Footer_Footer__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 91
                    },
                    __self: this
                })
            );
        }
    }]);

    return Posters;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Posters);

/***/ })

})
//# sourceMappingURL=0.04ee9963997960e56bf5.hot-update.js.map