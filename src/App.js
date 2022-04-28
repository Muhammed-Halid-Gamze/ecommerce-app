import React from "react";
import {Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Auth/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import SignIn from "./pages/Auth/SignIn/SignIn";
import SignUp from "./pages/Auth/SıgnUp/SignUp";

function App() {
  return (
    <>
      <div>

        <Navbar />
        
        <div id="content">

          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="signin" element={<SignIn/>} />
            <Route path="signup" element={<SignUp/>} />
          </Routes>
        </div>
        
      </div>
    </>
  );
}

export default App;
