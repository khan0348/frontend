import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BurgerCard from "../components/BurgerCard";
import { getBurgers, deleteBurger } from "../Api";
import "./BurgerList.css";

const BurgerList = () => {
  const [burgers, setBurgers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBurgers = async () => {
      try {
        setLoading(true);
        const response = await getBurgers();
        if (response.status === "success") {
          setBurgers(response.projects);
        } else {
          setError("Failed to fetch burgers");
        }
      } catch (err) {
        setError("Error connecting to server");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBurgers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this burger?")) {
      try {
        const response = await deleteBurger(id);
        if (response.status === "success") {
          setBurgers(burgers.filter((burger) => burger.id !== id));
        } else {
          setError("Failed to delete burger");
        }
      } catch (err) {
        setError("Error connecting to server");
        console.error(err);
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading burgers...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="burger-list-container">
      <div className="burger-list-header">
        <h2>Burger Menu</h2>
        <Link to="/add-burger" className="btn btn-add">
          Add New Burger
        </Link>
      </div>

      {burgers.length === 0 ? (
        <div className="no-burgers">
          <p>No burgers found. Add your first burger to get started!</p>
          <Link to="/add-burger" className="btn btn-primary">
            Add Burger
          </Link>
        </div>
      ) : (
        <div className="burger-list">
          {burgers.map((burger) => (
            <BurgerCard
              key={burger.id}
              burger={burger}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BurgerList;
