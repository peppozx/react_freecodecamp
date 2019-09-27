import React from "react";
import { Link } from "react-router-dom";

function MyHeader() {
  return (
    <div>
      <h1>My Header</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
    </div>
  );
}

export default MyHeader;
