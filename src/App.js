import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div>

        <Navbar />
        <Home/>
        <Routes>
          <Route path="/" component={Home} />
        </Routes>
      </div>
    </>
  );
}

export default App;
