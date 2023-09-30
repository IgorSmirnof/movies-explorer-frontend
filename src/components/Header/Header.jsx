import React from "react";
// import { useLocation } from "react-router-dom";
import "./Header.css";
import NavLanding from "../Navigation/NavLanding";
import NavAuth from "../Navigation/NavAuth";

const Header = ({ isLoggedIn } ) => {
  if (!isLoggedIn) {
    return (
      <header className="header">
        <NavLanding />
        {/* {location.pathname === '/' ? <NavLanding /> : <NavAuth />} */}
      </header>
    );
  } else {
    return (
      <header className="header">
        <NavAuth />
      </header>
    );
  }
};

export default Header;
