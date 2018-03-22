webpackHotUpdate(0,{

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":1}!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null]}!./src/App.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"importLoaders":1}!./node_modules/postcss-loader/lib?{"ident":"postcss","plugins":[null,null]}!./src/App.css ***!
  \***********************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  -webkit-animation: App-logo-spin infinite 20s linear;\n          animation: App-logo-spin infinite 20s linear;\n  height: 80px;\n}\n\n.App-header {\n  background-color: #222;\n  height: 150px;\n  padding: 20px;\n  color: white;\n}\n\n.App-title {\n  font-size: 1.5em;\n}\n\n.App-intro {\n  font-size: large;\n}\n\n@-webkit-keyframes App-logo-spin {\n  from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@keyframes App-logo-spin {\n  from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader??ref--1-oneOf-2-1!../node_modules/postcss-loader/lib??postcss!./App.css */ "./node_modules/css-loader/index.js?{\"importLoaders\":1}!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null]}!./src/App.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(/*! !../node_modules/css-loader??ref--1-oneOf-2-1!../node_modules/postcss-loader/lib??postcss!./App.css */ "./node_modules/css-loader/index.js?{\"importLoaders\":1}!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null]}!./src/App.css", function() {
			var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--1-oneOf-2-1!../node_modules/postcss-loader/lib??postcss!./App.css */ "./node_modules/css-loader/index.js?{\"importLoaders\":1}!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null]}!./src/App.css");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logo_svg__ = __webpack_require__(/*! ./logo.svg */ "./src/logo.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NavBar_NavBar__ = __webpack_require__(/*! ./NavBar/NavBar */ "./src/NavBar/NavBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer_Footer__ = __webpack_require__(/*! ./Footer/Footer */ "./src/Footer/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Carousel_Carousel__ = __webpack_require__(/*! ./Carousel/Carousel */ "./src/Carousel/Carousel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__App_css__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__App_css__);
var _jsxFileName = 'C:\\StarterProject\\MoviePosterArena\\StarterProject\\MovieArtArena.Web\\app\\public\\src\\App.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      posters: {}
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'container-fluid night', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'App', __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'header',
            { className: 'App-header', __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_1__logo_svg___default.a, className: 'App-logo', alt: 'logo', __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h1',
              { className: 'App-title', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                },
                __self: this
              },
              'Welcome to React'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p', { className: 'App-intro', __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Carousel_Carousel__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Footer_Footer__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          })
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./src/Carousel/Carousel.js":
/*!**********************************!*\
  !*** ./src/Carousel/Carousel.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_slick__);
var _jsxFileName = "C:\\StarterProject\\MoviePosterArena\\StarterProject\\MovieArtArena.Web\\app\\public\\src\\Carousel\\Carousel.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Carousel = function (_React$Component) {
    _inherits(Carousel, _React$Component);

    function Carousel() {
        _classCallCheck(this, Carousel);

        return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));
    }

    _createClass(Carousel, [{
        key: "render",
        value: function render() {
            var settings = {
                dots: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: false,
                centerMode: true,
                centerPadding: "0"

            };

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "container sizing", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_slick___default.a,
                    Object.assign({}, settings, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                        },
                        __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 23
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "https://static.vibe.com/files/2018/01/black-panther-poster-1517325222-640x933.jpg", alt: "poster", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 24
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 26
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "https://fanart.tv/fanart/movies/293660/movieposter/deadpool-56948e5115048.jpg", alt: "poster", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 27
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 29
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "https://orig00.deviantart.net/4d95/f/2011/007/b/2/child__s_play_movie_cover_3_by_designerdude0326-d36mlvh.jpg", alt: "poster", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 30
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 32
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "http://img.auctiva.com/imgdata/1/1/7/9/1/0/1/webimg/560106212_o.jpg", alt: "poster", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 33
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 35
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "https://monsterzeronj.files.wordpress.com/2013/08/h13w.jpg", alt: "poster", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 36
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 38
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "http://img.moviepostershop.com/juice-movie-poster-1992-1020195456.jpg", alt: "poster", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 39
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 41
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "https://jbchost.com.br/akibaspace/media/2017/02/promologan.jpg", alt: "poster", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 42
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 44
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "http://digitalspyuk.cdnds.net/17/12/480x681/john-wick-chapter-2-poster.jpg", alt: "poster", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 45
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 47
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "https://www.dvdsreleasedates.com/posters/800/T/The-Avengers-2012-movie-poster.jpg", alt: "poster", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 48
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 50
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "http://media.comicbook.com/2017/10/guardians-of-the-galaxy-movie-poster-marvel-cinematic-universe-1038897.jpg", alt: "poster", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 51
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 53
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "http://www.fatmovieguy.com/wp-content/uploads/2015/04/Batman-V-Superman-Dawn-of-Justice-Movie-Poster.jpg", alt: "poster", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 54
                            },
                            __self: this
                        })
                    )
                )
            );
        }
    }]);

    return Carousel;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Carousel);

/***/ }),

