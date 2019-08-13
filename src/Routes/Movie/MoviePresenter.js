import React from 'react';
import MovieHeader from 'Components/MovieHeader';
import PropTypes from 'prop-types';

const MoviePresenter = ({
  loading,
  trending,
  nowPlaying,
  topRated,
  upcoming,
  error
}) => <MovieHeader />;

MoviePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  trending: PropTypes.array,
  nowPlaying: PropTypes.array,
  topRated: PropTypes.array,
  upcoming: PropTypes.array,
  error: PropTypes.string
};

export default MoviePresenter;
