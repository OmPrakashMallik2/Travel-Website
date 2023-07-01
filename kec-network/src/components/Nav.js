import React from "react";
import { Link } from "react-router-dom";
// import exampleImage from 'components/kec_banner.png';

function Nav() {
  return (
    <div>
      <img
        src="http://keck.ac.in/images/logo.png"
        alt="Example"
        style={{ width: "100%" }}
      />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">LoginForm</Link>
        </li>
        <li>
          <Link to="/register">RegistrationForm</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
