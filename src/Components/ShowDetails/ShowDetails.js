import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowDetails = () => {
  const { key } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${key}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  console.log(details);
  const { name, username, email, address } = details;
  return (
    <div
      style={{
        width: "280px",
        border: "3px solid blue",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h1>This is show details of the userId: {key} </h1>
      <p>Name: {name}</p>
      <p>Full Name: {username}</p>
      <p>Email: {email}</p>
      {/* <p>Address: {address.street}</p> */}
      {/* <p>City: {address.city}</p> */}
    </div>
  );
};

export default ShowDetails;
