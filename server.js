/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/render.js":
/*!**************************!*\
  !*** ./server/render.js ***!
  \**************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ../src/router/Routes */ \"./src/router/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (pathname, store, context) {\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: pathname, context: context },\n      _react2.default.createElement(\n        'div',\n        null,\n        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n      )\n    )\n  ));\n\n  return '\\n  <!DOCTYPE html>\\n      <html lang=\"en\">\\n      <head>\\n        <meta charset=\"UTF-8\">\\n        <title>Title</title>\\n      </head>\\n      <body>\\n      \\n      <div id=\"app\">' + content + '</div>\\n      <script>\\n        window.INITIAL_STATE = ' + JSON.stringify(store.getState()) + '\\n      </script>\\n      <script src=\"dist/bundle.js\"></script>\\n      </body>\\n      </html>\\n  ';\n};\n\n//# sourceURL=webpack://react-ssr/./server/render.js?");

/***/ }),

/***/ "./src/components/Posts/index.js":
/*!***************************************!*\
  !*** ./src/components/Posts/index.js ***!
  \***************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _action = __webpack_require__(/*! ../../redux/action */ \"./src/redux/action/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Posts = function Posts() {\n\n    var dispatch = (0, _reactRedux.useDispatch)();\n    var users = (0, _reactRedux.useSelector)(function (state) {\n        return state.users.users;\n    });\n\n    (0, _react.useEffect)(function () {\n        dispatch((0, _action.fetchUsers)());\n    }, []);\n\n    return _react2.default.createElement(\n        'div',\n        null,\n        users.map(function (el) {\n            return _react2.default.createElement(\n                'div',\n                { key: el.id },\n                _react2.default.createElement(\n                    'h3',\n                    null,\n                    el.name\n                )\n            );\n        })\n    );\n};\n\nPosts.fetching = function (_ref) {\n    var dispatch = _ref.dispatch,\n        path = _ref.path;\n\n    console.log('PATH', path);\n    return [dispatch((0, _action.fetchUsers)())];\n};\n\nexports.default = Posts;\n\n//# sourceURL=webpack://react-ssr/./src/components/Posts/index.js?");

/***/ }),

/***/ "./src/redux/actionTypes/config.js":
/*!*****************************************!*\
  !*** ./src/redux/actionTypes/config.js ***!
  \*****************************************/
/*! flagged exports */
/*! export ROOT [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar ROOT = exports.ROOT = 'https://jsonplaceholder.typicode.com';\n\n//# sourceURL=webpack://react-ssr/./src/redux/actionTypes/config.js?");

/***/ }),

/***/ "./src/redux/actionTypes/index.js":
/*!****************************************!*\
  !*** ./src/redux/actionTypes/index.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 11:24-31 */
/*! CommonJS bailout: exports is used directly at 23:24-31 */
/*! CommonJS bailout: exports is used directly at 35:24-31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _posts = __webpack_require__(/*! ./posts */ \"./src/redux/actionTypes/posts.js\");\n\nObject.keys(_posts).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _posts[key];\n    }\n  });\n});\n\nvar _config = __webpack_require__(/*! ./config */ \"./src/redux/actionTypes/config.js\");\n\nObject.keys(_config).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _config[key];\n    }\n  });\n});\n\nvar _users = __webpack_require__(/*! ./users */ \"./src/redux/actionTypes/users.js\");\n\nObject.keys(_users).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _users[key];\n    }\n  });\n});\n\n//# sourceURL=webpack://react-ssr/./src/redux/actionTypes/index.js?");

/***/ }),

/***/ "./src/redux/actionTypes/posts.js":
/*!****************************************!*\
  !*** ./src/redux/actionTypes/posts.js ***!
  \****************************************/
/*! flagged exports */
/*! export FETCH_POSTS_FAILURE [provided] [no usage info] [missing usage info prevents renaming] */
/*! export FETCH_POSTS_START [provided] [no usage info] [missing usage info prevents renaming] */
/*! export FETCH_POSTS_SUCCESS [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar FETCH_POSTS_START = exports.FETCH_POSTS_START = 'FETCH_POSTS_START';\nvar FETCH_POSTS_SUCCESS = exports.FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';\nvar FETCH_POSTS_FAILURE = exports.FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';\n\n//# sourceURL=webpack://react-ssr/./src/redux/actionTypes/posts.js?");

/***/ }),

/***/ "./src/redux/actionTypes/users.js":
/*!****************************************!*\
  !*** ./src/redux/actionTypes/users.js ***!
  \****************************************/
