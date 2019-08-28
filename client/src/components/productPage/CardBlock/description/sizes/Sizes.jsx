import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { fetchSize } from '../../../../../store/actions/cart';
import './Sizes.scss';

const Sizes = ({ sizes, fetchSize }) => {
  
  const [sizeData, setSize] = useState({
    index: 0
  });

  const { index } = sizeData;

  useEffect(
    () => {
      setSize({ index: 0 });
      fetchSize(sizes[0].join(''));
    },
    [sizes, fetchSize]
  );

  const sizeHandler = i => {
    setSize({ index: i });
    fetchSize(sizes[i].join(''));
  };

  const sizesList = sizes.map((item, i) => (
    <input
      style={{ background: item }}
      type="button"
      className={`size__item ${i === index && 'size__selected'}`}
      onClick={() => sizeHandler(i)}
      key={item}
      value={item}
    />
  ));

  return (
    <div className="size__wrapper">
      <div className="size__list">
        <label htmlFor="size" className="size__label">
          <FormattedMessage id="size" defaultMessage="Size" />
          {sizesList}
        </label>
      </div>
    </div>
  );
};

Sizes.propTypes = {
  fetchSize: PropTypes.func.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string.isRequired)).isRequired
};

export default connect(null, { fetchSize })(Sizes);
