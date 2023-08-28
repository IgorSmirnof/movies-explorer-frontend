import React from "react";
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';
import "./SavedMovies.css";

const SavedMovies = ({ textButton }) => {
  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm />
        <MoviesCardList textButton={textButton} />
        {/* <button className='movies__button'>Еще</button> */} 
      </main>
    </>

  );
};

export default SavedMovies;