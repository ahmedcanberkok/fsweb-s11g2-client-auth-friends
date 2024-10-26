import { Redirect } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = !!(localStorage.getItem("token"));
  return isLoggedIn ? children : <Redirect push to="/login" />;
};

export default PrivateRoute;