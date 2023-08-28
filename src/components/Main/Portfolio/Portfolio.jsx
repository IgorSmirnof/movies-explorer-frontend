import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
// import arrow from "../../../images/arrow.svg";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__text">Портфолио</h2>

        <div className="portfolio__wrap">
          <ul className="portfolio__block">
            <li className="portfolio__site">
              <Link
                className="portfolio__link"
                to={"https://github.com/"}
                target="_blank"
                rel="noreferrer"
              >
                <p className="portfolio__name">Статичный сайт</p>
                <span className="portfolio__icon">↗</span>
                {/* <img className="portfolio__icon" src={arrow} alt="ссылка" /> */}
              </Link>
            </li>
            <li className="portfolio__site">
              <Link
                className="portfolio__link"
                to={"https://github.com/"}
                target="_blank"
                rel="noreferrer"
              >
                <p className="portfolio__name">Адаптивный сайт</p>
                <span className="portfolio__icon">↗</span>
                {/* <img className="portfolio__icon" src={arrow} alt="ссылка" /> */}
              </Link>
            </li>
            <li className="portfolio__site">
              <Link
                className="portfolio__link"
                to={"https://github.com/"}
                target="_blank"
                rel="noreferrer"
              >
                <p className="portfolio__name">Одностраничное приложение</p>
                <span className="portfolio__icon">↗</span>
                {/* <img className="portfolio__icon" src={arrow} alt="ссылка" /> */}
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
