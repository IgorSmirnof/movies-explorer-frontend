import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        {/* <h3>text header</h3> */}
        <div className="header__logo">
          <Link
            className='header__logo-link'
            to="/">
            <img 
            src={logo} 
            alt='Логотип'
            />
          </Link>
        </div>
        {/* <div className="header__films"></div> */}
        <div className="header__login">
          <Link
            className='header__link header__reg-link'
            to="/signup">
            Регистрация
          </Link>
          <Link
            className='header__link header__enter-link'
            to="/signin">
            Войти
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;