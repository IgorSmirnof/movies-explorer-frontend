import React from 'react';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className='nav-tab'>
      <ul className='nav-tab__links'>
        <li className=''>
        <a className='nav-tab__link' href='#about'>О проекте</a>
        </li>
        <li className=''>
        <a className='nav-tab__link' href='#tech'>Технологии</a>
        </li>
        <li className=''>
        <a className='nav-tab__link' href='#about'>Студент</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;