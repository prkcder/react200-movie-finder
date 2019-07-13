import { combineReducers } from 'redux';
import movieSearchReducer from './containers/MovieSearchContainer/movieSearchReducer';
import movieDetailReducer from './containers/MovieDetailContainer/movieDetailReducer';

const rootReducer = combineReducers({
  movieSearch: movieSearchReducer,
  movieDetails: movieDetailReducer
});

export default rootReducer;
