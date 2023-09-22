import { React, useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import "./Movies.css";

const Movies = ({ textButton, isLoading, allMovies, savedMovies, handleSaveMovie }) => {

  // изв из ЛС статус кмф
  const checkBoxStatus = () => {
    const userCheckBoxStatus = JSON.parse(localStorage.getItem("checkBox"));
    return userCheckBoxStatus ? userCheckBoxStatus : false;
  };

  // изв из ЛС слово запроса
  const getWordFind = () => {
    const userWordFind = localStorage.getItem("wordFind");
    return userWordFind ? userWordFind : "";
  };

  const [moviesRender, setMoviesRender] = useState([]);
  const [isCheckBoxActive, setIsCheckBoxActive] = useState(checkBoxStatus());
  const [wordFind, setWordFind] = useState(getWordFind());

  // чекбокс для короткометражных фильмов
  const handleCheckBoxClick = () => {
    setIsCheckBoxActive(!isCheckBoxActive);
    console.log(isCheckBoxActive);
  };

  // Обработка запроса на поиск фильма
  const handleMoviesSearch = (text) => {
    setWordFind(text);
  };

  useEffect(() => {
    localStorage.setItem("checkBox", isCheckBoxActive);
  }, [isCheckBoxActive]);

  useEffect(() => {
    setMoviesRender(checkFindMovies(allMovies, wordFind, isCheckBoxActive));
  }, [isCheckBoxActive, wordFind, allMovies]);

  useEffect(() => {
    localStorage.setItem("wordFind", wordFind);
  }, [wordFind]);

  const handleClickSave = (data, isLiked) => {
    if (!isLiked) {
      handleSaveMovie(data);
    }
  };

  return (
    <main>
      <Header />
      <section className="movies">
        <SearchForm
          wordFind={wordFind}
          handleCheckBoxClick={handleCheckBoxClick}
          isCheckBoxActive
          handleMoviesSearch={handleMoviesSearch}
          moviesRender={moviesRender}
        />
        {!isLoading ? (
          <MoviesCardList
            textButton={textButton}
            moviesRender={moviesRender}
            allMovies={allMovies}
            savedMovies={savedMovies}
            handleClick={handleClickSave}
          />
        ) : (
          <Preloader />
        )}
        {/* <button className="movies__button" type="button">Еще</button> */}
      </section>
    </main>
  );
};

function checkFindMovies(movies, wordFind, isCheckBoxActive) {
  let checkededMovies = movies;

  if (wordFind !== "") {
    checkededMovies = checkededMovies.filter((item) =>
      item.nameRU.toLowerCase().includes(wordFind.toLowerCase())
    );
  }

  if (isCheckBoxActive) {
    checkededMovies = checkededMovies.filter((item) => item.duration <= 40); //короткометраж
  }
  return checkededMovies;
}

export default Movies;
