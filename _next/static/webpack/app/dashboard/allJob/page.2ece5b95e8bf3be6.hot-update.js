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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Pagination = ()=>{\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const { replace } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    replace(\"\".concat(pathname, \"?page=1\"));\n    const handleChangePage = (page)=>{\n        console.log(\"test\");\n        console.log(\"Searching... \".concat(page));\n        const params = new URLSearchParams(searchParams);\n        if (page) {\n            params.set(\"page\", String(page));\n        } else {\n            params.delete(\"page\");\n        }\n        replace(\"\".concat(pathname, \"?\").concat(params.toString()));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pagination flex gap-3 items-center self-end mt-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"cursor-pointer\",\n                children: \"Prev\"\n            }, void 0, false, {\n                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/jobster-next/app/components/Pagination.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-white px-4 py-1 rounded-sm transition-all text-xl hover:bg-blue-500 hover:text-white cursor-pointer\",\n                        defaultValue: 1,\n                        onClick: handleChangePage(1),\n                        children: \"1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kananrahimli/Desktop/NEXTJS/jobster-next/app/components/Pagination.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-white px-4 py-1 rounded-sm transition-all text-xl hover:bg-blue-500 hover:text-white cursor-pointer\",\n                        defaultValue: 2,\n                        onClick: handleChangePage(1),\n                        children: \"2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kananrahimli/Desktop/NEXTJS/jobster-next/app/components/Pagination.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/jobster-next/app/components/Pagination.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"cursor-pointer\",\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/jobster-next/app/components/Pagination.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kananrahimli/Desktop/NEXTJS/jobster-next/app/components/Pagination.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Pagination, \"Zdo7sZHXomUFJB6OqZgKKzC/pV8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1BhZ2luYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMEI7QUFDZ0Q7QUFFMUUsTUFBTUksYUFBYTs7SUFDakIsTUFBTUMsZUFBZUosZ0VBQWVBO0lBQ3BDLE1BQU1LLFdBQVdKLDREQUFXQTtJQUM1QixNQUFNLEVBQUVLLE9BQU8sRUFBRSxHQUFHSiwwREFBU0E7SUFDN0JJLFFBQVEsR0FBWSxPQUFURCxVQUFTO0lBQ2xCLE1BQU1FLG1CQUFtQixDQUFDQztRQUN4QkMsUUFBUUMsR0FBRyxDQUFDO1FBRWRELFFBQVFDLEdBQUcsQ0FBQyxnQkFBcUIsT0FBTEY7UUFDNUIsTUFBTUcsU0FBUyxJQUFJQyxnQkFBZ0JSO1FBQ25DLElBQUlJLE1BQU07WUFDUkcsT0FBT0UsR0FBRyxDQUFDLFFBQVFDLE9BQU9OO1FBQzVCLE9BQU87WUFDTEcsT0FBT0ksTUFBTSxDQUFDO1FBQ2hCO1FBQ0FULFFBQVEsR0FBZUssT0FBWk4sVUFBUyxLQUFxQixPQUFsQk0sT0FBT0ssUUFBUTtJQUN4QztJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUtELFdBQVU7MEJBQWlCOzs7Ozs7MEJBQ2pDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUNDRCxXQUFVO3dCQUNWRSxjQUFjO3dCQUNkQyxTQUFTZCxpQkFBaUI7a0NBQzNCOzs7Ozs7a0NBR0QsOERBQUNZO3dCQUNDRCxXQUFVO3dCQUNWRSxjQUFjO3dCQUNkQyxTQUFTZCxpQkFBaUI7a0NBQzNCOzs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUNZO2dCQUFLRCxXQUFVOzBCQUFpQjs7Ozs7Ozs7Ozs7O0FBR3ZDO0dBdkNNZjs7UUFDaUJILDREQUFlQTtRQUNuQkMsd0RBQVdBO1FBQ1JDLHNEQUFTQTs7O0tBSHpCQztBQXlDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9QYWdpbmF0aW9uLnRzeD9mNzFlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zLCB1c2VQYXRobmFtZSwgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlRGVib3VuY2VkQ2FsbGJhY2sgfSBmcm9tIFwidXNlLWRlYm91bmNlXCI7XG5jb25zdCBQYWdpbmF0aW9uID0gKCkgPT4ge1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICBjb25zdCB7IHJlcGxhY2UgfSA9IHVzZVJvdXRlcigpO1xuICByZXBsYWNlKGAke3BhdGhuYW1lfT9wYWdlPTFgKTtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VQYWdlID0gKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICAgIFxuICAgIGNvbnNvbGUubG9nKGBTZWFyY2hpbmcuLi4gJHtwYWdlfWApO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoUGFyYW1zKTtcbiAgICBpZiAocGFnZSkge1xuICAgICAgcGFyYW1zLnNldChcInBhZ2VcIiwgU3RyaW5nKHBhZ2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1zLmRlbGV0ZShcInBhZ2VcIik7XG4gICAgfVxuICAgIHJlcGxhY2UoYCR7cGF0aG5hbWV9PyR7cGFyYW1zLnRvU3RyaW5nKCl9YCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uIGZsZXggZ2FwLTMgaXRlbXMtY2VudGVyIHNlbGYtZW5kIG10LTVcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+UHJldjwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHB4LTQgcHktMSByb3VuZGVkLXNtIHRyYW5zaXRpb24tYWxsIHRleHQteGwgaG92ZXI6YmctYmx1ZS01MDAgaG92ZXI6dGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXsxfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNoYW5nZVBhZ2UoMSl9XG4gICAgICAgID5cbiAgICAgICAgICAxXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBweC00IHB5LTEgcm91bmRlZC1zbSB0cmFuc2l0aW9uLWFsbCB0ZXh0LXhsIGhvdmVyOmJnLWJsdWUtNTAwIGhvdmVyOnRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Mn1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDaGFuZ2VQYWdlKDEpfVxuICAgICAgICA+XG4gICAgICAgICAgMlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+TmV4dDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VQYXRobmFtZSIsInVzZVJvdXRlciIsIlBhZ2luYXRpb24iLCJzZWFyY2hQYXJhbXMiLCJwYXRobmFtZSIsInJlcGxhY2UiLCJoYW5kbGVDaGFuZ2VQYWdlIiwicGFnZSIsImNvbnNvbGUiLCJsb2ciLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZXQiLCJTdHJpbmciLCJkZWxldGUiLCJ0b1N0cmluZyIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJkZWZhdWx0VmFsdWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Pagination.tsx\n"));

/***/ })

});