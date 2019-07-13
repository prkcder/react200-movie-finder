const axios = require('axios');

export const updateSearch = movie => ({
  type: 'UPDATE_SEARCH',
  payload: movie
});

export const getMovies = movie => ({
  type: 'GET_MOVIES',
  payload: axios.get(`/movies/${movie}`)
});
