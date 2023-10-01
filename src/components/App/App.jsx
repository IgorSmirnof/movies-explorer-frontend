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
  setUserInfoApi,
  saveMovie,
  deleteMovie,
} from "../../utils/MainApi";
import hanldeErrors from '../../utils/hanldeErrors'

function App() {
  let navigate = useNavigate();
  const { pathname } = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let [savedMovies, setSavedMovies] = useState([]);
  const [isProfileSaved, setIsProfileSaved] = useState(false);
  let [allMovies, setAllMovies] = useState([]);
  const token = localStorage.getItem("jwt");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // логин, получаем токен
  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token, isLoggedIn]);

  // сохр в контекст юзера
  useEffect(() => {
    if (isLoggedIn) {
      getUserInfoApi(token)
        .then((res) => setCurrentUser(res.data))
        .catch((e) => {
          setIsLoggedIn(false);
        });
    }
  }, [isLoggedIn, token]);

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([getSaveMovie(token), getMovies()])
        .then(
        ([savedMovies, movies]) => {
          setSavedMovies(savedMovies);
          setAllMovies(movies);
          localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
          localStorage.setItem("allMovies", JSON.stringify(movies));
        }
      )
      .catch((e) => console.log(e));
    }
  }, [isLoggedIn, token]);

  useEffect(() => {
    allMovies.map((el) => {
      if (savedMovies.some((item) => item.movieId === el.id)) {
        return (el.saved = true);
      } else {
        return (el.saved = false);
      }
    });
    setAllMovies(allMovies);
    localStorage.setItem("allMovies", JSON.stringify(allMovies));
  }, [savedMovies, allMovies]);

  const [errorRegister, setErrorRegister] = useState('');
  const handleRegister = (data) => {
    setIsLoading(true);
    setIsSubmitting(true)
    register(data)
      .then((res) => {
        if (res.name || res.email) {
          handleAuthorize(data);
        }
      })
      .catch((e) => {
        hanldeErrors(e, setErrorRegister);
        console.log(e)
      })
      .finally(() => {
        setIsLoading(false);
        setIsSubmitting(false)
      });
  };

  const handleAuthorize = (data) => {
    setIsLoading(true);
    setIsSubmitting(true)
    authorize(data)
      .then((data) => {
        if (data.token) {
          setIsLoggedIn(true);
          setCurrentUser(data.user);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
        setIsSubmitting(false)
      })
    console.log("handleAuthorize", isLoggedIn);
  };


  const handleUsersUpdate = (userData) => {
    setIsLoading(true);
    setIsSubmitting(true)
    setUserInfoApi(userData, token)
      .then((profile) => {
        setCurrentUser({
          name: profile.name,
          email: profile.email,
        });
        setIsProfileSaved(true);
      })
      .catch((e) => setIsProfileSaved(false))
      .finally(() => {
        setIsLoading(false)
        setIsSubmitting(false)
      });
  };

  function handleLogOut() {
    // setIsLoading(true);
    try {
      setCurrentUser({});
      localStorage.clear();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoggedIn(false);
      setIsLoading(false);
      navigate("/", {replace: true});
      setIsSubmitting(false)
      console.log("isLoggedIn outt: ", isLoggedIn);
    }
  }

  const handleSaveMovie = (movie) => {
    const isSavedMovie = savedMovies.some(
      (item) => item.movieId === movie.movieId
    );
    if (!isSavedMovie) {
      saveMovie(movie)
        .then((res) => {
          // console.log(res);
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

  function handleMovieDelete(movie, like) {
    deleteMovie(movie._id, token)
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
          {/* {isLoading ? ():} */}
          <Routes>
            <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  isLoggedIn={isLoggedIn}
                  textButton="Сохранить"
                  allMovies={allMovies}
                  savedMovies={savedMovies}
                  isLoading={isLoading}
                  handleSaveMovie={handleSaveMovie}
                  handleMovieDelete={handleMovieDelete}
                  setIsLoggedIn={setIsLoggedIn}
                  // getAllMovies={getAllMovies}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
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
                <ProtectedRoute
                  element={Profile}
                  isLoggedIn={isLoggedIn}
                  handleLogOut={handleLogOut}
                  handleUsersUpdate={handleUsersUpdate}
                  isProfileSaved={isProfileSaved}
                  setIsProfileSaved={setIsProfileSaved}
                  isSubmitting={isSubmitting}
                />
              }
            />
            <Route
              path="/signup"
              element={<Register
                handleRegister={handleRegister}
                isSubmitting={isSubmitting}
                errorRegister={errorRegister}
                setErrorRegister={setErrorRegister}
              />}
            />
            <Route
              path="/signin"
              element={
                <Login
                  handleAuthorize={handleAuthorize}
                  isLoading={isLoading}
                  isSubmitting={isSubmitting}
                />
              }
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
