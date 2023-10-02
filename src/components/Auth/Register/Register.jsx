import React, { useEffect } from "react";
import "./Register.css";
import Form from "../Form/Form";
import { useFormValidate } from "../../../hooks/useFormValidate";
import { Navigate } from 'react-router-dom';
import { VALIDATION } from "../../../utils/constants"

const Register = ({ handleRegister, isSubmitting, errorRegister,setErrorRegister, isLoggedIn }) => {
  // console.log('ghfjhfjhfj', errorRegister);
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const { values, isValid, errors, handleChange } = useFormValidate(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(values);
  };
  
  //eslint-disable-next-line
  useEffect(() => {setErrorRegister('') },[values.email])
  
  if (isLoggedIn) {
    return <Navigate to="/movies" />;
  }

  return (
    <main>
      <section className="register">
        <Form
          title="Добро пожаловать!"
          linkText="Уже зарегистрированы?"
          linkName="Войти"
          link="/signin"
          buttonName="Зарегистрироваться"
          onSubmit={handleSubmit}
          isValid={isValid}
          isSubmitting={isSubmitting}
        >
          <section className="form__register">
            <div className="form__block">
              <label className="form__label" htmlFor="name">
                Имя
              </label>
              <input
                className="form__input"
                id="name"
                name="name"
                type="text"
                placeholder="Введите имя"
                value={values.name || ''}
                onChange={handleChange}
                required
                pattern={VALIDATION.name.pattern}
                minLength="2"
                maxLength="40"
              />
              <span
                className={`form__error ${
                  errors.name && "form__error_register"
                }`}
              >
                {errors.name}
              </span>
            </div>

            <div className="form__block">
              <label className="form__label" htmlFor="email">
                E-mail
              </label>
              <input
                className="form__input"
                id="email"
                name="email"
                type="text"
                placeholder="Введите e-mail"
                value={values.email || ''}
                onChange={handleChange}
                required
                pattern={VALIDATION.email.pattern}
              />
              <span
                className={`form__error ${
                  (errors.email || errorRegister) && "form__error_register"
                }`}
              >
                {errors.email} {errorRegister}
              </span>
            </div>

            <div className="form__block">
              <label className="form__label" htmlFor="password">
                Пароль
              </label>
              <input
                className="form__input form__input-error"
                id="password"
                name="password"
                type="password"
                placeholder="Введите пароль"
                value={values.password || ''}
                onChange={handleChange}
                required
                minLength="6"
                maxLength="40"
                autoComplete='off'
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
        </Form>
      </section>
    </main>
  );
};

export default Register;
