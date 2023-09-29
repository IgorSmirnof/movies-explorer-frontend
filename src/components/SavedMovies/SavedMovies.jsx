import { React, useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

const SavedMovies = ({ textButton, savedMovies, handleMovieDelete }) => {
  const textButtonDelete = "Удалить";
  const [moviesRender, setMoviesRender] = useState(savedMovies);
  const [isCheckBoxActive, setIsCheckBoxActive] = useState(false);
  const [wordFind, setWordFind] = useState("");

  // чекбокс для короткометражных фильмов
  const handleCheckBoxClick = () => {
    setIsCheckBoxActive(!isCheckBoxActive);
    console.log(isCheckBoxActive);
  };

  // запрос на поиск фильма
  const handleMoviesSearch = (text) => {
    setWordFind(text);
  };

  useEffect(() => {
    localStorage.setItem("checkBox", isCheckBoxActive);
  }, [isCheckBoxActive]);

  useEffect(() => {
    setMoviesRender(checkFindMovies(savedMovies, wordFind, isCheckBoxActive));
    // console.log('setMoviesRender', savedMovies)
  }, [isCheckBoxActive, wordFind, savedMovies]);

  useEffect(() => {
    localStorage.setItem("wordFind", wordFind);
  }, [wordFind]);

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
        <MoviesCardList
          textButton={textButtonDelete}
          moviesRender={moviesRender}
          savedMovies={savedMovies}
          handleClick={handleMovieDelete}
        />
        <div className="movies__button-non"></div>
      </section>
    </main>
  );
};

function checkFindMovies(movies, wordFind, isCheckBoxActive) {
  let checkededMovies = movies;

  if (wordFind !== "") {
    checkededMovies = checkededMovies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(wordFind.toLowerCase())
    );
  } else {
    checkededMovies = movies;
  }

  if (isCheckBoxActive) {
    checkededMovies = checkededMovies.filter((movie) => movie.duration <= 40); //короткометраж
  }

  return checkededMovies;
}

export default SavedMovies;
