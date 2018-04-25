import React from 'react';
import PropTypes from 'prop-types';

const FullHeader = ({ name }) => (
  <header>Hello {name}!</header>
);

FullHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FullHeader;
