import axios from 'axios';

let API= {
  getMovie,
  MovieSearch,
  getMovieInfo,
  getCast,
  getReview,
};

const KEY = `eecf8c65fd813ef076ac9f633cd2051a`;
const URL=`https://api.themoviedb.org/3`;

export async function getMovie(setMovie) {
    try {
      const response = await axios.get(`${URL}/trending/movie/day?api_key=${KEY}`);
      const topMovies = response.data.results;
      setMovie(topMovies);
  } catch (error) {
      console.error(error);
  };
};

 export async function MovieSearch(searchQuery) {
   try {
    const response = await axios.get(`${URL}/search/movie?api_key=${KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`);
    const MoveiInfo = response.data.results;
    return MoveiInfo;
    } catch (error) {
  console.error(error);
};
};
    
export async function getMovieInfo(movieId) {
  try {
    const response = await axios.get(`${URL}/movie/${movieId}?api_key=${KEY}`);
    const movieInfo = response.data;
    return movieInfo;
  } catch (error) {
      console.error(error);
  };
};

export async function getCast(movieId) {
  try {
      const response = await axios.get(`${URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`);
      const MovieCast = response.data.cast;
    return MovieCast;
  } catch (error) {
      console.error(error);
  };
};
    
export async function getReview (movieId) {
    try {
        const response = await axios.get(`${URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`);
        const MovieReview = response.data.results;
      return MovieReview;
    } catch (error) {
        console.error(error);
    };
};

export default API;