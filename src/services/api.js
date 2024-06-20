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
  const response = await axios.get("search/movie", {
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
    `movie/${movieId}`
  );
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
 * Get user reviews for a movie.
 * @param {string|number} movieId Id of the movie. 
 * @param {number} [page = 1] Number of reviews page. 
 * @returns {object} Information about reviews, including reviews.
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