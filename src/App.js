import "./App.css";
import HeaderPage from "./pages/HeaderPage";
import LoginPage from "./pages/LoginPage";

import { Route, Link, Switch } from "react-router-dom";

import FriendsPage from "./pages/FriendsPage";
import AddFriendPage from "./pages/AddFriendPage";
import PrivateRoute from "./components/PrivateRoute";
import PrivateRouteLogin from "./components/PrivateRouteLogin";

function App() {
  return (
    <div className="App">
      <HeaderPage />

      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/login">
          <PrivateRouteLogin>
            <LoginPage />
          </PrivateRouteLogin>
        </Route>
        <Route path="/friends/add">
          <PrivateRoute>
            <AddFriendPage />
          </PrivateRoute>
        </Route>
        <Route path="/friends">
          <PrivateRoute>
            <FriendsPage />
          </PrivateRoute>
        </Route>
      </Switch>
    </div>
  );
}

export default App;