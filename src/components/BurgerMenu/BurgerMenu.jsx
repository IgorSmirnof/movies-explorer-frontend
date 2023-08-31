import React from "react";
import "./BurgerMenu.css";
import { Link, NavLink } from "react-router-dom";

const BurgerMenu = ({ isOpen }) => {
  return (
    <section className={`burger ${isOpen ? "burger_active" : ""}`}>
      <div className="burger__drop">
        <div
          className={`burger__overlay ${isOpen ? "burger__overlay_active" : ""}`}
        ></div>
        <div className="burger__container">
          <nav className="burger__nav">
            <NavLink
              // exact
              className="burger__link"
              to="/"
            >
              Главная
            </NavLink>
            <NavLink
              className="burger__link"
              // className={ ({ isActive }) =>` burger__link ${isActive ? "burger__link-active" : ""}`}
              // activeClassName="active"
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              className="burger__link"
              to="/saved-movies"
            >
              Сохраненные фильмы
            </NavLink>
          </nav>
          <Link className="burger__profile" to="/profile">
            Аккаунт
          </Link>
        </div>

        
      </div>
    </section>
  );
};

export default BurgerMenu;
