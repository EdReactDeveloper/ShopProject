import React, {useEffect} from "react";
import Banner from "./Banner";
import Content from "./content";
import {connect} from 'react-redux'
import {getProducts} from '../../actions/products'; 

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

export default connect(null, {getProducts})(Home);
