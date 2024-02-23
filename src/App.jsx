import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import Products from "./pages/Products";

function App() {
  const [id, setId] = useState(0);
  return (
    // Routing enabled for various routes by react-router-dom
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products setId={setId} />} />
        <Route path="/edit/:id" element={<EditProduct id={id} />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
