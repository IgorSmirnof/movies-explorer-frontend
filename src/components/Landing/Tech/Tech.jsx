import React from "react";
import "./Tech.css";
// import NavButton from '../NavButton/NavButton';

const Tech = () => {
  return (
    <section className="tech">
      <div className="tech__container">
        <h2 className="tech__text">Технологии</h2>
        <ul className="tech__block">
          <li className="tech__title">7 технологий</li>
          <li className="tech__subtitle">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </li>
        </ul>
        <ul className="tech__items">
          <li className="tech__item">HTML</li>
          <li className="tech__item">CSS</li>
          <li className="tech__item">JS</li>
          <li className="tech__item">React</li>
          <li className="tech__item">Git</li>
          <li className="tech__item">Express.js</li>
          <li className="tech__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Tech;
