// ProtectedRoute.js
// import { Route, redirect  } from 'react-router-dom';
// import { useAuth } from './AuthContext';


// import { useNavigate, Outlet } from "react-router-dom";

// function ProtectedRoute() {
//     const navigate = useNavigate();
//     const { isLoggedIn } = useAuth();
//   return isLoggedIn ? <Outlet /> :  navigate('/');
// }

// export default ProtectedRoute;
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  
  return token ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
