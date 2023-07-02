import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
// import exampleImage from 'components/kec_banner.png';

function Nav() {
  return (
    <div className="Nav">
      <img className="image"
        src="http://keck.ac.in/images/logo.png"
        alt="Example"
        style={{ width: "100%" }}
      />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Registration</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;