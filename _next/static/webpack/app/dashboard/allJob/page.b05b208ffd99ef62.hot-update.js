"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/allJob/page",{

/***/ "(app-pages-browser)/./app/components/Pagination.tsx":
/*!***************************************!*\
  !*** ./app/components/Pagination.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Pagination = ()=>{\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const { replace } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    replace(\"\".concat(pathname, \"?page=1\"));\n    const handleChangePage = (page)=>{\n        console.log(\"Searching... \".concat(page));\n        const params = new URLSearchParams(searchParams);\n        if (page) {\n            params.set(\"page\", stirng);\n        } else {\n            params.delete(\"page\");\n        }\n        replace(\"\".concat(pathname, \"?\").concat(params.toString()));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pagination flex gap-3 items-center self-end mt-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"cursor-pointer\",\n                children: \"Prev\"\n            }, void 0, false, {\n                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/jobster-next/app/components/Pagination.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-white px-4 py-1 rounded-sm transition-all text-xl hover:bg-blue-500 hover:text-white cursor-pointer\",\n                        defaultValue: 1,\n                        onClick: handleChangePage(1),\n                        children: \"1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kananrahimli/Desktop/NEXTJS/jobster-next/app/components/Pagination.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-white px-4 py-1 rounded-sm transition-all text-xl hover:bg-blue-500 hover:text-white cursor-pointer\",\n                        defaultValue: 2,\n                        children: \"2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kananrahimli/Desktop/NEXTJS/jobster-next/app/components/Pagination.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/jobster-next/app/components/Pagination.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"cursor-pointer\",\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/jobster-next/app/components/Pagination.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kananrahimli/Desktop/NEXTJS/jobster-next/app/components/Pagination.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Pagination, \"Zdo7sZHXomUFJB6OqZgKKzC/pV8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1BhZ2luYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMEI7QUFDZ0Q7QUFFMUUsTUFBTUksYUFBYTs7SUFDakIsTUFBTUMsZUFBZUosZ0VBQWVBO0lBQ3BDLE1BQU1LLFdBQVdKLDREQUFXQTtJQUM1QixNQUFNLEVBQUVLLE9BQU8sRUFBRSxHQUFHSiwwREFBU0E7SUFDN0JJLFFBQVEsR0FBWSxPQUFURCxVQUFTO0lBQ3BCLE1BQU1FLG1CQUFtQixDQUFDQztRQUN4QkMsUUFBUUMsR0FBRyxDQUFDLGdCQUFxQixPQUFMRjtRQUM1QixNQUFNRyxTQUFTLElBQUlDLGdCQUFnQlI7UUFDbkMsSUFBSUksTUFBTTtZQUNSRyxPQUFPRSxHQUFHLENBQUMsUUFBUUM7UUFDckIsT0FBTztZQUNMSCxPQUFPSSxNQUFNLENBQUM7UUFDaEI7UUFDQVQsUUFBUSxHQUFlSyxPQUFaTixVQUFTLEtBQXFCLE9BQWxCTSxPQUFPSyxRQUFRO0lBQ3hDO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBS0QsV0FBVTswQkFBaUI7Ozs7OzswQkFDakMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQ0NGLFdBQVU7d0JBQ1ZHLGNBQWM7d0JBQ2RDLFNBQVNmLGlCQUFpQjtrQ0FDM0I7Ozs7OztrQ0FHRCw4REFBQ1k7d0JBQ0NELFdBQVU7d0JBQ1ZHLGNBQWM7a0NBQ2Y7Ozs7Ozs7Ozs7OzswQkFJSCw4REFBQ0Y7Z0JBQUtELFdBQVU7MEJBQWlCOzs7Ozs7Ozs7Ozs7QUFHdkM7R0FwQ01mOztRQUNpQkgsNERBQWVBO1FBQ25CQyx3REFBV0E7UUFDUkMsc0RBQVNBOzs7S0FIekJDO0FBc0NOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1BhZ2luYXRpb24udHN4P2Y3MWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMsIHVzZVBhdGhuYW1lLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VEZWJvdW5jZWRDYWxsYmFjayB9IGZyb20gXCJ1c2UtZGVib3VuY2VcIjtcbmNvbnN0IFBhZ2luYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG4gIGNvbnN0IHsgcmVwbGFjZSB9ID0gdXNlUm91dGVyKCk7XG4gIHJlcGxhY2UoYCR7cGF0aG5hbWV9P3BhZ2U9MWApO1xuICBjb25zdCBoYW5kbGVDaGFuZ2VQYWdlID0gKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBTZWFyY2hpbmcuLi4gJHtwYWdlfWApO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoUGFyYW1zKTtcbiAgICBpZiAocGFnZSkge1xuICAgICAgcGFyYW1zLnNldChcInBhZ2VcIiwgc3Rpcm5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1zLmRlbGV0ZShcInBhZ2VcIik7XG4gICAgfVxuICAgIHJlcGxhY2UoYCR7cGF0aG5hbWV9PyR7cGFyYW1zLnRvU3RyaW5nKCl9YCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uIGZsZXggZ2FwLTMgaXRlbXMtY2VudGVyIHNlbGYtZW5kIG10LTVcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+UHJldjwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHgtNCBweS0xIHJvdW5kZWQtc20gdHJhbnNpdGlvbi1hbGwgdGV4dC14bCBob3ZlcjpiZy1ibHVlLTUwMCBob3Zlcjp0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9ezF9XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2hhbmdlUGFnZSgxKX1cbiAgICAgICAgPlxuICAgICAgICAgIDFcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHgtNCBweS0xIHJvdW5kZWQtc20gdHJhbnNpdGlvbi1hbGwgdGV4dC14bCBob3ZlcjpiZy1ibHVlLTUwMCBob3Zlcjp0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9ezJ9XG4gICAgICAgID5cbiAgICAgICAgICAyXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5OZXh0PC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNlYXJjaFBhcmFtcyIsInVzZVBhdGhuYW1lIiwidXNlUm91dGVyIiwiUGFnaW5hdGlvbiIsInNlYXJjaFBhcmFtcyIsInBhdGhuYW1lIiwicmVwbGFjZSIsImhhbmRsZUNoYW5nZVBhZ2UiLCJwYWdlIiwiY29uc29sZSIsImxvZyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNldCIsInN0aXJuZyIsImRlbGV0ZSIsInRvU3RyaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImJ1dHRvbiIsImRlZmF1bHRWYWx1ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Pagination.tsx\n"));

/***/ })

});