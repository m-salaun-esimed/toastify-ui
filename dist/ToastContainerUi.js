import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ToastContainerUi() {
  return /*#__PURE__*/React.createElement(ToastContainer, {
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