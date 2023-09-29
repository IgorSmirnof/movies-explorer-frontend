import { React, useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import "./Movies.css";
// import {
//   getUserInfoApi,
//   setToken
// } from "../../utils/MainApi";
// import {  deleteMovie} from "../../utils/MainApi";

const Movies = ({
  textButton,
  isLoading,
  allMovies,
  savedMovies,
  handleSaveMovie,
  handleMovieDelete,
  setIsLoggedIn,
  getAllMovies
}) => {
  // useEffect(() => {
  //   getAllMovies()
  // }, []);

  //для повторного входа
  // useEffect(() => {
  //   const token = localStorage.getItem("jwt");
  //   if (token) {
  //     // getUserInfoApi(token)
  //     //   .then((res) => {
  //         setIsLoggedIn(true);
  //     //     setToken(token);
  //     //   })
  //     //   .catch((err) => {
  //     //     console.log(err);
  //     //   });
  //   }
  // }, []);

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
  };

  // Обработка запроса на поиск фильма
  const handleMoviesSearch = (wordFind) => {
    setWordFind(wordFind);
  };

  useEffect(() => {
    localStorage.setItem("checkBox", isCheckBoxActive);
  }, [isCheckBoxActive]);

  useEffect(() => {
    const srch = checkFindMovies(allMovies, wordFind, isCheckBoxActive);
    setMoviesRender(srch);
  }, [isCheckBoxActive, wordFind, allMovies, savedMovies]);

  useEffect(() => {
    const srch = checkFindMovies(allMovies, wordFind, isCheckBoxActive);
    setMoviesRender(srch);
    //eslint-disable-next-line
  }, []);

  const handleClickSave = (data, isLiked) => {
    console.log("handleClickSave isLiked:", isLiked);
    if (!isLiked) {
      handleSaveMovie(data);
    } else {
      allMovies[data.id - 1].saved = false;
      localStorage.setItem("allMovies", JSON.stringify(allMovies));
      savedMovies = savedMovies.map((element, index, array) => {
        if (element.movieId === data.id) {
          // console.log(element._id, data.id);
          // deleteMovie(element._id)
          handleMovieDelete(element);
        }
        return array;
      });
    }
  };

  // console.log("handleClickSave allMovies:", allMovies);
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
    checkededMovies = checkededMovies.filter((item) => item.duration <= 40); //короткометраж
  }

  return checkededMovies;
}

export default Movies;
