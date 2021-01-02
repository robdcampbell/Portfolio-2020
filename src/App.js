import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sandbox from "./components/Sandbox";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Sandbox />
    </Router>
  );
}

export default App;
