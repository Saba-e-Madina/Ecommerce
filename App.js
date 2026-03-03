import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  // Cart state
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Navbar cartCount={cartItems.length} />
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/products"
            element={<Products />}
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetails
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;