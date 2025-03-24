import React from "react";
import { Link } from "react-router-dom";
import "./BurgerCard.css";

const BurgerCard = ({ burger, onDelete }) => {
  return (
    <div className="burger-card">
      <div className="burger-card-content">
        <h3 className="burger-name">{burger.name}</h3>
        <p className="burger-id">ID: {burger.id}</p>
      </div>
      <div className="burger-card-actions">
        <Link to={`/burgers/${burger.id}`} className="btn btn-view">
          View
        </Link>
        <Link to={`/edit-burger/${burger.id}`} className="btn btn-edit">
          Edit
        </Link>
        <button onClick={() => onDelete(burger.id)} className="btn btn-delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BurgerCard;
