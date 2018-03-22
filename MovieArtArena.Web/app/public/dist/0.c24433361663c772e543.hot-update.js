webpackHotUpdate(0,{

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":1}!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null]}!./src/App.css":
false,

/***/ "./src/App.css":
false,

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: C:/StarterProject/MoviePosterArena/StarterProject/MovieArtArena.Web/app/public/src/App.js: Unexpected token, expected ; (13:11)\n\n\u001b[0m \u001b[90m 11 | \u001b[39m    }\n \u001b[90m 12 | \u001b[39m  }\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 13 | \u001b[39m  render() {\n \u001b[90m    | \u001b[39m           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 14 | \u001b[39m    \u001b[36mreturn\u001b[39m (\n \u001b[90m 15 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"container-fluid night\"\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 16 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"App\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n");

/***/ }),

/***/ "./src/Components/Carousel/Carousel.js":
/*!*********************************************!*\
  !*** ./src/Components/Carousel/Carousel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_slick__);
var _jsxFileName = "C:\\StarterProject\\MoviePosterArena\\StarterProject\\MovieArtArena.Web\\app\\public\\src\\Components\\Carousel\\Carousel.js";

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

/* unused harmony default export */ var _unused_webpack_default_export = (Carousel);

/***/ }),

/***/ "./src/Components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/Components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\StarterProject\\MoviePosterArena\\StarterProject\\MovieArtArena.Web\\app\\public\\src\\Components\\Footer\\Footer.js";


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

/* unused harmony default export */ var _unused_webpack_default_export = (Footer);

/***/ }),

/***/ "./src/logo.svg":
false,

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Views_Posters__ = __webpack_require__(/*! ./Views/Posters */ "./src/Views/Posters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__App__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__App__);
var _jsxFileName = 'C:\\StarterProject\\MoviePosterArena\\StarterProject\\MovieArtArena.Web\\app\\public\\src\\routes.js',
    _this = this;









var Routes = function Routes() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["a" /* BrowserRouter */],
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 10
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                },
                __self: _this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Components_NavBar_NavBar__["a" /* default */], {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                },
                __self: _this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_6__App__["default"], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                },
                __self: _this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { path: '/Posters', component: __WEBPACK_IMPORTED_MODULE_5__Views_Posters__["a" /* default */], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                },
                __self: _this
            })
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Routes);

/***/ })

})
//# sourceMappingURL=0.c24433361663c772e543.hot-update.js.map