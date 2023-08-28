import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </div>

        <div className="footer__links-container footer__link">
          © 2020
          <div className="footer__links">
            <Link
              className="footer__link"
              to={"https://practicum.yandex.ru/"}
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </Link>
            <Link
              className="footer__link"
              to={"https://github.com/"}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
