import React from "react";
import { useState } from "react";
import "./MoviesCard.css";

const MoviesCard = ({ movie, textButton }) => {
  let [isLiked, setIsLiked] = useState(movie.like);
  let [isVisibled, setIsVisibled] = useState(false);

  let classButton = null;
    if (isLiked === true) {
      classButton = `movie__button movie__button_like`;
  }
  // console.log('classButton 0', classButton);

  


  const handleOverBlock = () => {
    if (!isLiked) {
      setIsVisibled(true);
    }
  };

  const handleOverBlockClear = () => {
    if (!isLiked) {
      setIsVisibled(false);
     }
  }
  const handleClickDislike = () => {
    setIsLiked(!isLiked);
  };

  if (!isLiked && isVisibled) {
  classButton = `movie__button movie__button_save`;
   }
  


  return (
    <li className="movie">
      <div className="movie__container">
        <img
          className="movie__image"
          src={movie.image}
          alt={movie.name}
          onMouseEnter={handleOverBlock}
          onMouseLeave={handleOverBlockClear}
          // onMouseOver={handleOverLike}
          // onMouseOut={handleOverLike}
        />

        <button
          className={classButton}
          onClick={handleClickDislike}
          type="button"
        >
          {isVisibled ? textButton : null}
        </button>
      </div>
      <div className="movie__description">
        <h2 className="movie__name">{movie.name}</h2>
        <p className="movie__time">{movie.time}</p>
      </div>
    </li>
  );
};

export default MoviesCard;
