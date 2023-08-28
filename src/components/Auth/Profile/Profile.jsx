import React from "react";
import "./Profile.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";

const Profile = () => {
  const [name, setName] = useState("Борис");
  const [email, setEmail] = useState("pochta@yandex.ru");
  return (
    <section className="profile">
      <Header />
      <div className="profile__content">
        <section className="profile__box">
          <h1 className="profile__title">Привет, Борис!</h1>
          <form className="profile__form">
            <div className="profile__element">
              <label className="profile__label">
                <p className="profile__name">Имя</p>
                <input
                  className="profile__input"
                  type="text"
                  placeholder="Введите имя"
                  value={name}
                  onChange={(evt) => setName(evt.target.value)}
                />
              </label>
              <label className="profile__label">
                <p className="profile__name">E-mail</p>
                <input
                  className="profile__input"
                  type="text"
                  placeholder="Введите e-mail"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                />
              </label>
            </div>
          </form>
        </section>

        <div className="profile__buttons">
          <button className="profile__buttons-submit" type="submit">
            Редактировать
          </button>
          <Link className="profile__buttons-exit" to="/signin">
            Выйти из аккаунта
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Profile;
