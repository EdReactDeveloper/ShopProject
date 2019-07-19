import React, {useEffect, useState} from 'react';
import '../styles/Image.scss';

const ImageComponent = ({images}) => {
  
	const [imageData, setImage] = useState({
    image: null, 
    index: 0
  })

  const {image, index} = imageData; 


  useEffect(()=>{
    setImage({image: images[0], index: 0})
  }, [images])
  
  	const chooseImage = i => {
		setImage({image: images[i], index: i})
	};
	return (
		<div className="productImage__left">
			<div className="productImage__left-img--wrapper">
				{images ? (
					<img src={image} alt="is missing" className="productImage__left-img" />
				) : (
					<div>loading...</div>
				)}
			</div>

			<div className="productImage__left-tmbbox">
				{images.map((item, i) => (
					<button className={`productImage__left-tmbwrapper ${i === index ? 'productImage__left-selected' : ''}`}  onClick={() => chooseImage(i)} key={i}>
						<img src={item} alt="is missing" className="productImage__left-tmb" />
					</button>
				))}
			</div>
		</div>
	);
};

export default ImageComponent;
