import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMovies, updateSearch } from './movieSearchActions';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateSearch(value));
  }

  handleClick() {
    const { movieTitle, dispatch } = this.props;
    // console.log(movieTitle);
    dispatch(getMovies(movieTitle));
  }
  render() {
    const { movies } = this.props;
    return (
      <div className=''>
        <h1 className='text-center container'>Movie Finder</h1>
        <div className='input-group mb-5'>
          <input
            className='form-control'
            type='text'
            placeholder='Enter Movie'
            id='searchBox'
            onChange={ this.handleChange }
          />
          <button
            className='btn btn-outline-secondary'
            id='searchBtn' type='button' onClick={ this.handleClick }
          >Go!</button>
        </div>

        {movies.map((movieObj, index) => (
          // the card info down below
          <div className='card mb-3 border border-dark' id='searchResults' key={ index } >
            <div className='card-body'>
              <div className='row'>
                <div className='col-3' id='moviePoster'>
                  <img
                    className='img-fluid border border-dark'
                    src={ movieObj.Poster } alt={ movieObj.Poster }
                  />
                </div>
                <div className='col-9 '>
                  <h3>{ movieObj.Title }</h3>
                  <h6>{ movieObj.Year }</h6>
                  <hr />
                  <p>{ movieObj.Plot }</p>
                  <p>Rating</p>
                  <p>Actors</p>
                  <Link className='more-information btn' to={ `/movie/${movieObj.imdbID}` } >
                    More Information
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    );
  }
}

MovieSearchContainer.propTypes = {
  dispatch: PropTypes.func,
  movieTitle: PropTypes.string
};

function mapStoreToProps(store) {
  return {
    movies: store.movieSearch.movies,
    movieTitle: store.movieSearch.movieTitle,
    error: store.movieSearch.error
  };
}

export default connect(mapStoreToProps)(MovieSearchContainer);
