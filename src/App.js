import React from "react";
import { Route, Routes } from "react-router-dom";
import Friends from "./Components/Friends/Friends";
import Home from "./Components/Home/Home";
// import Home from "./Components/Home/Home";
import ShowDetails from "./Components/ShowDetails/ShowDetails";

const App = () => {
  return (
    <div>
      {/* <Friends /> */}
      {/* <h1>Welcome to our app</h1> */}
      <Routes>
        <Route exact path="/home" element={<Friends />} />

        <Route path="/" element={<Friends />} />

        <Route exact path="/details/:key" element={<ShowDetails />} />
      </Routes>
    </div>
  );
};

export default App;
