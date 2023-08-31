import { API_MOVIE_URL } from "./constants";
import checkResponse from './checkResponse';

export function getMovies = () => {
  return fetch (`${API_MOVIE_URL}/beatfilm-movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(checkResponse)
}