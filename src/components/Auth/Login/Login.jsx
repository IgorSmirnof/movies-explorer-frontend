import React from "react";
import "./Login.css";
import Form from "../Form/Form";

const Login = () => {
  return (
    <main>
      <section className="login">
        <Form
          title="Рады видеть!"
          linkText="Еще не зарегистрированы?"
          linkName="Регистрация"
          link="/signup"
          buttonName="Войти"
        >
          {/* <div className="form__box"> */}
          <section className="form__login">
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
          </section>

          <section className="form__login">
            <div className="form__block">
              <label className="form__label" htmlFor="password">
                Пароль
              </label>
              <input
                className="form__input"
                id="password"
                type="password"
                placeholder="Введите пароль"
              />
              <span className="form__error form__error_login">
                Что-то пошло не так...
              </span>
            </div>
          </section>
          {/* </div> */}
        </Form>
      </section>
    </main>
  );
};

export default Login;
