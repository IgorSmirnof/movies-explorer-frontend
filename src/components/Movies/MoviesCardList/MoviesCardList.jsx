import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { cardList, cardListSaves } from "../../../utils/filmList";
// import { cardListSavesAPI } from "../../../utils/filmList";
import { useLocation } from "react-router-dom";

const MoviesCardList = ({ textButton }) => {
  const location = useLocation();
  return (
    <section className="movies__container">
      {location.pathname === "/movies" && (
        <>
          <ul className="movies__list">
            {cardList.map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                textButton={textButton}
              />
            ))}
          </ul>
        </>
      )}

      {location.pathname === "/saved-movies" && (
        <>
          <ul className="movies__list">
            {cardListSaves.map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                textButton={textButton}
              />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default MoviesCardList;
