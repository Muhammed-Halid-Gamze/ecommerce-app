import React from "react";
import {Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import SignIn from "./pages/Auth/SignIn/SignIn";
import SignUp from "./pages/Auth/SıgnUp/SignUp";
import ProductDetail from "./pages/ProductDetail/ProductDetail"

function App() {
  return (
    <>
      <div>

        <Navbar />
        
        <div id="content">

          <Routes>
            <Route path="/" exact element={<Products/>} />
            <Route path="/product/:product_id"  element={<ProductDetail/>} />
            <Route path="signin" element={<SignIn/>} />
            <Route path="signup" element={<SignUp/>} />
          </Routes>
        </div>
        
      </div>
    </>
  );
}

export default App;
