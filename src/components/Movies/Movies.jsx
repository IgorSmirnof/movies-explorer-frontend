import { React, useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import "./Movies.css";
import {DUR_SHORT_FILM} from '../../utils/constants'

const Movies = ({
  textButton,
  isLoading,
  allMovies,
  savedMovies,
  handleSaveMovie,
  handleMovieDelete,
  isLoggedIn,
}) => {


  // изв из ЛС статус кмф
  const checkBoxStatus = () => {
    const userCheckBoxStatus = JSON.parse(localStorage.getItem("checkBox"));
    console.log('checkBoxStatus inn', userCheckBoxStatus)
    return userCheckBoxStatus ? userCheckBoxStatus : false;
  };

  // изв из ЛС слово запроса
  const getWordFind = () => {
    const userWordFind = localStorage.getItem("wordFind");
    console.log('userWordFind inn', userWordFind)
    return userWordFind ? userWordFind : "";
  };
 
  // изв из ЛС фильтрованные фильмы
  const checkCheckededMovies = () => {
    const checkededMovies = JSON.parse(localStorage.getItem("checkededMovies"));
    // console.log(checkededMovies)
    return checkededMovies ? checkededMovies : [];
  };

  const [moviesRender, setMoviesRender] = useState(checkCheckededMovies());
  const [isCheckBoxActive, setIsCheckBoxActive] = useState(checkBoxStatus());
  const [wordFind, setWordFind] = useState(getWordFind());

  useEffect(() => {
    // setIsCheckBoxActive(false);
    setWordFind('');
    checkBoxStatus();
    getWordFind();
    checkCheckededMovies();
  }, []);



 

  // чекбокс для короткометражных фильмов
  const handleCheckBoxClick = () => {
    setIsCheckBoxActive(!isCheckBoxActive);
  };

  // запрос на поиск фильма
  const handleMoviesSearch = (wordFind) => {
    setWordFind(wordFind);
  };

  useEffect(() => {
    localStorage.setItem("checkBox", isCheckBoxActive);
  }, [isCheckBoxActive]);

  useEffect(() => {
    const totalFindMovies = checkFindMovies(allMovies, wordFind, isCheckBoxActive);
    setMoviesRender(totalFindMovies);
  }, [isCheckBoxActive, wordFind, allMovies, savedMovies]);

  useEffect(() => {
    const totalFindMovies = checkFindMovies(allMovies, wordFind, isCheckBoxActive);
    setMoviesRender(totalFindMovies);
    // localStorage.setItem("checkBox", (false));
    // localStorage.setItem("wordFind", JSON.stringify(''));
    //eslint-disable-next-line
  }, []);

  const handleClickSave = (data, isLiked) => {
    // console.log("handleClickSave isLiked:", isLiked);
    if (!isLiked) {
      handleSaveMovie(data);
    } else {
      allMovies[data.id - 1].saved = false;
      localStorage.setItem("allMovies", JSON.stringify(allMovies));
      savedMovies = savedMovies.map((element, index, array) => {
        if (element.movieId === data.id) {
          handleMovieDelete(element);
        }
        return array;
      });
    }
  };

  return (
    <main>
      <Header
        isLoggedIn={isLoggedIn} />
      <section className="movies">
        <SearchForm
          wordFind={wordFind}
          handleCheckBoxClick={handleCheckBoxClick}
          isCheckBoxActive={isCheckBoxActive}
          setIsCheckBoxActive={setIsCheckBoxActive}
          handleMoviesSearch={handleMoviesSearch}
          moviesRender={moviesRender}
          // handleToRender={handleToRender}
        />
        {!isLoading ? (
          <MoviesCardList
            textButton={textButton}
            moviesRender={moviesRender}
            allMovies={allMovies}
            savedMovies={savedMovies}
            handleClick={handleClickSave}
            // handleClick={handleMovieDelete}
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
  } else {
    checkededMovies = movies;
  }

  if (isCheckBoxActive) {
    checkededMovies = checkededMovies.filter((item) => item.duration <= DUR_SHORT_FILM); //короткометраж
  }

  if (wordFind !== "" ) { 
    localStorage.setItem("checkededMovies", JSON.stringify(checkededMovies));
  } else {
    // localStorage.setItem("checkededMovies", JSON.stringify(''));
    // console.log('localStorage.setItem --- ', wordFind);
  }
  return checkededMovies;
}

export default Movies;
