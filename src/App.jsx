import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./About";
import NavBar from "./NavBar";
import Home from "./Home";
import Header from "./Header";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer>
        <p>Follow me on:</p>
      </footer>
    </>
  );
}

export default App;
