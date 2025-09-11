import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jsx as _jsx } from "react/jsx-runtime";
function ToastContainerUi() {
  return /*#__PURE__*/_jsx(ToastContainer, {
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
export default ToastContainerUi;