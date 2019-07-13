import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMovieDetails } from './movieDetailActions';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getMovieDetails(this.props.match.params.id));
  }

  render() {
    const { moreInfo } = this.props;
    return (
      <div className='container'>
        <h1 className='text-center mb-3'>Movie Finder</h1>
        <Link to='/'>Go Back</Link>
        <br />
        <div className='row'>
          <div className='col-md-5 mb-2' id='moviePoster'>
            <img className='img-fluid' src={ moreInfo.Poster } alt={ moreInfo.Poster } />
          </div>
          <div className='card mb-3 col-md-7'>
            <div className='card-header '>Movie Details</div>
            <div className='card-body'>
              {/* <div className='row'> */}
                <div className=''>
                  <h3 className='card-text' id='movie-title' >{ moreInfo.Title }</h3>
                  <h6 className='card-text'>{ moreInfo.Year }</h6>
                  <h6 className='card-text'>{ moreInfo.Runtime }</h6>
                  <h6 className='card-text'>{ moreInfo.Genre }</h6>
                  <br />
                  <p className='card-text' id='plot'>{ moreInfo.Plot }</p>
                  <p className='card-text' id='plot'>{ moreInfo.Awards }</p>
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        {/*
        <p>Viewing movie {this.props.match.params.id}</p> */}
      </div>
    );
  }
}

MovieDetailContainer.propTypes = {
  dispatch: PropTypes.func
};

function mapStoreToProps(store) {
  return {
    moreInfo: store.movieDetails.moreInfo
  };
}

export default connect(mapStoreToProps)(MovieDetailContainer);
