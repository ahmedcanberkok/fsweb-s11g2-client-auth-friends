import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../endpoints/AxiosAuth";
import { Context } from "../Context";


function LoginPage() {
  const history = useHistory();
  const {setIsLoggedIn} = useContext(Context);

  const [user, setUser] = useState({
    username: "workintech",
    password: "wecandoit",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        // console.log(res);
        setIsLoggedIn(true);
        history.push("/friends");
      })
      .catch((err) =>
        window.alert(`Dikkat!! "${err.message}" hatası.. Tekrar deneyin.`)
      );
  };

  return (
    <>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">USERNAME</label>
        <input
          id="username"
          type="text"
          name="username"
          value={user.username}
          placeholder="Kullanıcı Adınızı Giriniz."
          onChange={handleChange}
        ></input>
        <label htmlFor="password">PASSWORD</label>
        <input
          id="password"
          type="password"
          name="password"
          value={user.password}
          placeholder="Şifre Giriniz."
          onChange={handleChange}
        ></input>
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
}

export default LoginPage;