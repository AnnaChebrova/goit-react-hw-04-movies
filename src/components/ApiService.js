import axios from 'axios';
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const KEY = `eecf8c65fd813ef076ac9f633cd2051a`;

const getMovie = () => {
  return axios
    .get(`/trending/all/day?api_key=${KEY}`)
    .then((response) => response.data.results);
};

const getMovieInfo = (movie_id) => {
  return axios
    .get(`/movie/${movie_id}?api_key=${KEY}&language=en-US`)
    .then((response) => response.data);
};

const getCast = (movie_id) => {
  return axios
    .get(`/movie/${movie_id}/credits?api_key=${KEY}`)
    .then((response) => response.data.cast);
};

const getReview = (movie_id) => {
  return axios
    .get(`/movie/${movie_id}/reviews?api_key=${KEY}`)
    .then((response) => response.data.results);
};

const MovieSearch = (query) => {
  return axios
    .get(
      `/search/movie?api_key=${KEY}&language=en-US&page=1&query=${query}`
    )
    .then((response) => response.data.results);
};

export default {
getMovie,
getMovieInfo,
  getCast,  
getReview,
  MovieSearch
};