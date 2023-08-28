import React from "react";
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

const Movies = ({ textButton }) => {
  const isLoading = false;
  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm />
        {!isLoading ? (<MoviesCardList textButton={textButton} />) : <Preloader/>}
        <button className='movies__button'>Еще</button>
      </main>
    </>

  );
};

export default Movies;
