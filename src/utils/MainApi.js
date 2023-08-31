import { API_MY_URL } from "./constants";
import checkResponse from './checkResponse';

export function getUserInfoApi() {
  return fetch(`${API_MY_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem('jwt')}`
    },
  })
    .then(checkResponse);
}

export function setUserInfoApi(data) {
  return fetch(`${API_MY_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem('jwt')}`
    },
    body: JSON.stringify({
      name: data.name,
      about: data.about,
    }),
  })
    .then(checkResponse);
}

export function register(password, email, password) {
  return fetch(`${API_MY_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email, password })
  })
    .then(checkResponse);
};

export function authorize(email, password ) {
  return fetch(`${API_MY_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
    .then(checkResponse);
};

export function checkToken(token) {
  return fetch(`${API_MY_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  })
    .then(checkResponse);
}

export function saveMovie(movie ) {
  return fetch(`${API_MY_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ movie })
  })
    .then(checkResponse);
};

export function getSaveMovie() {
  return fetch(`${API_MY_URL}/signin`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(checkResponse);
};

export function deleteMovie(movieId ) {
  return fetch(`${API_MY_URL}/signin`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(checkResponse);
};


// class Api {
//   constructor(config) {
//     this._url = config.url;
//     this._headers = config.headers;
//     // this._authorization = config.headers["authorization"];
//   }
//   // получить данные с сервера
//   // getInitialCards() {
//   //   return fetch(`${this._url}/cards`, {
//   //     method: "GET",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //       authorization: `Bearer ${localStorage.getItem('jwt')}`
//   //     },
//   //     // credentials: 'include',
//   //   })
//   //   // .then((res) => this._checkResponse(res));
//   //   .then(checkResponse)
//   // }

//   // другие методы работы с API

//   //получить данные пользователя с сервера
//   // getUserInfoApi() {
//   //   return fetch(`${this._url}/users/me`, {
//   //     method: "GET",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //       authorization: `Bearer ${localStorage.getItem('jwt')}`
//   //     },
//   //   })
//   //     // .then((res) => this._checkResponse(res));
//   //     .then(checkResponse)
//   // }

//   //передать данные пользователя на сервер
//   // setUserInfoApi(data) {
//   //   return fetch(`${this._url}/users/me`, {
//   //     method: "PATCH",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //       authorization: `Bearer ${localStorage.getItem('jwt')}`
//   //     },
//   //     body: JSON.stringify({
//   //       name: data.name,
//   //       about: data.about,
//   //     }),
//   //     // credentials: 'include',
//   //   })
//   //     // .then((res) => this._checkResponse(res));
//   //   .then(checkResponse)
//   // }

//   //добавление новой карточки на сервер
//   addNewCards(data) {
//     return fetch(`${this._url}/cards`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${localStorage.getItem('jwt')}`
//       },
//       body: JSON.stringify({
//         name: data.name,
//         link: data.link,
//       }),
//     })
//       // .then((res) => this._checkResponse(res));
//     .then(checkResponse)
//   }

//   //передача лайка на сервер
//   // sendLike(dataId) {
//   //   return fetch(`${this._url}/cards/${dataId}/likes`, {
//   //     method: "PUT",
//   //     headers: {
//   //       authorization: this._authorization,
//   //     },
//   //   }).then((res) => this._checkResponse(res));
//   // }

//   // //удаление лайка на сервере
//   // deleteLike(dataId) {
//   //   return fetch(`${this._url}/cards/${dataId}/likes`, {
//   //     method: "DELETE",
//   //     headers: {
//   //       authorization: this._authorization,
//   //     },
//   //   }).then((res) => this._checkResponse(res));
//   // }

//   changeLikeCardStatus(dataId, isLiked ) { 
//     if (isLiked) {
//       return fetch(`${this._url}/cards/${dataId}/likes`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           authorization: `Bearer ${localStorage.getItem('jwt')}`
//         },
//       })
//         // .then((res) => this._checkResponse(res));
//     .then(checkResponse)
//     } else {
//       return fetch(`${this._url}/cards/${dataId}/likes`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           authorization: `Bearer ${localStorage.getItem('jwt')}`
//         },
//       })
//         // .then((res) => this._checkResponse(res));
//     .then(checkResponse)
//     }


//   }




//   //удаление карточки с сервера
//   deleteCardApi(dataId) {
//     return fetch(`${this._url}/cards/${dataId}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${localStorage.getItem('jwt')}`
//       },
//     })
//       // .then((res) => this._checkResponse(res));
//     .then(checkResponse)
//   }

//   //------- смена автарки ------------
//   setUserAvatar(data) {
//     return fetch(`${this._url}/users/me/avatar`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${localStorage.getItem('jwt')}`
//       },
//       body: JSON.stringify({
//         avatar: data.avatar,
//       }),
//       // credentials: 'include',
//     })
//       // .then((res) => this._checkResponse(res));
//     .then(checkResponse)
//   }

//   //---------проверка /вывод ошибки----------
//   // _checkResponse(res) {
//   //   if (res.ok) {
//   //     return res.json();
//   //   }
//   //   return Promise.reject(
//   //     `Пердоньте Монсеньёр: есть Ошибка: ${res.status}`
//   //   );
//   // }
// }

// export const api = new Api(apiConfig);

// export default checkResponse;