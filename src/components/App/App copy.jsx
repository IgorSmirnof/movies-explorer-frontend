import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Auth/Profile/Profile";
import Register from "../Auth/Register/Register";
import Login from "../Auth/Login/Login";
import NotFound from "../NotFound/NotFound";

import { getMovies } from "../../utils/MoviesApi";
import {
  register,
  authorize,
  getUserInfoApi,
  getSaveMovie,
  checkToken,
  setUserInfoApi,
  // logOut,
  saveMovie,
  deleteMovie,
  // setToken
} from "../../utils/MainApi";

function App() {
  let navigate = useNavigate();
  const { pathname } = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let [savedMovies, setSavedMovies] = useState([]);
  const [isProfileSaved, setIsProfileSaved] = useState(false);

  // регистрация
  const handleRegister = (data) => {
    register(data)
      .then((res) => {
        // localStorage.clear();
        if (res.name || res.email) {
          handleAuthorize(data);
        }
      })
      .catch((err) => console.log(err));
  };

  // авторизация
  const handleAuthorize = (data) => {
    authorize(data)
      .then((data) => {
        if (data.message === "Всё верно, аутентификация успешна!") {
          setIsLoggedIn(true);
          checkToken(data.token);
          // setCurrentUser(data.user);
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("isLoggedIn", true);
          navigate("/movies", { replace: true });
          console.log(data)
        }
      })
      .catch((err) => console.log('авторизация', err));
  };

  // восстанавливаем сохраненные при переходе на фильмы
  useEffect(() => {
    const pathnameMovies = pathname;
    if (pathnameMovies === "/movies" && localStorage.getItem("savedMovies")) {
      localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
    }
  }, [savedMovies]);

  useEffect(() => {
    tokenCheck();
  }, []);


  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((data) => {
          console.log("tokenCheck data", data, jwt);
          setIsLoggedIn(true);
        })
        .catch((err) => console.log(err));
    }
  };

  // const tokenCheck = () => {
  //   getUserInfoApi()
  //     .then((res) => {
  //       if (res) {
  //         console.log("tokenCheck 001", isLoggedIn, res);
  //         setCurrentUser(res);
  //         setIsLoggedIn(true);
  //       } else {
  //         setIsLoggedIn(false);
  //       }
  //   console.log('tokenCheck009', res)
  //     })
  //     .catch((err) => console.log(err));
  // };
  
  //при повторном входе ----------------<<--
  // useEffect(() => {
  //   const token = localStorage.getItem("jwt");
  //   // const pathname = location.pathname;

  //   if (token) {
  //     checkToken(token)
  //       .then((res) => {
  //         console.log("при повторном входе", res);
  //         setIsLoggedIn(true);
  //         // setToken(token);
  //         // if (localStorage.getItem('allMovies') || localStorage.getItem('savedMovies') || localStorage.getItem('wordFind') || localStorage.getItem('checkBox')) {
  //         // //   setWasThereASearch(true);
  //         //   const allMoviesFound = localStorage.getItem('allMovies');
  //         //   setAllMovies(JSON.parse(allMoviesFound));
  //         //   const moviesSaved = localStorage.getItem('savedMovies');
  //         //   setSavedMovies(JSON.parse(moviesSaved));
  //         //   const keyWordStorage = localStorage.getItem('wordFind');
  //         //   setKeyWord(JSON.parse(keyWordStorage));
  //         // const checkboxLS = localStorage.getItem('checkBox');
  //         // setIsShortsOnly(JSON.parse(checkboxLS));
  //         // }
  //         //
  //         // if (pathname === '/sign-up' || pathname === '/sign-up') {
  //         //   navigate('/movies', { replace: true })
  //         // }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // });

  const getMoviesLocalStore = () => {
    let allMoviesLocalStore = JSON.parse(localStorage.getItem("allMovies"));
    if (!allMoviesLocalStore) {
      return (allMoviesLocalStore = []);
    }
    return allMoviesLocalStore;
  };
  let [allMovies, setAllMovies] = useState(getMoviesLocalStore());

  // Получение данных о текущем пользователе сохр.филмах и список фильмов из api

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([getUserInfoApi(), getSaveMovie(), getMovies()])
        .then(([profile, savedMovies, movies]) => {
          setCurrentUser(profile);
          setSavedMovies(savedMovies);
          // console.log('savedMovies', savedMovies)
          movies.map((el) => {
            if (savedMovies.some((item) => item.movieId === el.id)) {
              // console.log('true')
              return (el.saved = true);
            } else {
              return (el.saved = false);
            }
          });
          setAllMovies(movies);

          localStorage.setItem("allMovies", JSON.stringify(movies));
          localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  function handleUsersUpdate(user) {
    setUserInfoApi(user)
      .then((profile) => {
        setCurrentUser(profile);
        setIsProfileSaved(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogOut() {
    // setIsLoading(true);
    try {
      // logOut();
      // setIsLoggedIn(false);
      // setSavedMovies([])
      setCurrentUser({});
      localStorage.clear();
      navigate("/");
      console.log("handleLogOut suc");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSaveMovie = (movie) => {
    // delete movie._id;
    const isSavedMovie = savedMovies.some(
      (item) => item.movieId === movie.movieId
    );
    if (!isSavedMovie) {
      saveMovie(movie)
        .then((res) => {
          console.log(res);
          savedMovies = [...savedMovies, res];
          setSavedMovies(savedMovies);
          localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
          const updatedAllMovies = allMovies.map((movie) =>
            movie.id === res.movieId
              ? (movie = { ...movie, saved: true })
              : movie
          );
          setAllMovies(updatedAllMovies);
          localStorage.setItem("allMovies", JSON.stringify(updatedAllMovies));
        })
        .catch((err) => console.log(err));
    } else {
      console.log('handleSaveMovie: "фильм уже есть в сохраненных"');
    }
  };

  function handleMovieDelete(movie) {
    deleteMovie(movie._id)
      .then(() => {
        const newSavedMovies = savedMovies.filter(
          (item) => item._id !== movie._id
        );
        setSavedMovies(newSavedMovies);
        localStorage.setItem("savedMovies", JSON.stringify(newSavedMovies));

        const updatedAllMovies = allMovies.map((el) =>
          el.id === movie.movieId ? (el = { ...el, saved: false }) : el
        );
        setAllMovies(updatedAllMovies);
        localStorage.setItem("allMovies", JSON.stringify(updatedAllMovies));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const footerEnable =
    pathname === "/" || pathname === "/movies" || pathname === "/saved-movies";

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                // <ProtectedRoute isLoggedIn={isLoggedIn}>
                //   <Movies
                //     textButton="Сохранить"
                //     allMovies={allMovies}
                //     savedMovies={savedMovies}
                //     isLoading={isLoading}
                //     handleSaveMovie={handleSaveMovie}
                //     handleMovieDelete={handleMovieDelete}
                //   />
                // </ProtectedRoute>
                <ProtectedRoute
                  element={Movies}
                  isLoggedIn={isLoggedIn}
                  textButton="Сохранить"
                  allMovies={allMovies}
                  savedMovies={savedMovies}
                  isLoading={isLoading}
                  handleSaveMovie={handleSaveMovie}
                  handleMovieDelete={handleMovieDelete}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                // <ProtectedRoute isLoggedIn={isLoggedIn}>
                //   <SavedMovies
                //     savedMovies={savedMovies}
                //     handleMovieDelete={handleMovieDelete}
                //   />
                // </ProtectedRoute>
                <ProtectedRoute
                  element={SavedMovies}
                  isLoggedIn={isLoggedIn}
                  savedMovies={savedMovies}
                  handleMovieDelete={handleMovieDelete}
                />
              }
            />
            <Route
              path="/profile"
              element={
                // <ProtectedRoute isLoggedIn={isLoggedIn}>
                //   <Profile
                //     handleLogOut={handleLogOut}
                //     handleUsersUpdate={handleUsersUpdate}
                //     isProfileSaved={isProfileSaved}
                //   />
                // </ProtectedRoute>
                <ProtectedRoute
                  element={Profile}
                  isLoggedIn={isLoggedIn}
                  handleLogOut={handleLogOut}
                  handleUsersUpdate={handleUsersUpdate}
                  isProfileSaved={isProfileSaved}
                />
              }
            />
            <Route
              path="/signup"
              element={<Register handleRegister={handleRegister} />}
            />
            <Route
              path="/signin"
              element={<Login handleAuthorize={handleAuthorize} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
        {footerEnable && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
