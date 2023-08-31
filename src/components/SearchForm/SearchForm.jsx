import React from "react";
import { useState } from "react";
import "./SearchForm.css";
// import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
// import find from '../../images/find-3.svg';

const SearchForm = () => {
  const [cortoFilm, setCortoFilm] = useState(true);
  return (
    <section className='search__form'>
      <form className='form__search-wrap'>
        <section className='form__search'>
          <input
            className='form__search-input'
            name='search'
            minLength='2'
            maxLength='40'
            type='text'
            placeholder='Фильм'
          />
          <button
            className='form__search-button'
            type='button'
          >
          </button>
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
          />
          <label htmlFor="checkbox" className="filter__toggle">
            Короткометражки
          </label>
        </section>


      </form>
      {/* <FilterCheckbox /> */}
    </section>
  );
};

export default SearchForm;