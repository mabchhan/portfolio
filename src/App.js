import Header from "./components/header/Header";
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Project from "./components/pages/Project";
import About from "./components/pages/About";

function App() {
  return (
    <div className="container">
      <Header />
      <div>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
