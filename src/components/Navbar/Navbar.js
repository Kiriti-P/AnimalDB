import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            className="logo"
            src="https://img.icons8.com/ios/512/elephant.png"
            alt="AnimalDB"
          />
        </Link>
        <Link
          style={{
            color: "black",
            textDecoration: "none",

            fontWeight: 540,
          }}
          to="/"
        >
          AnimalDB
        </Link>
      </div>
      <nav className="navbar-menu">
        <li>
          <Link
            style={{
              color: "black",
              textDecoration: "none",
            }}
            to="/About"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            style={{
              color: "black",
              textDecoration: "none",
            }}
            to="/Donate"
          >
            Donate
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
