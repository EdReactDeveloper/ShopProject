import React from 'react'
import Card from "./Card";


const BestSalesList = ({products: {products, loading}}) => {
  return (
    <ul className="sales__product-list">
    {products && !loading && products.slice(0,3).map((item, i) => (
      <Card item={item} key={i} />
    ))}
  </ul>
  )
}

export default BestSalesList
