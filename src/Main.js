import React from 'react';
import PropTypes from 'prop-types';

const FullHeader = ({ title, subtitle, bgColor, bgImg, textColor, font }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    backgroundImage: `url(${bgImg})`,
    color: textColor,
    fontFamily: font,
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
  subtitle: PropTypes.string,
  bgColor: PropTypes.string,
  bgImg: PropTypes.string,
  textColor: PropTypes.string,
  font: PropTypes.string,
};

FullHeader.defaultProps = {
  bgColor: '#ccc',
  bgImg: '',
  textColor: '#fff',
  font: 'sans-serif',
};

export default FullHeader;
