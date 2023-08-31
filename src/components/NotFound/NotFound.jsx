import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section className="notFound">
        <div className="notFound__container">
          <h1 className="notFound__title">404</h1>
          <p className="notFound__subtitle">Страница не найдена</p>
        </div>

        <button
          className="notFound__button"
          onClick={() => navigate(-1)}
          type="button"
        >
          Назад
        </button>
      </section>
    </main>
  );
};

export default NotFound;
