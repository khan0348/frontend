import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getBurgerById, deleteBurger } from "../Api";
import "./BurgerDetail.css";

const BurgerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [burger, setBurger] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBurger = async () => {
      try {
        setLoading(true);
        const response = await getBurgerById(id);
        if (response.status === "success") {
          setBurger(response.project);
        } else {
          setError("Failed to fetch burger details");
        }
      } catch (err) {
        setError("Error connecting to server");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBurger();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this burger?")) {
      try {
        const response = await deleteBurger(id);
        if (response.status === "success") {
          navigate("/burgers");
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
    return <div className="loading">Loading burger details...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!burger) {
    return <div className="not-found">Burger not found</div>;
  }

  return (
    <div className="burger-detail">
      <div className="burger-detail-card">
        <div className="burger-detail-header">
          <h2>{burger.name}</h2>
          <span className="burger-id">ID: {burger.id}</span>
        </div>
        <div className="burger-detail-actions">
          <Link to={`/edit-burger/${burger.id}`} className="btn btn-edit">
            Edit Burger
          </Link>
          <button onClick={handleDelete} className="btn btn-delete">
            Delete Burger
          </button>
          <Link to="/burgers" className="btn btn-back">
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerDetail;
