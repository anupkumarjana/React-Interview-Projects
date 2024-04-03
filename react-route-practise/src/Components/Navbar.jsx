import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-40 py-4">
      <h1>logo</h1>
      <ul className="flex gap-10 cursor-pointer">
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/about">About </Link>
        </li>
        <li>
          <Link to="/services">Services </Link>
        </li>
        <li>
          <Link to="/contact">Contact </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
