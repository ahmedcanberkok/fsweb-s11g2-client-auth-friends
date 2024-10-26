import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../endpoints/AxiosAuth";

function FriendsPage() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setFriends(res.data);
        console.log(res.data);
      })
      .catch((err) =>
      window.alert(err.response.data.error)
      );
  }, []);

  return (
    <>
      <h1>FRIENDS LIST</h1>
      {friends.map((item) => {
        return (
          <div key={item.id}>
            <h2>
              -{item.name.toUpperCase()} - {item.email.toUpperCase()}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default FriendsPage;