import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Check if still loading
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  // Check if user is authenticated
  if (user) {
    return children;
  }

  // Redirect to login if not authenticated
  return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;
