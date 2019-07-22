import React from "react";
import './Heading.scss'; 
import PropTypes from 'prop-types'; 

const Heading = ({span, content, main, style}) => {
  return (
    <React.Fragment>
       <h2 className="heading" style={style}>
        <span> {span}</span> {main}
      </h2>
      <div className="heading__sub">{content}</div>
    </React.Fragment>
  );
};

Heading.propTypes={
  span: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  style: PropTypes.string,
}

export default Heading;
