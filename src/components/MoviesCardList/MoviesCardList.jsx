import { React, useState, useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../Movies/MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import {SCREEN_LG, SCREEN_MD, IN_MOVIE_LG, IN_MOVIE_MD, IN_MOVIE_SM, ADD_MOVIE_LG, ADD_MOVIE_MD, ADD_MOVIE_SM} from '../../utils/constants'

const MoviesCardList = ({ textButton, moviesRender, handleClick }) => {
  const location = useLocation();
  const [moviesPerPage, setMoviesPerPage] = useState(8);
  const [moviesAddToPage, setMoviesAddToPage] = useState(3);
  const [moviesToPage, setMoviesToPage] = useState(moviesRender);
  const [isBtnHidden, setIsBtnHidden] = useState(false);


  const checkWidth = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= SCREEN_LG) {
      setMoviesPerPage(IN_MOVIE_LG);
      setMoviesAddToPage(ADD_MOVIE_LG);
    } else if (screenWidth < SCREEN_LG && screenWidth > SCREEN_MD) {
      setMoviesPerPage(IN_MOVIE_MD);
      setMoviesAddToPage(ADD_MOVIE_MD);
    } else {
      setMoviesPerPage(IN_MOVIE_SM);
      setMoviesAddToPage(ADD_MOVIE_SM);
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
  
  useEffect(() => {
    // console.log('handleClick in cardList')
  }, [handleClick]);

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
            {moviesToPage.map((movie) =>
              <MoviesCard
                key={movie._id}
                movie={movie}
                textButton={textButton}
                handleClick={handleClick}
              />
            )}
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
