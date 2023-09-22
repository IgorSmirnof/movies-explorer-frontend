const API_MOVIE_URL = 'https://api.nomoreparties.co';
const API_MY_URL = 'https://api.smirnov.nomoreparties.co';


const EMAIL_REXP = /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
// const URL_REXP = /^(https?:\/\/)?([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/i;
const NAME_REXP = /^[а-яА-ЯёЁa-zA-Z0-9 -]+$/;

module.exports = {API_MOVIE_URL, API_MY_URL, EMAIL_REXP, NAME_REXP };