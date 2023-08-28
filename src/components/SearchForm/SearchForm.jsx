import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
// import find from '../../images/find-3.svg';

const SearchForm = () => {
  return (
    <section className='search__form'>
      <form className='form__search'>
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
          // <img src={find} alt='Логотип' />
          // background-image={find}
        >
          
        </button>
      </form>
      <FilterCheckbox />
    </section>
  );
};

export default SearchForm;