/*! flagged exports */
/*! export FETCH_USERS_FAILURE [provided] [no usage info] [missing usage info prevents renaming] */
/*! export FETCH_USERS_START [provided] [no usage info] [missing usage info prevents renaming] */
/*! export FETCH_USERS_SUCCESS [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar FETCH_USERS_START = exports.FETCH_USERS_START = 'FETCH_USERS_START';\nvar FETCH_USERS_SUCCESS = exports.FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';\nvar FETCH_USERS_FAILURE = exports.FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';\n\n//# sourceURL=webpack://react-ssr/./src/redux/actionTypes/users.js?");

/***/ }),

/***/ "./src/redux/action/index.js":
/*!***********************************!*\
  !*** ./src/redux/action/index.js ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 11:24-31 */
/*! CommonJS bailout: exports is used directly at 23:24-31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _posts = __webpack_require__(/*! ./posts */ \"./src/redux/action/posts.js\");\n\nObject.keys(_posts).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _posts[key];\n    }\n  });\n});\n\nvar _users = __webpack_require__(/*! ./users */ \"./src/redux/action/users.js\");\n\nObject.keys(_users).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _users[key];\n    }\n  });\n});\n\n//# sourceURL=webpack://react-ssr/./src/redux/action/index.js?");

/***/ }),

/***/ "./src/redux/action/posts.js":
/*!***********************************!*\
  !*** ./src/redux/action/posts.js ***!
  \***********************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fetchPosts [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.fetchPosts = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _actionTypes = __webpack_require__(/*! ../actionTypes */ \"./src/redux/actionTypes/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar fetchPosts = exports.fetchPosts = function fetchPosts() {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {\n            var response, posts;\n            return _regenerator2.default.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            dispatch({\n                                type: _actionTypes.FETCH_POSTS_START\n                            });\n                            _context.prev = 1;\n                            _context.next = 4;\n                            return _axios2.default.get(_actionTypes.ROOT + \"/posts\");\n\n                        case 4:\n                            response = _context.sent;\n\n                            // console.log('response', response);\n                            posts = response.data;\n\n                            dispatch({\n                                type: _actionTypes.FETCH_POSTS_SUCCESS,\n                                payload: posts\n\n                            });\n                            _context.next = 12;\n                            break;\n\n                        case 9:\n                            _context.prev = 9;\n                            _context.t0 = _context[\"catch\"](1);\n\n                            dispatch({\n                                type: _actionTypes.FETCH_POSTS_FAILURE,\n                                payload: _context.t0,\n                                error: true\n                            });\n\n                        case 12:\n                        case \"end\":\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined, [[1, 9]]);\n        }));\n\n        return function (_x) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack://react-ssr/./src/redux/action/posts.js?");

/***/ }),

/***/ "./src/redux/action/users.js":
/*!***********************************!*\
  !*** ./src/redux/action/users.js ***!
  \***********************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fetchUsers [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.fetchUsers = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _actionTypes = __webpack_require__(/*! ../actionTypes */ \"./src/redux/actionTypes/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar fetchUsers = exports.fetchUsers = function fetchUsers() {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {\n            var response, users;\n            return _regenerator2.default.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            dispatch({\n                                type: _actionTypes.FETCH_USERS_START\n                            });\n                            _context.prev = 1;\n                            _context.next = 4;\n                            return _axios2.default.get(_actionTypes.ROOT + \"/users\");\n\n                        case 4:\n                            response = _context.sent;\n\n                            // console.log('response', response);\n                            users = response.data;\n\n                            dispatch({\n                                type: _actionTypes.FETCH_USERS_SUCCESS,\n                                payload: users\n\n                            });\n                            _context.next = 12;\n                            break;\n\n                        case 9:\n                            _context.prev = 9;\n                            _context.t0 = _context[\"catch\"](1);\n\n                            dispatch({\n                                type: _actionTypes.FETCH_USERS_FAILURE,\n                                payload: _context.t0,\n                                error: true\n                            });\n\n                        case 12:\n                        case \"end\":\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined, [[1, 9]]);\n        }));\n\n        return function (_x) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack://react-ssr/./src/redux/action/users.js?");

/***/ }),

/***/ "./src/redux/reducers/index.js":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.js ***!
  \*************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _posts = __webpack_require__(/*! ./posts */ \"./src/redux/reducers/posts.js\");\n\nvar _posts2 = _interopRequireDefault(_posts);\n\nvar _users = __webpack_require__(/*! ./users */ \"./src/redux/reducers/users.js\");\n\nvar _users2 = _interopRequireDefault(_users);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n  posts: _posts2.default,\n  users: _users2.default\n});\n\n//# sourceURL=webpack://react-ssr/./src/redux/reducers/index.js?");

/***/ }),

