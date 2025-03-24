import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBurger } from "../Api";
import "./BurgerForm.css";

const AddBurger = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || name.length < 3) {
      setError("Burger name must be at least 3 characters");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await addBurger({ name });

      if (response.status === "success") {
        navigate("/burgers");
      } else {
        setError(response.message || "Failed to add burger");
      }
    } catch (err) {
      setError("Error connecting to server");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="burger-form-container">
      <h2>Add New Burger</h2>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="burger-form">
        <div className="form-group">
          <label htmlFor="name">Burger Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter burger name"
            required
            minLength="3"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-submit" disabled={loading}>
            {loading ? "Adding..." : "Add Burger"}
          </button>
          <button
            type="button"
            className="btn btn-cancel"
            onClick={() => navigate("/burgers")}
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBurger;
