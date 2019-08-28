import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { fetchColor } from '../../../../../store/actions/cart';
import './Colors.scss';

const Colors = ({ colors, fetchColor }) => {
  const [colorData, setColor] = useState({
    index: 0
  });

  const { index } = colorData;

  useEffect(
    () => {
      setColor({ index: 0 });
      fetchColor(colors[0].join(''));
    },
    [colors, fetchColor]
  );

  const colorHandler = i => {
    setColor({ color: colors[i], index: i });
    fetchColor(colors[i].join(''));
  };

  const colorsList = colors.map((item, i) => (
    <input
      key={item}
      type="button"
      style={{ background: item }}
      onClick={() => colorHandler(i)}
      className={`colors__item ${i === index && 'colors__selected'}`}
    />
  ));

  return (
    <div className="colors__wrapper">
      <label htmlFor="color" className="colors__label">
        <FormattedMessage id="color" defaultMessage="Color" />
        {colorsList}
      </label>
    </div>
  );
};

Colors.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string.isRequired)).isRequired,
  fetchColor: PropTypes.func.isRequired
};

export default connect(null, { fetchColor })(Colors);
