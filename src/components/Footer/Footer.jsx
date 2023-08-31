import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="footer__container"> */}
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>

        <nav className="footer__links-container footer__link">
          © 2020
          <ul className="footer__links">
            <li className="footer__link-block">
              <Link
                className="footer__link"
                to={"https://practicum.yandex.ru/"}
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </Link>
            </li>
            <li className="footer__link-block">
              <Link
                className="footer__link"
                to={"https://github.com/"}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </Link>
            </li>
          </ul>
        </nav>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
