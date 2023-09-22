import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.svg";

const Form = ({ title, linkText, link, linkName, buttonName, children, onSubmit,  isValid }) => {
  return (
    <form className="form" onSubmit={onSubmit}>

      <div className="form__main">
        <Link className="form__link-logo" to={"/"}>
          <img className="form__logo" src={logo} alt="Логотип" />
        </Link>
        <h1 className="form__title">{title}</h1>
        {children}
      </div>

      <div className="form__footer">
        <button
          className={`form__button ${!isValid && 'form__button_disabled'}`}
          type="submit" 
          disabled={!isValid}>
          {buttonName}
        </button>
        <span className="form__text">
          {linkText}
          <Link className="form__text-link" to={link}>
            {linkName}
          </Link>
        </span>
      </div>
      
    </form>
  );
};

export default Form;
