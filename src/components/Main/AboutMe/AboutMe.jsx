import React from 'react';
import './AboutMe.css';
// import NavButton from '../NavButton/NavButton';

const AboutMe = () => {
  return (
    <section className='about'>
      <div className='about__container'>
        <h2 className='about__text'>
        О проекте
        </h2>
        <div className='about__diplom'>
          <ul className='about__block'>
            <li className='about__title'>Дипломный проект включал 5 этапов</li>
            <li className='about__subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</li>
          </ul>
          <ul className='about__block'>
            <li className='about__title'>На выполнение диплома ушло 5 недель</li>
            <li className='about__subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</li>
          </ul>
        </div>
        <div className="about__times">
          <h3 className="about__1week">1 неделя</h3>
          <h3 className="about__4weeks">4 недели</h3>
          <p className="about__kind">Back-end</p>
          <p className="about__kind">Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;