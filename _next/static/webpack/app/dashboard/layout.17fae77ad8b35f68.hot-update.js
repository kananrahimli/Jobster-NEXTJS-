"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/layout",{

/***/ "(app-pages-browser)/./app/dashboard/layout.tsx":
/*!**********************************!*\
  !*** ./app/dashboard/layout.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo.svg */ \"(app-pages-browser)/./app/assets/logo.svg\");\n/* harmony import */ var _barrel_optimize_names_FaBarsStaggered_react_icons_fa6__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=FaBarsStaggered!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoMdClose_react_icons_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=IoMdClose!=!react-icons/io */ \"(app-pages-browser)/./node_modules/react-icons/io/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/localstorage */ \"(app-pages-browser)/./app/utils/localstorage.ts\");\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/data */ \"(app-pages-browser)/./app/lib/data.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Layout(param) {\n    let { children } = param;\n    _s();\n    const [showSidebar, setShowSidebar] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();\n    const links = [\n        {\n            name: \"Statistic\",\n            href: \"/dashboard/statistic\",\n            icon: \"\",\n            overview: \"/dashboard\"\n        },\n        {\n            name: \"All jobs\",\n            href: \"/dashboard/allJob\",\n            icon: \"\"\n        },\n        {\n            name: \"Add job\",\n            href: \"/dashboard/addJob\",\n            icon: \"\"\n        },\n        {\n            name: \"Profile\",\n            href: \"/dashboard/profile\",\n            icon: \"\"\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (0,_lib_data__WEBPACK_IMPORTED_MODULE_7__.getAllJobs)(\"/jobs\").then((res)=>{\n            if (res == \"Authentication invalid\") {\n                // toast.error(res)\n                (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_6__.clearLocalStorage)();\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"backdrop \".concat(showSidebar ? \"show\" : \"hidden\", \" md:hidden fixed w-full h-full opacity-55 bg-black\"),\n                onClick: ()=>{\n                    setShowSidebar(!showSidebar);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sidebar \".concat(showSidebar ? \"md:w-[300px] w-[90vw]\" : \"w-[0px] p-0 \", \" transition-all max-md:absolute max-md:left-[50%]\\n          max-md:top-[50%] max-md:translate-x-[-50%] max-md:translate-y-[-50%]\\n        bg-white py-2 flex items-center justify-start md:h-[100vh] h-[90vh]\\n          flex-col \\n          \\n         \"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full \".concat(showSidebar ? \"\" : \"hidden\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"mt-5 flex flex-col w-full \",\n                                    children: links.map((link, index)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"text-center py-3 hover:bg-slate-200 transition-all w-full  \".concat(pathname == link.href ? \"bg-slate-200\" : \"\", \"\\n                    \\n                  \"),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                href: link.href,\n                                                children: link.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, index, false, {\n                                            fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 19\n                                        }, this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute right-[20px] top-[20px] \".concat(showSidebar ? \"show\" : \"hidden\", \" md:hidden\"),\n                                onClick: ()=>{\n                                    setShowSidebar(!showSidebar);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoMdClose_react_icons_io__WEBPACK_IMPORTED_MODULE_8__.IoMdClose, {\n                                    size: \"1.5rem\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" self-start transition-all \".concat(showSidebar ? \"md:w-[calc(100vw_-_300px)] w-full\" : \"w-full\", \"   md:border-l\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dashboard-header bg-white p-8 border-l\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"cursor-pointer \",\n                                    onClick: ()=>{\n                                        setShowSidebar(!showSidebar);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaBarsStaggered_react_icons_fa6__WEBPACK_IMPORTED_MODULE_9__.FaBarsStaggered, {}, void 0, false, {\n                                        fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"max-h-[90vh] overflow-y-auto\",\n                                children: children\n                            }, void 0, false, {\n                                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Layout, \"rF/szGZZXpjjA6aqKE0tSMTaE5s=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUMrQjtBQUNPO0FBQ1k7QUFDUDtBQUNrQjtBQUNoQztBQUNrQjtBQUNXO0FBQ2pCO0FBRzFCLFNBQVNVLE9BQU8sS0FBMkM7UUFBM0MsRUFBRUMsUUFBUSxFQUFpQyxHQUEzQzs7SUFDN0IsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1TLFdBQVdQLDREQUFXQTtJQUU1QixNQUFNUSxRQUFRO1FBQ1o7WUFDRUMsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsVUFBVTtRQUNaO1FBQ0E7WUFBRUgsTUFBTTtZQUFZQyxNQUFNO1lBQXFCQyxNQUFNO1FBQUc7UUFDeEQ7WUFBRUYsTUFBTTtZQUFXQyxNQUFNO1lBQXFCQyxNQUFNO1FBQUc7UUFDdkQ7WUFBRUYsTUFBTTtZQUFXQyxNQUFNO1lBQXNCQyxNQUFNO1FBQUc7S0FDekQ7SUFDRGQsZ0RBQVNBLENBQUM7UUFDUksscURBQVVBLENBQUUsU0FBUVcsSUFBSSxDQUFDLENBQUNDO1lBQ3hCLElBQUlBLE9BQU8sMEJBQTBCO2dCQUNuQyxtQkFBbUI7Z0JBQ25CYixzRUFBaUJBO1lBQ25CO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFHTCxxQkFDRSw4REFBQ2M7OzBCQUNDLDhEQUFDQTtnQkFDQ0MsV0FBVyxZQUVWLE9BRENYLGNBQWMsU0FBUyxVQUN4QjtnQkFDRFksU0FBUztvQkFDUFgsZUFBZSxDQUFDRDtnQkFDbEI7Ozs7OzswQkFFRiw4REFBQ1U7Z0JBQUlDLFdBQVU7O2tDQUViLDhEQUFDRDt3QkFDQ0MsV0FBVyxXQUVWLE9BRENYLGNBQWMsMEJBQTBCLGdCQUN6Qzs7MENBT0QsOERBQUNOLGlEQUFJQTtnQ0FBQ1csTUFBSzswQ0FDVCw0RUFBQ2pCLGtEQUFLQTtvQ0FBQ3lCLEtBQUt4Qix3REFBSUE7b0NBQUV5QixLQUFJOzs7Ozs7Ozs7OzswQ0FFeEIsOERBQUNKO2dDQUFJQyxXQUFXLFVBQXNDLE9BQTVCWCxjQUFjLEtBQUs7MENBQzNDLDRFQUFDZTtvQ0FBR0osV0FBVTs4Q0FDWFIsTUFBTWEsR0FBRyxDQUFDLENBQUNDLE1BQU1DO3dDQUNoQixxQkFDRSw4REFBQ0M7NENBRUNSLFdBQVcsOERBRVYsT0FEQ1QsWUFBWWUsS0FBS1osSUFBSSxHQUFHLGlCQUFpQixJQUMxQztzREFJRCw0RUFBQ1gsaURBQUlBO2dEQUFDVyxNQUFNWSxLQUFLWixJQUFJOzBEQUFHWSxLQUFLYixJQUFJOzs7Ozs7MkNBUDVCYzs7Ozs7b0NBVVg7Ozs7Ozs7Ozs7OzBDQUlKLDhEQUFDUjtnQ0FDQ0MsV0FBVyxvQ0FFVixPQURDWCxjQUFjLFNBQVMsVUFDeEI7Z0NBQ0RZLFNBQVM7b0NBQ1BYLGVBQWUsQ0FBQ0Q7Z0NBQ2xCOzBDQUVBLDRFQUFDVCxzRkFBU0E7b0NBQUM2QixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLckIsOERBQUNWO3dCQUNDQyxXQUFXLDhCQUVWLE9BRENYLGNBQWMsc0NBQXNDLFVBQ3JEOzswQ0FFRCw4REFBQ1U7Z0NBQUlDLFdBQVk7MENBQ2YsNEVBQUNEO29DQUNDQyxXQUFVO29DQUNWQyxTQUFTO3dDQUNQWCxlQUFlLENBQUNEO29DQUNsQjs4Q0FFQSw0RUFBQ1YsbUdBQWVBOzs7Ozs7Ozs7Ozs7Ozs7MENBR3BCLDhEQUFDb0I7Z0NBQUlDLFdBQVU7MENBQWdDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pEO0dBdEd3QkQ7O1FBRUxILHdEQUFXQTs7O0tBRk5HIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kYXNoYm9hcmQvbGF5b3V0LnRzeD83MWU2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vYXNzZXRzL2xvZ28uc3ZnXCI7XG5pbXBvcnQgeyBGYUJhcnNTdGFnZ2VyZWQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmE2XCI7XG5pbXBvcnQgeyBJb01kQ2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgIHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgY2xlYXJMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vdXRpbHMvbG9jYWxzdG9yYWdlXCI7XG5pbXBvcnQgeyBnZXRBbGxKb2JzIH0gZnJvbSBcIi4uL2xpYi9kYXRhXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCBbc2hvd1NpZGViYXIsIHNldFNob3dTaWRlYmFyXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG5cbiAgY29uc3QgbGlua3MgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJTdGF0aXN0aWNcIixcbiAgICAgIGhyZWY6IFwiL2Rhc2hib2FyZC9zdGF0aXN0aWNcIixcbiAgICAgIGljb246IFwiXCIsXG4gICAgICBvdmVydmlldzogXCIvZGFzaGJvYXJkXCIsXG4gICAgfSxcbiAgICB7IG5hbWU6IFwiQWxsIGpvYnNcIiwgaHJlZjogXCIvZGFzaGJvYXJkL2FsbEpvYlwiLCBpY29uOiBcIlwiIH0sXG4gICAgeyBuYW1lOiBcIkFkZCBqb2JcIiwgaHJlZjogXCIvZGFzaGJvYXJkL2FkZEpvYlwiLCBpY29uOiBcIlwiIH0sXG4gICAgeyBuYW1lOiBcIlByb2ZpbGVcIiwgaHJlZjogXCIvZGFzaGJvYXJkL3Byb2ZpbGVcIiwgaWNvbjogXCJcIiB9LFxuICBdO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFsbEpvYnMoYC9qb2JzYCkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzID09IFwiQXV0aGVudGljYXRpb24gaW52YWxpZFwiKSB7XG4gICAgICAgIC8vIHRvYXN0LmVycm9yKHJlcylcbiAgICAgICAgY2xlYXJMb2NhbFN0b3JhZ2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgYmFja2Ryb3AgJHtcbiAgICAgICAgICBzaG93U2lkZWJhciA/IFwic2hvd1wiIDogXCJoaWRkZW5cIlxuICAgICAgICB9IG1kOmhpZGRlbiBmaXhlZCB3LWZ1bGwgaC1mdWxsIG9wYWNpdHktNTUgYmctYmxhY2tgfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U2hvd1NpZGViYXIoIXNob3dTaWRlYmFyKTtcbiAgICAgICAgfX1cbiAgICAgID48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICB7LyogU0lERUJBUiAqL31cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHNpZGViYXIgJHtcbiAgICAgICAgICAgIHNob3dTaWRlYmFyID8gXCJtZDp3LVszMDBweF0gdy1bOTB2d11cIiA6IFwidy1bMHB4XSBwLTAgXCJcbiAgICAgICAgICB9IHRyYW5zaXRpb24tYWxsIG1heC1tZDphYnNvbHV0ZSBtYXgtbWQ6bGVmdC1bNTAlXVxuICAgICAgICAgIG1heC1tZDp0b3AtWzUwJV0gbWF4LW1kOnRyYW5zbGF0ZS14LVstNTAlXSBtYXgtbWQ6dHJhbnNsYXRlLXktWy01MCVdXG4gICAgICAgIGJnLXdoaXRlIHB5LTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBtZDpoLVsxMDB2aF0gaC1bOTB2aF1cbiAgICAgICAgICBmbGV4LWNvbCBcbiAgICAgICAgICBcbiAgICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17bG9nb30gYWx0PVwiXCI+PC9JbWFnZT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgJHtzaG93U2lkZWJhciA/IFwiXCIgOiBcImhpZGRlblwifWB9PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTUgZmxleCBmbGV4LWNvbCB3LWZ1bGwgXCI+XG4gICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWNlbnRlciBweS0zIGhvdmVyOmJnLXNsYXRlLTIwMCB0cmFuc2l0aW9uLWFsbCB3LWZ1bGwgICR7XG4gICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUgPT0gbGluay5ocmVmID8gXCJiZy1zbGF0ZS0yMDBcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmsuaHJlZn0+e2xpbmsubmFtZX08L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIHJpZ2h0LVsyMHB4XSB0b3AtWzIwcHhdICR7XG4gICAgICAgICAgICAgIHNob3dTaWRlYmFyID8gXCJzaG93XCIgOiBcImhpZGRlblwiXG4gICAgICAgICAgICB9IG1kOmhpZGRlbmB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNob3dTaWRlYmFyKCFzaG93U2lkZWJhcik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJb01kQ2xvc2Ugc2l6ZT17XCIxLjVyZW1cIn0+PC9Jb01kQ2xvc2U+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Agc2VsZi1zdGFydCB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgc2hvd1NpZGViYXIgPyBcIm1kOnctW2NhbGMoMTAwdndfLV8zMDBweCldIHctZnVsbFwiIDogXCJ3LWZ1bGxcIlxuICAgICAgICAgIH0gICBtZDpib3JkZXItbGB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGRhc2hib2FyZC1oZWFkZXIgYmctd2hpdGUgcC04IGJvcmRlci1sYH0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTaG93U2lkZWJhcighc2hvd1NpZGViYXIpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RmFCYXJzU3RhZ2dlcmVkPjwvRmFCYXJzU3RhZ2dlcmVkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtaC1bOTB2aF0gb3ZlcmZsb3cteS1hdXRvXCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwibG9nbyIsIkZhQmFyc1N0YWdnZXJlZCIsIklvTWRDbG9zZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZVBhdGhuYW1lIiwiY2xlYXJMb2NhbFN0b3JhZ2UiLCJnZXRBbGxKb2JzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJzaG93U2lkZWJhciIsInNldFNob3dTaWRlYmFyIiwicGF0aG5hbWUiLCJsaW5rcyIsIm5hbWUiLCJocmVmIiwiaWNvbiIsIm92ZXJ2aWV3IiwidGhlbiIsInJlcyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJ1bCIsIm1hcCIsImxpbmsiLCJpbmRleCIsImxpIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/layout.tsx\n"));

/***/ })

});