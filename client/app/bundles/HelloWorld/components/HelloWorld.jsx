import PropTypes from 'prop-types';
import React from 'react';

const HelloWorld = ({ tweets, user }) => (
  <div className="what">

  </div>
);

HelloWorld.propTypes = {
  tweets: PropTypes.string,
  user: PropTypes.string,
  props: PropTypes.any
};

export default HelloWorld;
