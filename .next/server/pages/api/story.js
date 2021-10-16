"use strict";
(() => {
var exports = {};
exports.id = 698;
exports.ids = [698];
exports.modules = {

/***/ 922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var fs = __webpack_require__(747);

function Story(request, response) {
  var options = request.query;
  var jsonDB = getDB("stories.json");
  let max = jsonDB.length;
  let random = Math.floor(Math.random() * (max + 1));
  response.json(jsonDB[random]);
}

function readJsonFileSync(filepath, encoding) {
  if (typeof encoding == "undefined") {
    encoding = "utf8";
  }

  var file = fs.readFileSync(filepath, encoding);
  return JSON.parse(file);
}

function getDB(file) {
  var firstPath = __dirname.split("\\dark-stories")[0];

  var filepath = firstPath + "\\dark-stories\\" + file;
  return readJsonFileSync(filepath);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Story);

/***/ }),

/***/ 747:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(922));
module.exports = __webpack_exports__;

})();