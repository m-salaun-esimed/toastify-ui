import { toast } from "react-toastify";
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
  toast[type](content, options);
};
export var showToastSuccess = function showToastSuccess(msg) {
  return showToast("success", msg);
};
export var showToastWarning = function showToastWarning(msg) {
  return showToast("warning", msg);
};
export var showToastError = function showToastError(msg) {
  return showToast("error", msg);
};