import axios from "axios";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

/**
 * Movie, TV and person objects contain references to different file paths. 
 * In order to generate a fully working image URL, you'll need 3 pieces of data. 
 * Those pieces are a `base_url`, a `file_size` and a `file_path`.
 * The first two pieces can be retrieved by calling the /configuration API
 * https://developer.themoviedb.org/reference/configuration-details
 */
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
const IMAGE_POSTER_SIZE = "w500";
const IMAGE_PROFILE_SIZE = "h632";


/**
 * Common (default) parameters for all requests.
 */
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.params = {
  api_key: API_KEY,
  include_adult: false,
  language: "en-US" 
};

/**
 * Get a list of the most popular movies for today.
 * Obtains results for the first page only.
 * https://developer.themoviedb.org/reference/trending-all
 * @returns {object[]} Array of movie objects.
 */
const getTrendingMovies = async () => {
  const response = await axios.get("trending/movie/day",
    {
      params: {
        page:1,
      }
    }
  );
  return response.data.results;
};

/**
 * Searches for a movies by their title.
 * Obtains results for the first page only.
 * https://developer.themoviedb.org/reference/search-movie
 * @param {string} keyword Search query keyword.
 * @returns {object[]} Array of movie objects.
 */
const getMoviesByTitle = async keyword => {
  const response = await axios.get("search/movie", {
    params: {
      query: keyword,
      page:1,
    }
  });
  return response.data.results;
};

/**
 * Gets full movie information details.
 * @param {string|number} movieId Id of the movie.
 * @returns {object} Movie information details.
 */
const getMovieDetailsById = async movieId => {
  const response = await axios.get(`movie/${movieId}`);
  return response.data;
};

/**
 * Gets actor cast information for the specific movie.
 * @param {string|number} movieId Id of the movie.
 * @returns {object[]} Array of actor cast information.
 */
const getMovieCastById = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits`);
  return response.data.cast;
};

/**
 * Gets user reviews for the specific movie.
 * @param {string|number} movieId Id of the movie. 
 * @param {number} [page = 1] Number of reviews page. 
 * @returns {object} Information about movie reviews, including reviews itself.
 */
const getMovieReviewsById = async (movieId, page = 1) => {
  const response = await axios.get(`movie/${movieId}/reviews`,{
      params: {
        page: page,
      },
    }
  );
  return response.data
};

const api = {
  IMAGE_BASE_URL,
  IMAGE_POSTER_SIZE,
  IMAGE_PROFILE_SIZE,
  getTrendingMovies, 
  getMoviesByTitle, 
  getMovieDetailsById, 
  getMovieCastById, 
  getMovieReviewsById
};

export default api;