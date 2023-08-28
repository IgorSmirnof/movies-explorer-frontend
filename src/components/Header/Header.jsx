import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import NavLanding from '../Navigation/NavLanding';
import NavAuth from '../Navigation/NavAuth';

const Header = () => {
const location = useLocation();
  return (
    <header className='header'>
      {/* {location.pathname === '/' ? < NavAuth/> : < NavLanding/>} */}
      {location.pathname === '/' ? <NavLanding /> : <NavAuth />}
    </header>
  );
};

export default Header;