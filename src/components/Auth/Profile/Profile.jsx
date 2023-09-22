import React from "react";
import "./Profile.css";

import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import { useFormValidate } from "../../../hooks/useFormValidate";
import { validateName, validateEmail } from "../../../utils/validateCustom";

const Profile = ({ handleLogOut, handleUsersUpdate, isProfileSaved }) => {
  const { values, setValues, handleChange, isValid, errors } =
    useFormValidate();

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [currentUser, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUsersUpdate(values);
  };

  return (
    <main>
      <section className="profile">
        <Header />
        <div className="profile__content">
          <section className="profile__box">
            <h1 className="profile__title">Привет, {values.name}!</h1>
            <form
              className="profile__form"
              id="profile__form"
              onSubmit={handleSubmit}
            >
              <div className="profile__element">
                <label className="profile__label">
                  <p className="profile__name">Имя</p>
                  <input
                    className="profile__input"
                    name="name"
                    type="text"
                    placeholder="Введите имя"
                    value={values.name}
                    onChange={handleChange}
                    minLength="2"
                    maxLength="40"
                  />
                </label>
                <span
                  className={`form__error ${
                    (errors.name || validateName(values.name).invalid) &&
                    "form__error_register"
                  }`}
                >
                  {errors.name || validateName(values.name).message}
                </span>

                <label className="profile__label">
                  <p className="profile__name">E-mail</p>
                  <input
                    className="profile__input"
                    name="email"
                    type="email"
                    placeholder="Введите e-mail"
                    value={values.email}
                    onChange={handleChange}
                  />
                </label>
                <span
                  className={`form__error ${
                    (errors.email || validateEmail(values.email).invalid) &&
                    "form__error_register"
                  }`}
                >
                  {errors.email || validateEmail(values.email).message}
                </span>
              </div>
            </form>
          </section>

          {isProfileSaved ? (
            <div className="profile__success">
              Ваш профиль успешно обновлен!
            </div>
          ) : (
            ""
          )}

          <div className="profile__buttons">
            <button
              className="profile__buttons-submit"
              type="submit"
              form="profile__form"
              disabled={
                !isValid ||
                (currentUser.name === values.name &&
                  currentUser.email === values.email) ||
                validateName(values.name).invalid ||
                validateEmail(values.email).invalid
              }
            >
              Редактировать
            </button>
            <Link
              className="profile__buttons-exit"
              to="/signin"
              onClick={handleLogOut}
            >
              Выйти из аккаунта
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
