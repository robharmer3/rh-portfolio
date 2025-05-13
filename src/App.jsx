import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./About";
import NavBar from "./NavBar";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <body>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
