"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/page.jsx":
/*!**********************!*\
  !*** ./app/page.jsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_generateFakeUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/generateFakeUsers */ \"(app-client)/./utils/generateFakeUsers.jsx\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Card */ \"(app-client)/./components/Card.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadData = (0,_utils_generateFakeUsers__WEBPACK_IMPORTED_MODULE_2__.generateFakeUsers)(10);\n        setData(loadData);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"mx-auto min-h-screen items-center justify-center \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center text-3xl font-bold\",\n                        children: \"Users\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\JavaScript Projects\\\\Faker.js project\\\\app\\\\page.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col space-y-4\",\n                        children: data.map((item, idx)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                fullName: item.fullName,\n                                email: item.email,\n                                job: item.job,\n                                address: item.address,\n                                avatar: item.avatar\n                            }, idx, false, {\n                                fileName: \"D:\\\\Github\\\\JavaScript Projects\\\\Faker.js project\\\\app\\\\page.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\JavaScript Projects\\\\Faker.js project\\\\app\\\\page.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Github\\\\JavaScript Projects\\\\Faker.js project\\\\app\\\\page.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"text-center p-4\",\n                children: \"Ahasan karim\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Github\\\\JavaScript Projects\\\\Faker.js project\\\\app\\\\page.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Github\\\\JavaScript Projects\\\\Faker.js project\\\\app\\\\page.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzJDO0FBQ2tCO0FBRXpCO0FBRXJCLFNBQVNJLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5DRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTU8sV0FBV0wsMkVBQWlCQSxDQUFDO1FBQ25DSSxRQUFRQztJQUNWLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBaUM7Ozs7OztrQ0FDL0MsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNaSixLQUFLTyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsTUFBUTs0QkFDdkIscUJBQ0UsOERBQUNYLHdEQUFJQTtnQ0FFSFksVUFBVUYsS0FBS0UsUUFBUTtnQ0FDdkJDLE9BQU9ILEtBQUtHLEtBQUs7Z0NBQ2pCQyxLQUFLSixLQUFLSSxHQUFHO2dDQUNiQyxTQUFTTCxLQUFLSyxPQUFPO2dDQUNyQkMsUUFBUU4sS0FBS00sTUFBTTsrQkFMZEw7Ozs7O3dCQVFYOzs7Ozs7Ozs7Ozs7MEJBR0osOERBQUNNO2dCQUFPWCxXQUFVOzBCQUFrQjs7Ozs7Ozs7Ozs7O0FBRzFDLENBQUM7R0E5QnVCTDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qc3g/NmU0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBnZW5lcmF0ZUZha2VVc2VycyB9IGZyb20gXCJAL3V0aWxzL2dlbmVyYXRlRmFrZVVzZXJzXCJcblxuaW1wb3J0IENhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9DYXJkXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkRGF0YSA9IGdlbmVyYXRlRmFrZVVzZXJzKDEwKVxuICAgIHNldERhdGEobG9hZERhdGEpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwibXgtYXV0byBtaW4taC1zY3JlZW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTN4bCBmb250LWJvbGRcIj5Vc2VyczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTRcIj5cbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICBmdWxsTmFtZT17aXRlbS5mdWxsTmFtZX1cbiAgICAgICAgICAgICAgICBlbWFpbD17aXRlbS5lbWFpbH1cbiAgICAgICAgICAgICAgICBqb2I9e2l0ZW0uam9ifVxuICAgICAgICAgICAgICAgIGFkZHJlc3M9e2l0ZW0uYWRkcmVzc31cbiAgICAgICAgICAgICAgICBhdmF0YXI9e2l0ZW0uYXZhdGFyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLTRcIj5BaGFzYW4ga2FyaW08L2Zvb3Rlcj5cbiAgICA8L21haW4+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZW5lcmF0ZUZha2VVc2VycyIsIkNhcmQiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJsb2FkRGF0YSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsIm1hcCIsIml0ZW0iLCJpZHgiLCJmdWxsTmFtZSIsImVtYWlsIiwiam9iIiwiYWRkcmVzcyIsImF2YXRhciIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/page.jsx\n"));

/***/ })

});