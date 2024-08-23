/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    toast.info("Bu sayfaya erişmek için giriş yapınız.");
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
