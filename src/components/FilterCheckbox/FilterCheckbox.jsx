import React from "react";
import { useState } from "react";
import './FilterCheckbox.css'

const FilterCheckbox = ({ onFilter }) => {
  const [shortFilm, setShortFilm] = useState(true);
  return (
    <section className='filter'>
      <input
        type='checkbox'
        id='checkbox'
        className='filter__input'
        checked={shortFilm}
        onChange={() => { setShortFilm(!shortFilm) }}
      />
      <label
        htmlFor='checkbox'
        className='filter__toggle'>Короткометражки</label>
    </section>
  )
}

export default FilterCheckbox;