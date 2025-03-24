import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Burger Boss</h1>
        <p>Manage your burger projects with ease</p>
        <div className="hero-buttons">
          <Link to="/burgers" className="btn btn-primary">
            View Burgers
          </Link>
          <Link to="/add-burger" className="btn btn-secondary">
            Add New Burger
          </Link>
        </div>
      </div>
      <div className="features">
        <div className="feature">
          <h3>Create</h3>
          <p>Add new burger projects to your menu</p>
        </div>
        <div className="feature">
          <h3>Manage</h3>
          <p>View and edit your burger collection</p>
        </div>
        <div className="feature">
          <h3>Organize</h3>
          <p>Keep track of all your burger ideas</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
