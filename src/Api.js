// API service to interact with the backend

const API_URL =
  "https://web-development-practice-production.up.railway.app/api";

// Get all burgers
export const getBurgers = async () => {
  try {
    const response = await fetch(`${API_URL}/projects`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching burgers:", error);
    throw error;
  }
};

// Get burger by ID
export const getBurgerById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/projects/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching burger ${id}:`, error);
    throw error;
  }
};

// Add new burger
export const addBurger = async (burgerData) => {
  try {
    const response = await fetch(`${API_URL}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(burgerData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding burger:", error);
    throw error;
  }
};

// Update burger
export const updateBurger = async (id, burgerData) => {
  try {
    const response = await fetch(`${API_URL}/projects/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(burgerData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error updating burger ${id}:`, error);
    throw error;
  }
};

// Delete burger
export const deleteBurger = async (id) => {
  try {
    const response = await fetch(`${API_URL}/projects/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error deleting burger ${id}:`, error);
    throw error;
  }
};
