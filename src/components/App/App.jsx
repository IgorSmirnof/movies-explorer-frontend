import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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

function App() {
  const { pathname } = useLocation();

  const footerEnable =
    pathname === "/" || pathname === "/movies" || pathname === "/saved-movies";
  return (
    <CurrentUserContext.Provider value={{}}>
      <div className="app">
        <>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies textButton="Сохранить" />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
        {footerEnable && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
