import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavAuth.css";
import logo from "../../images/logo.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const NavAuth = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <main>
      {!isOpen ? (
        <div className="button__burger-header">

              {/* <img className="button__burger-image" src={logo} alt="Логотип" /> */}

          <Link className="button__burger-image" to="/">
            <img className="button__burger-image-link" src={logo} alt="Логотип" />
          </Link>
          
          
          <button className="button__burger" type="button" onClick={handleIsOpen}/>
          {/* <button className="button__burger" onClick={handleIsOpen}>&equiv;</button> */}
        </div>
      ) : (
        <div className="button__burger-header">
          <img className="button__burger-image" src={logo} alt="Логотип" />
          <button className="button__burger-close" type="button" onClick={handleIsOpen} />
        </div>
      )}

      <BurgerMenu isOpen={isOpen} />

      <ul className="header__container">
        <li className="header__logo">
          <Link className="header__logo-link" to="/">
            <img src={logo} alt="Логотип" />
          </Link>
        </li>

        <li className="header__films">
          <Link className="header__link header__movies-link header__movies-link_active" to="/movies">
            Фильмы
          </Link>
          <Link className="header__link header__movies-link" to="/saved-movies">
            Сохранённые фильмы
          </Link>
        </li>

        {/* <li className="header__login">
          <Link className="header__link header__profile" to="/profile">
            Аккаунт
          </Link>
        </li> */}
        <Link className="header__login" to="/profile">
          <div className="header__link header__profile">
            Аккаунт
          </div>
        </Link>
      </ul>
    </main>
  );
};

export default NavAuth;
