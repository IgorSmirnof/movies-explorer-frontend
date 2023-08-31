import React from "react";
import "./Student.css";
import photo from "../../../images/photo-2.jpg";
import { Link } from "react-router-dom";

const Student = () => {
  return (
    <section className="student" id={"student"}>
      <div className="student__container">
        <h2 className="student__text">Студент</h2>
        
        <div className="student__wrap">
          <div className="student__about">
            <div className="student__block">
              <h3 className="student__name">Борис</h3>
              <h4 className="student__title">Фронтенд-разработчик, 68 лет</h4>
              <p className="student__subtitle">
                Родился в Идар-Оберштайне, закончил факультет экономики СГУ. У
                меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
                бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
                Контур». После того, как прошёл курс по веб-разработке, начал
                заниматься фриланс-заказами и ушёл с постоянной работы.
              </p>
            </div>
            <Link
                className="student__link"
                to={"https://github.com/IgorSmirnof"}
                target="_blank"
                rel="noreferrer"
              >
                Github
            </Link>
          </div>

          <img className="student__photo" src={photo} alt="фотография студента" />
        </div>
        
      </div>

    </section>
  );
};

export default Student;
