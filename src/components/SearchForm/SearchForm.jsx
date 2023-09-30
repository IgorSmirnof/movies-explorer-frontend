import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = ({
  handleCheckBoxClick,
  wordFind = "",
  handleMoviesSearch,
  isCheckBoxActive,
  setIsCheckBoxActive,
  moviesRender,
}) => {
  const [shortFilm, setShortFilm] = useState(false);
  const searchBtn = document.querySelector(".form__search-button");
  const [textSearch, setTextSearch] = useState(wordFind);
  const [isSpanActive, setIsSpanActive] = useState(false);
  const location = useLocation();

  // изв из ЛС статус кмф
  // const isCheckBoxActive = () => {
  //   const userCheckBoxStatus = JSON.parse(localStorage.getItem("checkBox"));
  //   return userCheckBoxStatus ? userCheckBoxStatus : false;
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (textSearch) {
      handleMoviesSearch(textSearch, isCheckBoxActive);
    } else {
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setTextSearch(value);
    if (location.pathname === "/movies") {
    localStorage.setItem("wordFind", value);
    }

    if (value.length !== 0) {
      setIsSpanActive(false);
      searchBtn.removeAttribute("disabled", "disabled");
    } else {
      setIsSpanActive(true);
      searchBtn.setAttribute("disabled", "disabled");
    }
    // const newIsChecked = !isCheckBoxActive;
    // setIsCheckBoxActive(newIsChecked);
  };

  return (
    <section className="search__form">
      <form
        className="form__search-wrap"
        id="form__search-wrap"
        noValidate
        onSubmit={handleFormSubmit}
      >
        <section className="form__search">
          <input
            className={`form__search-input ${
              isSpanActive ? "form__search-input_active" : ""
            }`}
            name="search"
            // minLength="2"
            maxLength="40"
            type="text"
            // placeholder='Фильм'
            placeholder={isSpanActive ? "Нужно ввести ключевое слово" : "Фильм"}
            onChange={handleChange}
            value={textSearch}
          />
          {/* <p
            className={`searchfilm__span ${
              isSpanActive ? "searchfilm__span_active" : ""
            }`}
          >
              Нужно ввести ключевое слово
          </p> */}
          <button
            className="form__search-button"
            type="submit"
            form="form__search-wrap"
          ></button>
        </section>

        <section className="filter">
          <input
            type="checkbox"
            id="checkbox"
            className="filter__input"
            checked={shortFilm}
            onChange={() => {
              setShortFilm(!shortFilm);
            }}
            onClick={handleCheckBoxClick}
          />
          <label htmlFor="checkbox" className="filter__toggle">
            Короткометражки
          </label>
        </section>
      </form>
      {moviesRender.length === 0 ? (
        <div className="form__search-notfound">Ничего не найдено...</div>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default SearchForm;
