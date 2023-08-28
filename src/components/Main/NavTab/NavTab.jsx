import React from 'react';
import './NavTab.css';
import { Link } from "react-router-dom";

const NavTab = () => {
  return (
    <nav className='nav-tab'>
      <ul className='nav-tab__links'>
        <li className=''>
          <Link
            className='nav-tab__link'
            to='about'
            duration={500}
          >
            О проекте
          </Link>
        </li>
        <li className=''>
          <Link
            className='nav-tab__link'
            to='tech'
            duration={500}
          >
            Технологии
          </Link>
        </li>
        <li className=''>
          <Link
            className='nav-tab__link'
            to='student'
            duration={500}
          >
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;