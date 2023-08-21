import React from "react";
import "./Student.css";
import photo from "../../../images/photo.jpg";
import { Link } from "react-router-dom";

const Student = () => {
  return (
    <section className="student">
      <div className="student__container">
        <h2 className="student__text">Студент</h2>
        
          
        
        <div className="student__wrap">
          <div className="student__about">
            <ul className="student__block">
              <li className="student__name">Виталий</li>
              <li className="student__title">Фронтенд-разработчик, 30 лет</li>
              <li className="student_subtitle">
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У
                меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
                бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
                Контур». После того, как прошёл курс по веб-разработке, начал
                заниматься фриланс-заказами и ушёл с постоянной работы.
              </li>
            </ul>
            <Link
                className="student__link"
                to={"https://github.com/"}
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
