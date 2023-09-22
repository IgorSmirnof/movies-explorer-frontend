import  React from "react";
import "./Login.css";
import Form from "../Form/Form";
import { useFormValidate } from "../../../hooks/useFormValidate";

const Login = ({ handleAuthorize }) => {
  const { values, isValid, errors, handleChange } = useFormValidate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAuthorize(values);
  }


  return (
    <main>
      <section className="login">
        <Form
          title="Рады видеть!"
          linkText="Еще не зарегистрированы?"
          linkName="Регистрация"
          link="/signup"
          buttonName="Войти"
          onSubmit={handleSubmit}
          isValid={isValid}
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
                name="email"
                type="email"
                placeholder="Введите e-mail"
                value={values.email} 
                onChange={handleChange}
                required
              />
              <span
                className={`form__error ${
                  errors.email && "form__error_register"
                }`}
              >
                {errors.email}
              </span>
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
                name="password"
                type="password"
                placeholder="Введите пароль"
                value={values.password} 
                onChange={handleChange}
                required
                minLength="6"
                maxLength="40"
              />
              <span
                className={`form__error ${
                  errors.password && "form__error_register"
                }`}
              >
                {errors.password}
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
