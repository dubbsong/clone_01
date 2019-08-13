import React from 'react';
import TVHeader from 'Components/TVHeader';
import PropTypes from 'prop-types';

const TVPresenter = ({
  loading,
  trending,
  onTheAir,
  popular,
  topRated,
  error
}) => <TVHeader />;

TVPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  trending: PropTypes.array,
  onTheAir: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  error: PropTypes.string
};

export default TVPresenter;
