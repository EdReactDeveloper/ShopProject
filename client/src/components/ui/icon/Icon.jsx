import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({ style = {}, fill = '#000', width = '100%', className = '', size = '24', sizeX = '0', d, clicked }) => (
  <svg
    aria-hidden="true"
    width={width}
    style={style}
    height={width}
    viewBox={`${sizeX} ${sizeX} ${size} ${size}`}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    onClick={clicked}
  >
    <path fill={fill} d={d} />
  </svg>
);

SVG.propTypes = {
  d: PropTypes.string.isRequired,
  style: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  viewBox: PropTypes.string,
  clicked: PropTypes.func
};

export default SVG;
