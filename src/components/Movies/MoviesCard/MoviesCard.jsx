import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./MoviesCard.css";

const MoviesCard = ({ movie, textButton, handleClick }) => {
  const { nameRU, duration, image } = movie;

  let isLiked = movie.saved;
  let [isMouseOver, setIsMouseOver] = useState(false);
  const location = useLocation();

  function setPathImage() {
    if (location.pathname === "/movies") {
      return `https://api.nomoreparties.co/${image.url}`;
    } else {
      return image;
    }
  }

  let classButton = null;
  if (isLiked === true) {
    classButton = `movie__button movie__button_like`;
  }

  // useEffect(() => {
  if (!isLiked && isMouseOver) {
    classButton = `movie__button movie__button_save`;
  }
  //     else if (!isLiked && !isMouseOver) {
  //     classButton = `movie__button`;
  //   }
  // },[setIsMouseOver])

  const handleMouseOver = () => {
    // if (!isLiked) {
    setIsMouseOver(!isMouseOver);
    // }
  };

  const handleClickLike = () => {
    // setIsLiked(!isLiked);
    handleClick(movie, isLiked);
    setIsMouseOver(isMouseOver);
  };

  function timeConvert(duration) {
    const hours = duration / 60;
    const realHours = Math.floor(hours);
    const minutes = (hours - realHours) * 60;
    const realMinutes = Math.round(minutes);
    return realHours + "ч " + realMinutes + "м";
  }

  return (
    <li className="movie">
      <div
        className="movie__container"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOver}
      >
        <img className="movie__image" src={setPathImage()} alt={nameRU} />

        <button className={classButton} type="button" onClick={handleClickLike}>
          {isMouseOver && !isLiked ? textButton : null}
        </button>
      </div>
      <div className="movie__description">
        <h2 className="movie__name">{nameRU}</h2>
        <p className="movie__time">{timeConvert(duration)}</p>
      </div>
    </li>
  );
};

export default MoviesCard;
