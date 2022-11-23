import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../api/useIsAdmin/useIsAdmin";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const AdminRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const [isAdmin,isLoading]=useAdmin(user.email)
  const location = useLocation();

  if (loading || isLoading) {
    return <p className="text-xl text-red-500 font-bold">Loading...</p>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ form: location }} replace></Navigate>;
};

export default AdminRoute;
