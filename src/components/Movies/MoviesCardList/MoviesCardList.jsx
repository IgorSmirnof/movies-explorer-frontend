import { React, useState, useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

const MoviesCardList = ({ textButton, moviesRender, handleClick }) => {
  const location = useLocation();
  const [moviesPerPage, setMoviesPerPage] = useState(8);
  const [moviesAddToPage, setMoviesAddToPage] = useState(3);
  const [moviesToPage, setMoviesToPage] = useState(moviesRender);
  const [isBtnHidden, setIsBtnHidden] = useState(false);

  // console.log("moviesRender:", moviesRender);

  const checkWidth = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1280) {
      setMoviesPerPage(12);
      setMoviesAddToPage(3);
    } else if (screenWidth < 1280 && screenWidth > 767) {
      setMoviesPerPage(8);
      setMoviesAddToPage(2);
    } else {
      setMoviesPerPage(5);
      setMoviesAddToPage(2);
    }
  };

  // checkWidth при загрузке страницы
  useEffect(() => {
    checkWidth();
  }, []);

  // размер экрана => обновление checkWidth .5 сек
  window.onresize = (e) => {
    setTimeout(checkWidth, 50);
  };

  // изменение количества фильмов на страницу => buttin ещё
  const handleClickAddMovies = () => {
    setMoviesPerPage(moviesPerPage + moviesAddToPage);
  };

  useEffect(() => {
    if (moviesRender.length <= moviesPerPage) {
      setIsBtnHidden(true);
    } else {
      setIsBtnHidden(false);
    }
    setMoviesToPage(moviesRender.slice(0, moviesPerPage));
  }, [moviesRender, moviesPerPage]);

  return (
    <section className="movies__container">
      {location.pathname === "/movies" && (
        <>
          <ul className="movies__list">
            {moviesToPage.map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                handleClick={handleClick}
                textButton={textButton}
              />
            ))}
          </ul>
        </>
      )}

      {location.pathname === "/saved-movies" && (
        <>
          <ul className="movies__list">
            {moviesToPage.map((movie) => (
              <MoviesCard
                key={movie._id}
                movie={movie}
                textButton={textButton}
                handleClick={handleClick}
              />
            ))}
          </ul>
        </>
      )}
      <button
        className={`movies__button ${
          isBtnHidden ? "movies__button_hidden" : ""
        }`}
        type="button"
        onClick={handleClickAddMovies}
      >
        Еще
      </button>
    </section>
  );
};

export default MoviesCardList;
