import React from "react";
import { Routes, Route } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div>
      <h1>hello</h1>
      <Routes>
        {/* <Switch> */}
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        {/* </Switch> */}
      </Routes>

      {/* <Routes>
          <Route path="/log" element={<Login/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/developer" element={<Developer/>}/>
        </Routes> */}
    </div>
  );
}

export default App;
