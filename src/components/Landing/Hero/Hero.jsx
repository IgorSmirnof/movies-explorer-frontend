import React from 'react';
import './Hero.css';
// import NavButton from '../NavButton/NavButton';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__container'>
        <h1 className='hero__title'>
        Учебный проект студента факультета Веб-разработки.
        </h1>
        <nav>
          <ul className='hero__buttons'>
            <li className='hero__buttons_link'>О проекте</li>
            <li className='hero__buttons_link'>Технологии</li>
            <li className='hero__buttons_link'>Студент</li>
          </ul>
        </nav>
        {/* <NavButton /> */}
      </div>
    </section>
  );
};

export default Hero;