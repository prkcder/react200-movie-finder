const defaultState = {
  movieTitle: '',
  movies: [],
  error: ''
};

export default function movieSearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_MOVIES_FULFILLED': {
      return {
        ...state,
        movies: payload.data.Search
      };
    }
    case 'GET_MOVIES_REJECTED': {
      return {
        ...state,
        error: 'Could not get movie'
      };
    }
    case 'UPDATE_SEARCH': {
      return {
        ...state,
        movieTitle: payload
      };
    }
    default:
      return state;
  }
}