/***/ "./src/Footer/Footer.js":
/*!******************************!*\
  !*** ./src/Footer/Footer.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\StarterProject\\MoviePosterArena\\StarterProject\\MovieArtArena.Web\\app\\public\\src\\Footer\\Footer.js";


function Footer(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            },
            __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "footer",
            { className: "page-footer font-small indigo pt-0", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 6
                },
                __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "container", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 7
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "row", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 8
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "col-md-12 py-5", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 9
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "mb-5 flex-center thirdparty", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 10
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { className: "fb-ic", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 11
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "i",
                                    { className: "fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x", alt: "poster", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 12
                                        },
                                        __self: this
                                    },
                                    " "
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { className: "tw-ic", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 14
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "i",
                                    { className: "fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x", alt: "poster", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 15
                                        },
                                        __self: this
                                    },
                                    " "
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { className: "gplus-ic", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 17
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "i",
                                    { className: "fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x", alt: "poster", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 18
                                        },
                                        __self: this
                                    },
                                    " "
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { className: "li-ic", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 20
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "i",
                                    { className: "fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x", alt: "poster", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 21
                                        },
                                        __self: this
                                    },
                                    " "
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { className: "ins-ic", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 23
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "i",
                                    { className: "fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x", alt: "poster", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 24
                                        },
                                        __self: this
                                    },
                                    " "
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { className: "pin-ic", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 26
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "i",
                                    { className: "fa fa-pinterest fa-lg white-text fa-2x", alt: "poster", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 27
                                        },
                                        __self: this
                                    },
                                    " "
                                )
                            )
                        )
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "footer-copyright py-3 text-center", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                    },
                    __self: this
                },
                "\xA9 2018 Copyright:"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { href: "", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 37
                        },
                        __self: this
                    },
                    " Terms "
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { href: "", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38
                        },
                        __self: this
                    },
                    " AboutUs"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { href: "", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                        },
                        __self: this
                    },
                    " Help"
                )
            )
        )
    );
}

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.8e0f8010.svg";

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Carousel_Carousel__ = __webpack_require__(/*! ./Carousel/Carousel */ "./src/Carousel/Carousel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Footer_Footer__ = __webpack_require__(/*! ./Footer/Footer */ "./src/Footer/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Posters_Posters__ = __webpack_require__(/*! ./Posters/Posters */ "./src/Posters/Posters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__App__ = __webpack_require__(/*! ./App */ "./src/App.js");
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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__NavBar_NavBar__["a" /* default */], {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                },
                __self: _this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_6__App__["a" /* default */], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                },
                __self: _this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { path: '/Posters', component: __WEBPACK_IMPORTED_MODULE_5__Posters_Posters__["a" /* default */], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                },
                __self: _this
            })
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Routes);

/***/ })

})
//# sourceMappingURL=0.fd26751f01f245b87258.hot-update.js.map