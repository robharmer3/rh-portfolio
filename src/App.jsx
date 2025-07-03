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
import ProjectSingle from "./Project/ProjectSingle";

import Skills from "./Skills";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:project_id" element={<ProjectSingle />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
