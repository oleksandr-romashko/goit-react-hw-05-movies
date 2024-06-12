import axios from "axios";

const API_KEY = "f51f93533cb06cebf134fb3842635a6c";

/**
 * Default common parameters for all API requests.
 */
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.params = {
  language: "en-US", 
  api_key: API_KEY
};

/**
 * Get a list of the most popular movies for today.
 */
const getTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`);
  return response.data.results;
};

/**
 * Searches for a movies by their title.
 */
const getMoviesByTitle = async keyword => {
  const response = await await axios.get("search/movie", {
    params: {
      query: keyword,
      page:1,
      include_adult: false,
    }
  });
  return response.data.results;
};

/**
 * Get full movie information.
 */
const getMovieDetailsById = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  console.log('response :>> ', response);
  return response.data;
};

/**
 * Get cast information for a movie.
 */
const getMovieCastById = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits`);
  return response.data.cast;
};

/**
 * Get the user reviews for a movie.
 */
const getMovieReviewsById = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews`,{
      params: {
        page: '1',
      },
    }
  );
  return response.data
};

const api = {
  getTrendingMovies, 
  getMoviesByTitle, 
  getMovieDetailsById, 
  getMovieCastById, 
  getMovieReviewsById
};

export default api;