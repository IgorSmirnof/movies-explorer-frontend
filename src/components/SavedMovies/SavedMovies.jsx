import React from "react";
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';
import "./SavedMovies.css";

const SavedMovies = ({ textButton }) => {
  return (
    <main>
      <Header />
      <section className='movies'>
        <SearchForm />
        <MoviesCardList textButton={textButton} />
        {/* <button className='movies__button'>Еще</button> */} 
        {/* <div className={location.pathname === '/saved-movies' ? "movies__button-non" : "movies__button-nohay"}>786748654</div> */}
        <div className="movies__button-non">
         </div>
      </section>
    </main>

  );
};

export default SavedMovies;