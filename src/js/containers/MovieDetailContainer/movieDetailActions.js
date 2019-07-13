const axios = require('axios');

export const getMovieDetails = (movieID) => ({
  type: 'GET_MOVIE_DETAILS',
  payload: axios.get(`/movie/${movieID}`)
});
