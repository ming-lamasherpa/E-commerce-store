// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

// Components
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Top navigation bar */}
      <Navbar />

      {/* All routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* Newsletter section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
