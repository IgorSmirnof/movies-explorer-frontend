import React from "react";
import './Form.css';
import { Link } from "react-router-dom";
import logo from '../../../images/logo.svg';

const Form = ({ title, linkText, link, linkName, buttonName, children }) => {
  return (
    <form className="form">
      <Link
        className="form__link-logo"
        to={'/'}
      >
        <img
          className="form__logo"
          src={logo}
          alt="Логотип"
        />
      </Link>
      <h1 className="form__title">{title}</h1>
      {children}

      <button
        className="form__button"
        type="submit"
      >
        {buttonName}
      </button>
      <span
        className="form__text">
        {linkText}
        <Link
          className="form__text-link"
          to={link}>
          {linkName}
        </Link>
      </span>

    </form>
  );
};

export default Form;