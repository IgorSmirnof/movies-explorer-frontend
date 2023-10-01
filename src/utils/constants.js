const API_MOVIE_URL = 'https://api.nomoreparties.co';
const API_MY_URL = 'https://api.smirnov.nomoreparties.co';

const NAME_REXP = /^[A-Za-zА-Яа-яёЁ0-9\\s]{2,30}$/;
const EMAIL_REXP = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.[a-z]{2,}/;
// const EMAIL_VALID = "[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.[a-z]{2,}";

const VALIDATION = {
  name: {
    pattern: "^[A-Za-zА-Яа-яёЁ0-9\\s]{2,30}$",
    message: 'Имя может содержать только латиницу, кириллицу, цифры, пробел или дефис.',
  },
  email: {
    pattern: "[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.[a-z0-9]{2,}",
    message: 'Некорректный email.',
  },
};


const SCREEN_LG = 1280;
const SCREEN_MD = 767;

const IN_MOVIE_LG = 12;
const IN_MOVIE_MD = 8;
const IN_MOVIE_SM = 5;

const ADD_MOVIE_LG = 3;
const ADD_MOVIE_MD = 2;
const ADD_MOVIE_SM = 2;

const DUR_SHORT_FILM = 40;

module.exports = {API_MOVIE_URL, API_MY_URL, EMAIL_REXP, NAME_REXP, VALIDATION, SCREEN_LG, SCREEN_MD, IN_MOVIE_LG, IN_MOVIE_MD, IN_MOVIE_SM, ADD_MOVIE_LG, ADD_MOVIE_MD, ADD_MOVIE_SM, DUR_SHORT_FILM };
// module.exports = {API_MOVIE_URL, API_MY_URL, VALIDATION };