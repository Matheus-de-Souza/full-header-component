import React from 'react';
import PropTypes from 'prop-types';

import { headerStyle, containerStyle, titleStyle, subtitleStyle } from './Styles';

const propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  bgColor: PropTypes.string,
  bgImg: PropTypes.string,
  textColor: PropTypes.string,
  font: PropTypes.string,
};

const defaultProps = {
  bgColor: '#ccc',
  bgImg: '',
  textColor: '#fff',
  font: 'sans-serif',
};

const FullHeader = ({ title, subtitle, bgColor, bgImg, textColor, font }) => {
  const headerStylesCombined = {
    ...headerStyle,
    backgroundColor: bgColor,
    backgroundImage: `url(${bgImg})`,
    color: textColor,
    fontFamily: font,
  };

  const component = (
    <header style={headerStylesCombined}>
      <div style={containerStyle}>
        {title && <h1 style={titleStyle}>{title}</h1>}
        {subtitle && <h2 style={subtitleStyle}>{subtitle}</h2>}
      </div>
    </header>
  );

  return component;
};

FullHeader.propTypes    = propTypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;
