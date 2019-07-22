import React, {useEffect} from "react";
import Banner from "./Banner";
import Content from "./content";
import {connect} from 'react-redux'
import {getProducts} from '../../actions/products'; 
import PropTypes from 'prop-types'; 

const Home = ({getProducts}) => {
  useEffect(()=>{
    getProducts()
  }, [getProducts])
  return (
  <main className="main">
    <Banner />
    <Content />
  </main>
  )
};


Home.propTypes = { 
  getProducts: PropTypes.func.isRequired
}

export default connect(null, {getProducts})(Home);
