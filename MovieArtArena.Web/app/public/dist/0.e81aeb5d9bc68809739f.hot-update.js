webpackHotUpdate(0,{

/***/ "./node_modules/query-string/index.js":
false,

/***/ "./node_modules/strict-uri-encode/index.js":
false,

/***/ "./src/Views/Posters.js":
/*!******************************!*\
  !*** ./src/Views/Posters.js ***!
  \******************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: C:/StarterProject/MoviePosterArena/StarterProject/MovieArtArena.Web/app/public/src/Views/Posters.js: JSX value should be either an expression or a quoted JSX text (83:45)\n\n\u001b[0m \u001b[90m 81 | \u001b[39m                        \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\" row col-4\"\u001b[39m key\u001b[33m=\u001b[39m{movie\u001b[33m.\u001b[39mid}\u001b[33m>\u001b[39m\n \u001b[90m 82 | \u001b[39m                            \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"container box\"\u001b[39m\u001b[33m>\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 83 | \u001b[39m                                \u001b[33m<\u001b[39m\u001b[33ma\u001b[39m\u001b[33m>\u001b[39m\u001b[33m<\u001b[39m\u001b[33mimg\u001b[39m href\u001b[33m=\u001b[39mclassName\u001b[33m=\u001b[39m\u001b[32m\"row ibox md-3 movies\"\u001b[39m src\u001b[33m=\u001b[39m{movie\u001b[33m.\u001b[39mimageUrl} onClick\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhandleItem\u001b[33m.\u001b[39mbind(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39m movie\u001b[33m.\u001b[39mid)}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33ma\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m    | \u001b[39m                                             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 84 | \u001b[39m                                \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"title\"\u001b[39m\u001b[33m>\u001b[39m{movie\u001b[33m.\u001b[39mtitle}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 85 | \u001b[39m                                \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"description\"\u001b[39m\u001b[33m>\u001b[39m{movie\u001b[33m.\u001b[39mdescription}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 86 | \u001b[39m                                \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"price\"\u001b[39m\u001b[33m>\u001b[39m{movie\u001b[33m.\u001b[39mprice}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n");

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Views_Posters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Views_Posters__);
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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { path: '/Posters', component: __WEBPACK_IMPORTED_MODULE_6__Views_Posters__["default"], __source: {
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
//# sourceMappingURL=0.e81aeb5d9bc68809739f.hot-update.js.map