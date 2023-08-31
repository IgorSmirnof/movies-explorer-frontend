import React from "react";
import "./AboutMe.css";
// import NavButton from '../NavButton/NavButton';

const AboutMe = () => {
  return (
    <section className="about" id="about">
      {/* <div className="about__container"> */}
      <h2 className="about__text">О проекте</h2>

      <ul className="about__diplom">
        <li className="about__info">
          <h3 className="about__title">Дипломный проект включал 5 этапов</h3>
          <p className="about__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about__info">
          <h3 className="about__title">На выполнение диплома ушло 5 недель</h3>
          <p className="about__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>

      <div className="about__times">
        <h4 className="about__1week">1 неделя</h4>
        <h4 className="about__4weeks">4 недели</h4>
        <p className="about__kind">Back-end</p>
        <p className="about__kind">Front-end</p>
      </div>
      {/* </div> */}
    </section>
  );
};

export default AboutMe;
