import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBurgerById, updateBurger } from "../Api";
import "./BurgerForm.css";

const EditBurger = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBurger = async () => {
      try {
        setLoading(true);
        const response = await getBurgerById(id);

        if (response.status === "success") {
          setName(response.project.name);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || name.length < 3) {
      setError("Burger name must be at least 3 characters");
      return;
    }

    try {
      setSaving(true);
      setError(null);

      const response = await updateBurger(id, { name });

      if (response.status === "success") {
        navigate(`/burgers/${id}`);
      } else {
        setError(response.message || "Failed to update burger");
      }
    } catch (err) {
      setError("Error connecting to server");
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading burger details...</div>;
  }

  return (
    <div className="burger-form-container">
      <h2>Edit Burger</h2>

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
          <button type="submit" className="btn btn-submit" disabled={saving}>
            {saving ? "Saving..." : "Save Changes"}
          </button>
          <button
            type="button"
            className="btn btn-cancel"
            onClick={() => navigate(`/burgers/${id}`)}
            disabled={saving}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBurger;
