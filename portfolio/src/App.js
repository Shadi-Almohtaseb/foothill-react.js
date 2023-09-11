import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

function App() {
  const [displaySideBar, setDisplaySideBar] = useState(false);

  return (
    <BrowserRouter>
      <NavBar setDisplaySideBar={setDisplaySideBar} />
      <Sidebar
        displaySideBar={displaySideBar}
        setDisplaySideBar={setDisplaySideBar}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
