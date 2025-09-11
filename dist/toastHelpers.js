"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showToastWarning = exports.showToastSuccess = exports.showToastError = void 0;
var _reactToastify = require("react-toastify");
var showToast = function showToast(type, message) {
  var content = /*#__PURE__*/React.createElement("div", null, message.split("\n").map(function (line, index) {
    return /*#__PURE__*/React.createElement("p", {
      key: index
    }, line);
  }));
  var options = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark"
  };
  _reactToastify.toast[type](content, options);
};
var showToastSuccess = exports.showToastSuccess = function showToastSuccess(msg) {
  return showToast("success", msg);
};
var showToastWarning = exports.showToastWarning = function showToastWarning(msg) {
  return showToast("warning", msg);
};
var showToastError = exports.showToastError = function showToastError(msg) {
  return showToast("error", msg);
};