import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;