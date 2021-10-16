"use strict";
(() => {
var exports = {};
exports.id = "pages/api/story";
exports.ids = ["pages/api/story"];
exports.modules = {

/***/ "./pages/api/story.js":
/*!****************************!*\
  !*** ./pages/api/story.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var fs = __webpack_require__(/*! fs */ "fs");

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

  var filepath = firstPath + '\\dark-stories\\' + file;
  return readJsonFileSync(filepath);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Story);

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/story.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3N0b3J5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsRUFBRSxHQUFHQyxtQkFBTyxDQUFDLGNBQUQsQ0FBaEI7O0FBRUEsU0FBU0MsS0FBVCxDQUFlQyxPQUFmLEVBQXdCQyxRQUF4QixFQUFrQztBQUNqQyxNQUFJQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csS0FBdEI7QUFFQSxNQUFJQyxNQUFNLEdBQUdDLEtBQUssQ0FBQyxjQUFELENBQWxCO0FBRUEsTUFBSUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLE1BQWpCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRCxNQUFMLE1BQWlCRixHQUFHLEdBQUcsQ0FBdkIsQ0FBWCxDQUFiO0FBR0FMLEVBQUFBLFFBQVEsQ0FBQ1UsSUFBVCxDQUFjUCxNQUFNLENBQUNJLE1BQUQsQ0FBcEI7QUFDQTs7QUFFRCxTQUFTSSxnQkFBVCxDQUEwQkMsUUFBMUIsRUFBb0NDLFFBQXBDLEVBQThDO0FBQzdDLE1BQUksT0FBT0EsUUFBUCxJQUFtQixXQUF2QixFQUFvQztBQUNuQ0EsSUFBQUEsUUFBUSxHQUFHLE1BQVg7QUFDQTs7QUFDRCxNQUFJQyxJQUFJLEdBQUdsQixFQUFFLENBQUNtQixZQUFILENBQWdCSCxRQUFoQixFQUEwQkMsUUFBMUIsQ0FBWDtBQUNBLFNBQU9HLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxJQUFYLENBQVA7QUFDQTs7QUFFRCxTQUFTVixLQUFULENBQWVVLElBQWYsRUFBb0I7QUFDbkIsTUFBSUksU0FBUyxHQUFHQyxTQUFTLENBQUNDLEtBQVYsQ0FBZ0IsZ0JBQWhCLEVBQWtDLENBQWxDLENBQWhCOztBQUNHLE1BQUlSLFFBQVEsR0FBR00sU0FBUyxHQUFHLGtCQUFaLEdBQWlDSixJQUFoRDtBQUNBLFNBQU9ILGdCQUFnQixDQUFDQyxRQUFELENBQXZCO0FBQ0g7O0FBRUQsaUVBQWVkLEtBQWY7Ozs7Ozs7Ozs7QUM1QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXJrLXN0b3JpZXMvLi9wYWdlcy9hcGkvc3RvcnkuanMiLCJ3ZWJwYWNrOi8vZGFyay1zdG9yaWVzL2V4dGVybmFsIFwiZnNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZnMgPSByZXF1aXJlKFwiZnNcIilcclxuXHJcbmZ1bmN0aW9uIFN0b3J5KHJlcXVlc3QsIHJlc3BvbnNlKSB7XHJcblx0dmFyIG9wdGlvbnMgPSByZXF1ZXN0LnF1ZXJ5XHJcblxyXG5cdHZhciBqc29uREIgPSBnZXREQihcInN0b3JpZXMuanNvblwiKVxyXG5cclxuXHRsZXQgbWF4ID0ganNvbkRCLmxlbmd0aFxyXG5cdGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSkpXHJcblxyXG5cclxuXHRyZXNwb25zZS5qc29uKGpzb25EQltyYW5kb21dKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWFkSnNvbkZpbGVTeW5jKGZpbGVwYXRoLCBlbmNvZGluZykge1xyXG5cdGlmICh0eXBlb2YgZW5jb2RpbmcgPT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0ZW5jb2RpbmcgPSBcInV0ZjhcIlxyXG5cdH1cclxuXHR2YXIgZmlsZSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlcGF0aCwgZW5jb2RpbmcpXHJcblx0cmV0dXJuIEpTT04ucGFyc2UoZmlsZSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0REIoZmlsZSl7XHJcblx0dmFyIGZpcnN0UGF0aCA9IF9fZGlybmFtZS5zcGxpdChcIlxcXFxkYXJrLXN0b3JpZXNcIilbMF1cclxuICAgIHZhciBmaWxlcGF0aCA9IGZpcnN0UGF0aCArICdcXFxcZGFyay1zdG9yaWVzXFxcXCcgKyBmaWxlO1xyXG4gICAgcmV0dXJuIHJlYWRKc29uRmlsZVN5bmMoZmlsZXBhdGgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwiU3RvcnkiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJvcHRpb25zIiwicXVlcnkiLCJqc29uREIiLCJnZXREQiIsIm1heCIsImxlbmd0aCIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsImpzb24iLCJyZWFkSnNvbkZpbGVTeW5jIiwiZmlsZXBhdGgiLCJlbmNvZGluZyIsImZpbGUiLCJyZWFkRmlsZVN5bmMiLCJKU09OIiwicGFyc2UiLCJmaXJzdFBhdGgiLCJfX2Rpcm5hbWUiLCJzcGxpdCJdLCJzb3VyY2VSb290IjoiIn0=