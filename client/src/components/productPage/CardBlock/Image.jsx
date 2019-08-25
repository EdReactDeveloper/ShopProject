import React, { useEffect, useState } from 'react';
import '../styles/Image.scss';
import PropTypes from 'prop-types';
import Loader from '../../ui/loader';

const ImageComponent = ({ images }) => {
  const [imageData, setImage] = useState({
    image: null,
    index: 0
  });

  const { image, index } = imageData;

  useEffect(
    () => {
      setImage({ image: images[0], index: 0 });
    },
    [images]
  );

  const chooseImage = i => {
    setImage({ image: images[i], index: i });
  };

  let imageList = images.map((item, i) => (
    <button
      className={`productImage__left-tmbwrapper ${i === index ? 'productImage__left-selected' : ''}`}
      onClick={() => chooseImage(i)}
      key={i}
    >
      <img src={item} alt="is missing" className="productImage__left-tmb" />
    </button>
  ));

  return (
    <section className="productImage__left">
      <div className="productImage__left-img--wrapper">
        {images ? (
          <img src={image} alt="is missing" className="productImage__left-img" />
        ) : (
          <div>
            <Loader />
          </div>
        )}
      </div>
      <div className="productImage__left-tmbbox">{imageList}</div>
    </section>
  );
};

ImageComponent.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageComponent;
