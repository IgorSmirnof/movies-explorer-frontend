import React from "react";
import "./Profile.css";

import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import { useFormValidate } from "../../../hooks/useFormValidate";
import { VALIDATION } from "../../../utils/constants"

const Profile = ({ handleLogOut, handleUsersUpdate, isProfileSaved, setIsProfileSaved, isLoggedIn }) => {
  const currentUser = useContext(CurrentUserContext);
  // const [isUpdateSuccess, setIsUpdateSuccess] = useState('');
  const { values, setValues, handleChange, isValid, errors } =
    useFormValidate();


  useEffect(() => {
    setIsProfileSaved(false)
    //eslint-disable-next-line
  }, []);

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
         <Header isLoggedIn={isLoggedIn} />
        <div className="profile__content">
          <section className="profile__box">
            <h1 className="profile__title">Привет, {values.name}!</h1>
            <form
              className="profile__form profile__element"
              id="profile__form"
              onSubmit={handleSubmit}
            >
              {/* <div className="profile__element"> */}
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
                  pattern={VALIDATION.name.pattern}
                />
              </label>
              <span
                className={`form__error ${
                  // (errors.name || validateName(values.name).invalid) &&
                  errors.name && "form__error_register"
                }`}
              >
                {/* {errors.name || validateName(values.name).message} */}
                {errors.name}
              </span>

              <label className="profile__label">
                <p className="profile__name">E-mail</p>
                <input
                  className="profile__input"
                  name="email"
                  type="text"
                  placeholder="Введите e-mail"
                  value={values.email}
                  onChange={handleChange}
                  pattern={VALIDATION.email.pattern}
                />
              </label>
              <span
                className={`form__error ${
                  // (errors.email || validateEmail(values.email).invalid) &&
                  errors.email && "form__error_register"
                }`}
              >
                {errors.email || VALIDATION.email.message}
              </span>
              {/* </div> */}
            </form>
            {isProfileSaved ? (
              <div className="profile__success">
                Ваш профиль успешно обновлен!
              </div>
            ) : (
              ""
            )}
          </section>

           <div className="profile__buttons">
             <button></button>
            <button
              className="profile__buttons-submit"
              type="submit"
              form="profile__form"
              disabled={
                !isValid ||
                (currentUser.name === values.name && currentUser.email === values.email)
                || !VALIDATION.email.message || !VALIDATION.name.message 
              } // || !isSubmitting
              onSubmit={handleUsersUpdate}
            >
              Редактировать
            </button>
            <Link
              className="profile__buttons-exit"
              to="/"
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
