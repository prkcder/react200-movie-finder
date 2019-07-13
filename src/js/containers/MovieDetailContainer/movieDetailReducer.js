const defaultState = {
  moreInfo: [],
  error: ''
};

export default function movieDetailReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_MOVIE_DETAILS_FULFILLED': {
      return {
        ...state,
        moreInfo: payload.data
      };
    }
    case 'GET_MOVIE_DETAILS_REJECTED': {
      return {
        ...state,
        error: 'Could not get movie information'
      };
    }
    default: 
      return state;
  }
}