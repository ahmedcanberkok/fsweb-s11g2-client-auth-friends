import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosWithAuth } from "../endpoints/AxiosAuth";


function AddFriendPage() {
  const history = useHistory();
  const [friend, setFriend] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFriend({ ...friend, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", friend)
      .then((res) => {
        history.push("/friends");
      })
      .catch((err) =>{
        window.alert(`Dikkat!! "${err.error}" hatası.. Tekrar deneyin.`)
      }
        
      );
  };

  return (
    <>
      <h1>ADD FRIEND</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">FRIEND NAME</label>
        <input
          id="name"
          type="text"
          name="name"
          value={friend.name}
          placeholder="İsim giriniz."
          onChange={handleChange}
        ></input>
        <label htmlFor="email">FRIEND EMAIL</label>
        <input
          id="email"
          type="email"
          name="email"
          value={friend.email}
          placeholder="E-Mail giriniz"
          onChange={handleChange}
        ></input>
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
}

export default AddFriendPage;