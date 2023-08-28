
import React from "react";
import { Link } from "react-router-dom";
import './NavLanding.css';
import logo from '../../images/logo.svg';

const NavLanding = () => {
  return (
    <div className='header__land-container'>
        {/* <h3>text header</h3> */}
        <div className="header__land-logo">
          <Link
            className='header__land-logo-link'
            to="/">
            <img 
            src={logo} 
            alt='Логотип'
            />
          </Link>
        </div>
        {/* <div className="header__land-films"></div> */}
        <div className="header__land-login">
          <Link
            className='header__land-link header__land-reg-link'
            to="/signup">
            Регистрация
          </Link>
          <Link
            className='header__land-link header__land-enter-link'
            to="/signin">
            Войти
          </Link>
        </div>
      </div>
  )
}
  export default NavLanding;