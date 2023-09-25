import React from "react";
import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({
  handleCheckBoxClick,
  wordFind = "",
  handleMoviesSearch,
  isCheckBoxActive,
  moviesRender,
}) => {
  const [cortoFilm, setCortoFilm] = useState(false);
  const searchBtn = document.querySelector(".form__search-button");
  const [textSearch, setTextSearch] = useState(wordFind);
  const [isSpanActive, setIsSpanActive] = useState(false);

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
    localStorage.setItem("wordFind", value);

    if (value.length !== 0) {
      setIsSpanActive(false);
      searchBtn.removeAttribute("disabled", "disabled");
    } else {
      setIsSpanActive(true);
      searchBtn.setAttribute("disabled", "disabled");
    }
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
            checked={cortoFilm}
            onChange={() => {
              setCortoFilm(!cortoFilm);
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
