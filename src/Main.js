import React from 'react';
import PropTypes from 'prop-types';


const FullHeader = ({ title, subtitle, bgColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
  };

  const component = (
    <header style={headerStyles}>
      {title && <h1>{title}</h1>}
      {subtitle && <h2>{subtitle}</h2>}
    </header>
  );

  return component;
};

FullHeader.propTypes = {
  title: PropTypes.string,
};

FullHeader.defaultProps = {
  bgColor: '#ccc',
};

export default FullHeader;
