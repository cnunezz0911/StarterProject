webpackHotUpdate(0,{

/***/ "./src/Views/Posters.js":
/*!******************************!*\
  !*** ./src/Views/Posters.js ***!
  \******************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: C:/StarterProject/MoviePosterArena/StarterProject/MovieArtArena.Web/app/public/src/Views/Posters.js: Unexpected token, expected ( (30:14)\n\n\u001b[0m \u001b[90m 28 | \u001b[39m    get\n \u001b[90m 29 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 30 | \u001b[39m    getMovies \u001b[33m=\u001b[39m () \u001b[33m=>\u001b[39m {\n \u001b[90m    | \u001b[39m              \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 31 | \u001b[39m        axios\u001b[33m.\u001b[39mget(\u001b[32m\"http://localhost:65332/api/poster/getall\"\u001b[39m)\n \u001b[90m 32 | \u001b[39m            \u001b[33m.\u001b[39mthen(resp \u001b[33m=>\u001b[39m {\n \u001b[90m 33 | \u001b[39m                let movies \u001b[33m=\u001b[39m resp\u001b[33m.\u001b[39mdata\u001b[33m.\u001b[39mitems\u001b[33m;\u001b[39m\u001b[0m\n");

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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { path: '/DetailPage', component: __WEBPACK_IMPORTED_MODULE_7__Views_DetailPage__["a" /* default */], __source: {
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
//# sourceMappingURL=0.1b488dd996fc481c4926.hot-update.js.map