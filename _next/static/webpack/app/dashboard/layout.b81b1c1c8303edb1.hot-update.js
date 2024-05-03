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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo.svg */ \"(app-pages-browser)/./app/assets/logo.svg\");\n/* harmony import */ var _barrel_optimize_names_FaBarsStaggered_react_icons_fa6__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=FaBarsStaggered!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoMdClose_react_icons_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=IoMdClose!=!react-icons/io */ \"(app-pages-browser)/./node_modules/react-icons/io/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/localstorage */ \"(app-pages-browser)/./app/utils/localstorage.ts\");\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/data */ \"(app-pages-browser)/./app/lib/data.ts\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Layout(param) {\n    let { children } = param;\n    _s();\n    const [showSidebar, setShowSidebar] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();\n    const links = [\n        {\n            name: \"Statistic\",\n            href: \"/dashboard/statistic\",\n            icon: \"\",\n            overview: \"/dashboard\"\n        },\n        {\n            name: \"All jobs\",\n            href: \"/dashboard/allJob\",\n            icon: \"\"\n        },\n        {\n            name: \"Add job\",\n            href: \"/dashboard/addJob\",\n            icon: \"\"\n        },\n        {\n            name: \"Profile\",\n            href: \"/dashboard/profile\",\n            icon: \"\"\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (0,_lib_data__WEBPACK_IMPORTED_MODULE_7__.getAllJobs)(\"/jobs\").then((res1)=>{\n            if (res1 == \"Authentication invalid\") {\n                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error(res1);\n                (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_6__.clearLocalStorage)();\n            }\n        });\n    }, [\n        res\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"backdrop \".concat(showSidebar ? \"show\" : \"hidden\", \" md:hidden fixed w-full h-full opacity-55 bg-black\"),\n                onClick: ()=>{\n                    setShowSidebar(!showSidebar);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sidebar \".concat(showSidebar ? \"md:w-[300px] w-[90vw]\" : \"w-[0px] p-0 \", \" transition-all max-md:absolute max-md:left-[50%]\\n          max-md:top-[50%] max-md:translate-x-[-50%] max-md:translate-y-[-50%]\\n        bg-white py-2 flex items-center justify-start md:h-[100vh] h-[90vh]\\n          flex-col \\n          \\n         \"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full \".concat(showSidebar ? \"\" : \"hidden\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"mt-5 flex flex-col w-full \",\n                                    children: links.map((link, index)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"text-center py-3 hover:bg-slate-200 transition-all w-full  \".concat(pathname == link.href ? \"bg-slate-200\" : \"\", \"\\n                    \\n                  \"),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                href: link.href,\n                                                children: link.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, index, false, {\n                                            fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 19\n                                        }, this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute right-[20px] top-[20px] \".concat(showSidebar ? \"show\" : \"hidden\", \" md:hidden\"),\n                                onClick: ()=>{\n                                    setShowSidebar(!showSidebar);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoMdClose_react_icons_io__WEBPACK_IMPORTED_MODULE_9__.IoMdClose, {\n                                    size: \"1.5rem\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" self-start transition-all \".concat(showSidebar ? \"md:w-[calc(100vw_-_300px)] w-full\" : \"w-full\", \"   md:border-l\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dashboard-header bg-white p-8 border-l\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"cursor-pointer \",\n                                    onClick: ()=>{\n                                        setShowSidebar(!showSidebar);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaBarsStaggered_react_icons_fa6__WEBPACK_IMPORTED_MODULE_10__.FaBarsStaggered, {}, void 0, false, {\n                                        fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"max-h-[90vh] overflow-y-auto\",\n                                children: children\n                            }, void 0, false, {\n                                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kananrahimli/Desktop/NEXTJS/Jobster-NEXTJS-/app/dashboard/layout.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Layout, \"rF/szGZZXpjjA6aqKE0tSMTaE5s=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDK0I7QUFDTztBQUNZO0FBQ1A7QUFDa0I7QUFDaEM7QUFDa0I7QUFDVztBQUNqQjtBQUNGO0FBRXhCLFNBQVNXLE9BQU8sS0FBMkM7UUFBM0MsRUFBRUMsUUFBUSxFQUFpQyxHQUEzQzs7SUFDN0IsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1VLFdBQVdSLDREQUFXQTtJQUU1QixNQUFNUyxRQUFRO1FBQ1o7WUFDRUMsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsVUFBVTtRQUNaO1FBQ0E7WUFBRUgsTUFBTTtZQUFZQyxNQUFNO1lBQXFCQyxNQUFNO1FBQUc7UUFDeEQ7WUFBRUYsTUFBTTtZQUFXQyxNQUFNO1lBQXFCQyxNQUFNO1FBQUc7UUFDdkQ7WUFBRUYsTUFBTTtZQUFXQyxNQUFNO1lBQXNCQyxNQUFNO1FBQUc7S0FDekQ7SUFDRGYsZ0RBQVNBLENBQUM7UUFDUksscURBQVVBLENBQUUsU0FBUVksSUFBSSxDQUFDLENBQUNDO1lBQ3hCLElBQUlBLFFBQU8sMEJBQTBCO2dCQUNuQ1osaURBQUtBLENBQUNhLEtBQUssQ0FBQ0Q7Z0JBQ1pkLHNFQUFpQkE7WUFDbkI7UUFDRjtJQUNGLEdBQUc7UUFBQ2M7S0FBSTtJQUdSLHFCQUNFLDhEQUFDRTs7MEJBQ0MsOERBQUNBO2dCQUNDQyxXQUFXLFlBRVYsT0FEQ1osY0FBYyxTQUFTLFVBQ3hCO2dCQUNEYSxTQUFTO29CQUNQWixlQUFlLENBQUNEO2dCQUNsQjs7Ozs7OzBCQUVGLDhEQUFDVztnQkFBSUMsV0FBVTs7a0NBRWIsOERBQUNEO3dCQUNDQyxXQUFXLFdBRVYsT0FEQ1osY0FBYywwQkFBMEIsZ0JBQ3pDOzswQ0FPRCw4REFBQ1AsaURBQUlBO2dDQUFDWSxNQUFLOzBDQUNULDRFQUFDbEIsa0RBQUtBO29DQUFDMkIsS0FBSzFCLHdEQUFJQTtvQ0FBRTJCLEtBQUk7Ozs7Ozs7Ozs7OzBDQUV4Qiw4REFBQ0o7Z0NBQUlDLFdBQVcsVUFBc0MsT0FBNUJaLGNBQWMsS0FBSzswQ0FDM0MsNEVBQUNnQjtvQ0FBR0osV0FBVTs4Q0FDWFQsTUFBTWMsR0FBRyxDQUFDLENBQUNDLE1BQU1DO3dDQUNoQixxQkFDRSw4REFBQ0M7NENBRUNSLFdBQVcsOERBRVYsT0FEQ1YsWUFBWWdCLEtBQUtiLElBQUksR0FBRyxpQkFBaUIsSUFDMUM7c0RBSUQsNEVBQUNaLGlEQUFJQTtnREFBQ1ksTUFBTWEsS0FBS2IsSUFBSTswREFBR2EsS0FBS2QsSUFBSTs7Ozs7OzJDQVA1QmU7Ozs7O29DQVVYOzs7Ozs7Ozs7OzswQ0FJSiw4REFBQ1I7Z0NBQ0NDLFdBQVcsb0NBRVYsT0FEQ1osY0FBYyxTQUFTLFVBQ3hCO2dDQUNEYSxTQUFTO29DQUNQWixlQUFlLENBQUNEO2dDQUNsQjswQ0FFQSw0RUFBQ1Ysc0ZBQVNBO29DQUFDK0IsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS3JCLDhEQUFDVjt3QkFDQ0MsV0FBVyw4QkFFVixPQURDWixjQUFjLHNDQUFzQyxVQUNyRDs7MENBRUQsOERBQUNXO2dDQUFJQyxXQUFZOzBDQUNmLDRFQUFDRDtvQ0FDQ0MsV0FBVTtvQ0FDVkMsU0FBUzt3Q0FDUFosZUFBZSxDQUFDRDtvQ0FDbEI7OENBRUEsNEVBQUNYLG9HQUFlQTs7Ozs7Ozs7Ozs7Ozs7OzBDQUdwQiw4REFBQ3NCO2dDQUFJQyxXQUFVOzBDQUFnQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt6RDtHQXRHd0JEOztRQUVMSix3REFBV0E7OztLQUZOSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGFzaGJvYXJkL2xheW91dC50c3g/NzFlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGxvZ28gZnJvbSBcIi4uL2Fzc2V0cy9sb2dvLnN2Z1wiO1xuaW1wb3J0IHsgRmFCYXJzU3RhZ2dlcmVkIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xuaW1wb3J0IHsgSW9NZENsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7ICB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IGNsZWFyTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL3V0aWxzL2xvY2Fsc3RvcmFnZVwiO1xuaW1wb3J0IHsgZ2V0QWxsSm9icyB9IGZyb20gXCIuLi9saWIvZGF0YVwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgW3Nob3dTaWRlYmFyLCBzZXRTaG93U2lkZWJhcl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuXG4gIGNvbnN0IGxpbmtzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiU3RhdGlzdGljXCIsXG4gICAgICBocmVmOiBcIi9kYXNoYm9hcmQvc3RhdGlzdGljXCIsXG4gICAgICBpY29uOiBcIlwiLFxuICAgICAgb3ZlcnZpZXc6IFwiL2Rhc2hib2FyZFwiLFxuICAgIH0sXG4gICAgeyBuYW1lOiBcIkFsbCBqb2JzXCIsIGhyZWY6IFwiL2Rhc2hib2FyZC9hbGxKb2JcIiwgaWNvbjogXCJcIiB9LFxuICAgIHsgbmFtZTogXCJBZGQgam9iXCIsIGhyZWY6IFwiL2Rhc2hib2FyZC9hZGRKb2JcIiwgaWNvbjogXCJcIiB9LFxuICAgIHsgbmFtZTogXCJQcm9maWxlXCIsIGhyZWY6IFwiL2Rhc2hib2FyZC9wcm9maWxlXCIsIGljb246IFwiXCIgfSxcbiAgXTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRBbGxKb2JzKGAvam9ic2ApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcyA9PSBcIkF1dGhlbnRpY2F0aW9uIGludmFsaWRcIikge1xuICAgICAgICB0b2FzdC5lcnJvcihyZXMpXG4gICAgICAgIGNsZWFyTG9jYWxTdG9yYWdlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtyZXNdKTtcblxuIFxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGJhY2tkcm9wICR7XG4gICAgICAgICAgc2hvd1NpZGViYXIgPyBcInNob3dcIiA6IFwiaGlkZGVuXCJcbiAgICAgICAgfSBtZDpoaWRkZW4gZml4ZWQgdy1mdWxsIGgtZnVsbCBvcGFjaXR5LTU1IGJnLWJsYWNrYH1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldFNob3dTaWRlYmFyKCFzaG93U2lkZWJhcik7XG4gICAgICAgIH19XG4gICAgICA+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgey8qIFNJREVCQVIgKi99XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BzaWRlYmFyICR7XG4gICAgICAgICAgICBzaG93U2lkZWJhciA/IFwibWQ6dy1bMzAwcHhdIHctWzkwdnddXCIgOiBcInctWzBweF0gcC0wIFwiXG4gICAgICAgICAgfSB0cmFuc2l0aW9uLWFsbCBtYXgtbWQ6YWJzb2x1dGUgbWF4LW1kOmxlZnQtWzUwJV1cbiAgICAgICAgICBtYXgtbWQ6dG9wLVs1MCVdIG1heC1tZDp0cmFuc2xhdGUteC1bLTUwJV0gbWF4LW1kOnRyYW5zbGF0ZS15LVstNTAlXVxuICAgICAgICBiZy13aGl0ZSBweS0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgbWQ6aC1bMTAwdmhdIGgtWzkwdmhdXG4gICAgICAgICAgZmxleC1jb2wgXG4gICAgICAgICAgXG4gICAgICAgICBgfVxuICAgICAgICA+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ299IGFsdD1cIlwiPjwvSW1hZ2U+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1mdWxsICR7c2hvd1NpZGViYXIgPyBcIlwiIDogXCJoaWRkZW5cIn1gfT5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC01IGZsZXggZmxleC1jb2wgdy1mdWxsIFwiPlxuICAgICAgICAgICAgICB7bGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1jZW50ZXIgcHktMyBob3ZlcjpiZy1zbGF0ZS0yMDAgdHJhbnNpdGlvbi1hbGwgdy1mdWxsICAke1xuICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lID09IGxpbmsuaHJlZiA/IFwiYmctc2xhdGUtMjAwXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rLmhyZWZ9PntsaW5rLm5hbWV9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSByaWdodC1bMjBweF0gdG9wLVsyMHB4XSAke1xuICAgICAgICAgICAgICBzaG93U2lkZWJhciA/IFwic2hvd1wiIDogXCJoaWRkZW5cIlxuICAgICAgICAgICAgfSBtZDpoaWRkZW5gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRTaG93U2lkZWJhcighc2hvd1NpZGViYXIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW9NZENsb3NlIHNpemU9e1wiMS41cmVtXCJ9PjwvSW9NZENsb3NlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogSGVhZGVyICovfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgIHNlbGYtc3RhcnQgdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgICAgIHNob3dTaWRlYmFyID8gXCJtZDp3LVtjYWxjKDEwMHZ3Xy1fMzAwcHgpXSB3LWZ1bGxcIiA6IFwidy1mdWxsXCJcbiAgICAgICAgICB9ICAgbWQ6Ym9yZGVyLWxgfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BkYXNoYm9hcmQtaGVhZGVyIGJnLXdoaXRlIHAtOCBib3JkZXItbGB9PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U2hvd1NpZGViYXIoIXNob3dTaWRlYmFyKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZhQmFyc1N0YWdnZXJlZD48L0ZhQmFyc1N0YWdnZXJlZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LWgtWzkwdmhdIG92ZXJmbG93LXktYXV0b1wiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsImxvZ28iLCJGYUJhcnNTdGFnZ2VyZWQiLCJJb01kQ2xvc2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsImNsZWFyTG9jYWxTdG9yYWdlIiwiZ2V0QWxsSm9icyIsInRvYXN0IiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJzaG93U2lkZWJhciIsInNldFNob3dTaWRlYmFyIiwicGF0aG5hbWUiLCJsaW5rcyIsIm5hbWUiLCJocmVmIiwiaWNvbiIsIm92ZXJ2aWV3IiwidGhlbiIsInJlcyIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNyYyIsImFsdCIsInVsIiwibWFwIiwibGluayIsImluZGV4IiwibGkiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/layout.tsx\n"));

/***/ })

});