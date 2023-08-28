import React from "react";
import "./Register.css";
import Form from "../Form/Form";

const Register = () => {
  return (
    <section className="register">
      <Form
        title="Добро пожаловать!"
        linkText="Уже зарегистрированы?"
        linkName="Войти"
        link="/signin"
        buttonName="Зарегистрироваться"
      >
        <section className="form__register">
          <div className="form__block">
            <label className="form__label" htmlFor="name">
              Имя
            </label>
            <input
              className="form__input"
              id="name"
              type="text"
              placeholder="Введите имя"
            />
            <span className="form__error">Что-то пошло не так...</span>
          </div>

          <div className="form__block">
            <label className="form__label" htmlFor="email">
              E-mail
            </label>
            <input
              className="form__input"
              id="email"
              type="text"
              placeholder="Введите e-mail"
            />
            <span className="form__error">Что-то пошло не так...</span>
          </div>

          <div className="form__block">
            <label className="form__label" htmlFor="password">
              Пароль
            </label>
            <input
              className="form__input form__input-error"
              id="password"
              type="password"
              placeholder="Введите пароль"
            />
            <span className="form__error form__error_register">
              Что-то пошло не так...
            </span>
          </div>
        </section>
      </Form>
    </section>
  );
};

export default Register;
