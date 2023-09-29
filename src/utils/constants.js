const API_MOVIE_URL = 'https://api.nomoreparties.co';
const API_MY_URL = 'https://api.smirnov.nomoreparties.co';

const NAME_REXP = /^[A-Za-zА-Яа-яёЁ\\s]{2,30}$/;
const EMAIL_REXP = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.[a-z]{2,}/;
// const EMAIL_VALID = "[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.[a-z]{2,}";

const VALIDATION = {
  name: {
    pattern: "^[A-Za-zА-Яа-яёЁ\\s]{2,30}$",
    message: 'Имя может содержать только латиницу, кириллицу, пробел или дефис.',
  },
  email: {
    pattern: "[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.[a-z0-9]{2,}",
    message: 'Некорректный email.',
  },
};
module.exports = {API_MOVIE_URL, API_MY_URL, EMAIL_REXP, NAME_REXP, VALIDATION };
// module.exports = {API_MOVIE_URL, API_MY_URL, VALIDATION };