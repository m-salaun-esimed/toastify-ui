"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactToastify = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
function ToastContainerUi() {
  return /*#__PURE__*/React.createElement(_reactToastify.ToastContainer, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "dark"
  });
}
var _default = exports["default"] = ToastContainerUi;