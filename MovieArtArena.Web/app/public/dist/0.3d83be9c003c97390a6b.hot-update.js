webpackHotUpdate(0,{

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};


/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

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

            console.log('btn worksssssss');
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

            debugger;
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
                                    { href: '/DetailPage', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 83
                                        },
                                        __self: _this2
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'row ibox md-3 movies', src: movie.imageUrl, onClick: _this2.handleItem.bind(_this2, movie.id), __source: {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Components_NavBar_NavBar__ = __webpack_require__(/*! ./Components/NavBar/NavBar */ "./src/Components/NavBar/NavBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_Carousel_Carousel__ = __webpack_require__(/*! ./Components/Carousel/Carousel */ "./src/Components/Carousel/Carousel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_Footer_Footer__ = __webpack_require__(/*! ./Components/Footer/Footer */ "./src/Components/Footer/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Views_Post__ = __webpack_require__(/*! ./Views/Post */ "./src/Views/Post.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Views_Posters__ = __webpack_require__(/*! ./Views/Posters */ "./src/Views/Posters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Views_DetailPage__ = __webpack_require__(/*! ./Views/DetailPage */ "./src/Views/DetailPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__App__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = 'C:\\StarterProject\\MoviePosterArena\\StarterProject\\MovieArtArena.Web\\app\\public\\src\\routes.js',
    _this = this;











var Routes = function Routes() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["a" /* BrowserRouter */],
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 12
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                },
                __self: _this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Components_NavBar_NavBar__["a" /* default */], {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                },
                __self: _this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_8__App__["a" /* default */], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                },
                __self: _this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { path: '/Posters', component: __WEBPACK_IMPORTED_MODULE_6__Views_Posters__["a" /* default */], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                },
                __self: _this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { path: '/AddPoster', component: __WEBPACK_IMPORTED_MODULE_5__Views_Post__["a" /* default */], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                },
                __self: _this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { exact: true, path: '/DetailPage:/id?', component: __WEBPACK_IMPORTED_MODULE_7__Views_DetailPage__["a" /* default */], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                },
                __self: _this
            })
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Routes);

/***/ })

})
//# sourceMappingURL=0.3d83be9c003c97390a6b.hot-update.js.map