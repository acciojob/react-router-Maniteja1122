import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ margin: "10px" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;
