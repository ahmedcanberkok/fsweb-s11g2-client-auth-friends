import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../endpoints/AxiosAuth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Context } from "../Context";


const HeaderPage = () => {
  const history = useHistory();
  const {isLoggedIn, setIsLoggedIn} = useContext(Context);
  const logoutHandler = () => {
    axiosWithAuth()
      .post("/api/logout")
      .then((res) => {
        history.push("/login");
        localStorage.setItem("token", "");
        setIsLoggedIn(false);
      })
      .catch((err) => {
        // console.log(err.response.data.error)
        window.alert(err.response.data.error);
      });
  };

  return (
    <div>
      <h1>FRIENDS DATABASE</h1>
      <Link to="/login">
        {!isLoggedIn &&<button>LOGIN.</button>}
      </Link>

        <Link to="/friends">
          {isLoggedIn && <button>FRIENDLIST.</button>}
        </Link>
        <Link to="/friends/add">
          {isLoggedIn&&<button>ADDFRIEND.</button>}
        </Link>
      <Link to="/logout">
        {isLoggedIn && <button onClick={logoutHandler}>LOGOUT</button>}
      </Link>
    </div>
  );
};

export default HeaderPage;