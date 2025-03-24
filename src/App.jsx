import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import BurgerList from "./pages/BurgerList.jsx";
import BurgerDetail from "./pages/BurgerDetails.jsx";
import AddBurger from "./pages/AddBurger.jsx";
import EditBurger from "./pages/EditBurger.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/burgers" element={<BurgerList />} />
            <Route path="/burgers/:id" element={<BurgerDetail />} />
            <Route path="/add-burger" element={<AddBurger />} />
            <Route path="/edit-burger/:id" element={<EditBurger />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
