import React, { useEffect, useState } from "react";
import Home from "../Home/Home";

const Friends = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      {user.map((pd) => (
        <Home singleUser={pd} key={pd.id} />
      ))}
    </div>
  );
};

export default Friends;
