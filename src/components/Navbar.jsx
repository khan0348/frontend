import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">🍔 Burger Boss</span>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/burgers" className="nav-link">
              Burgers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-burger" className="nav-link">
              Add Burger
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