/***/ "./src/redux/reducers/posts.js":
/*!*************************************!*\
  !*** ./src/redux/reducers/posts.js ***!
  \*************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _actionTypes = __webpack_require__(/*! ../actionTypes */ \"./src/redux/actionTypes/index.js\");\n\nvar INITIAL_STATE = {\n  posts: [],\n  isFetching: false,\n  lastUpdate: Date.now()\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _actionTypes.FETCH_POSTS_SUCCESS:\n      {\n        return _extends({}, state, { posts: action.payload });\n      }\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://react-ssr/./src/redux/reducers/posts.js?");

/***/ }),

/***/ "./src/redux/reducers/users.js":
/*!*************************************!*\
  !*** ./src/redux/reducers/users.js ***!
  \*************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _actionTypes = __webpack_require__(/*! ../actionTypes */ \"./src/redux/actionTypes/index.js\");\n\nvar INITIAL_STATE = {\n  users: [],\n  isFetching: false,\n  lastUpdate: Date.now()\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _actionTypes.FETCH_USERS_SUCCESS:\n      {\n        return _extends({}, state, { users: action.payload });\n      }\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://react-ssr/./src/redux/reducers/users.js?");

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reducers = __webpack_require__(/*! ./reducers */ \"./src/redux/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n\n//# sourceURL=webpack://react-ssr/./src/redux/store.js?");

/***/ }),

/***/ "./src/router/Routes.js":
/*!******************************!*\
  !*** ./src/router/Routes.js ***!
  \******************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _Posts = __webpack_require__(/*! ../components/Posts */ \"./src/components/Posts/index.js\");\n\nvar _Posts2 = _interopRequireDefault(_Posts);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [{\n  component: _Posts2.default,\n  path: '/',\n  exact: true\n}];\n\n//# sourceURL=webpack://react-ssr/./src/router/Routes.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"axios\");;\n\n//# sourceURL=webpack://react-ssr/external_%22axios%22?");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"babel-runtime/regenerator\");;\n\n//# sourceURL=webpack://react-ssr/external_%22babel-runtime/regenerator%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"express\");;\n\n//# sourceURL=webpack://react-ssr/external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"react\");;\n\n//# sourceURL=webpack://react-ssr/external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"react-dom/server\");;\n\n//# sourceURL=webpack://react-ssr/external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"react-redux\");;\n\n//# sourceURL=webpack://react-ssr/external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"react-router-config\");;\n\n//# sourceURL=webpack://react-ssr/external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"react-router-dom\");;\n\n//# sourceURL=webpack://react-ssr/external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"redux\");;\n\n//# sourceURL=webpack://react-ssr/external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"redux-thunk\");;\n\n//# sourceURL=webpack://react-ssr/external_%22redux-thunk%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _render = __webpack_require__(/*! ./render */ \"./server/render.js\");\n\nvar _render2 = _interopRequireDefault(_render);\n\nvar _store = __webpack_require__(/*! ../src/redux/store */ \"./src/redux/store.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _Routes = __webpack_require__(/*! ../src/router/Routes */ \"./src/router/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar PORT = process.env.PORT || 8079;\nvar app = (0, _express2.default)();\n\napp.use('/dist', _express2.default.static('dist'));\napp.use('/img', _express2.default.static('img'));\napp.get('*', function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {\n    var actions, context, content;\n    return _regenerator2.default.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            actions = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref2) {\n              var route = _ref2.route;\n              return route.component.fetching ? route.component.fetching(_extends({}, _store2.default, { path: req.path })) : null;\n            }).map(function () {\n              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(actions) {\n                return _regenerator2.default.wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        _context.next = 2;\n                        return Promise.all((actions || []).map(function (p) {\n                          return p && new Promise(function (resolve) {\n                            return p.then(resolve).catch(resolve);\n                          });\n                        }));\n\n                      case 2:\n                        return _context.abrupt('return', _context.sent);\n\n                      case 3:\n                      case 'end':\n                        return _context.stop();\n                    }\n                  }\n                }, _callee, undefined);\n              }));\n\n              return function (_x3) {\n                return _ref3.apply(this, arguments);\n              };\n            }());\n            _context2.next = 3;\n            return Promise.all(actions);\n\n          case 3:\n            context = {};\n            content = (0, _render2.default)(req.path, _store2.default, context);\n\n\n            res.send(content);\n\n          case 6:\n          case 'end':\n            return _context2.stop();\n        }\n      }\n    }, _callee2, undefined);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\napp.listen(PORT, function () {\n  return console.log('Frontend service listening on port: ' + PORT);\n});\n\n//# sourceURL=webpack://react-ssr/./server/index.js?");
})();

/******/ })()
;