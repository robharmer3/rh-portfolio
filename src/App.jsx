import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Common/NavBar";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

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
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
