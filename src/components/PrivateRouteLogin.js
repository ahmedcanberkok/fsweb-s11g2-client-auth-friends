import { Redirect } from "react-router-dom";

const PrivateRouteLogin = ({ children }) => {
  const isLoggedIn = !!(localStorage.getItem("token"));
  return isLoggedIn ? <Redirect push to="/friends" /> : children;
};

export default PrivateRouteLogin;