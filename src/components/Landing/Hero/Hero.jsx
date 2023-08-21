import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        {/* <div className="hero__wrap"> */}
          <h1 className="hero__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <nav>
            <ul className="hero__buttons">
              <li className="hero__buttons_link">О проекте</li>
              <li className="hero__buttons_link">Технологии</li>
              <li className="hero__buttons_link">Студент</li>
            </ul>
          </nav>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Hero;
