import React from "react";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./Home.css";
const Home = (props) => {
  const { name, email, id } = props.singleUser;
  let history = useHistory();
  const handleShowDetails = () => {
    history.push(`/details/${id}`);
  };
  return (
    <div className="home-style">
      <h3>Name: {name}</h3>
      <h4>Email: {email}</h4>
      {/* <Link to={"/details/" + id}>
        
      </Link> */}
      <button onClick={handleShowDetails}>Show Details</button>
    </div>
  );
};

export default Home;
