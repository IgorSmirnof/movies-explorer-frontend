import React from "react";
import { useState } from "react";
import './FilterCheckbox.css'

const FilterCheckbox = ({ onFilter }) => {
  const [cortoFilm, setCortoFilm] = useState(true);
  return (
    <section className='filter'>
      <input
        type='checkbox'
        id='checkbox'
        className='filter__input'
        checked={cortoFilm}
        onChange={() => { setCortoFilm(!cortoFilm) }}
      />
      <label
        htmlFor='checkbox'
        className='filter__toggle'>Короткометражки</label>
    </section>
  )
}

export default FilterCheckbox;