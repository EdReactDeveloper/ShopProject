import React from 'react'
import { Product } from "../../../ui/icon/Selection";
import Icon from "../../../ui/icon/Icon";
const Rating = ({stars}) => {
  let arr = []
  for(let i = 0; i < stars; i++){
    arr.push(Product.star)
  }
  return (
    <div className="sales__product-item-stars">
      {arr.map((item, i)=> {
        return <Icon d={item} className="sales__product-icon" key={i} />
      })}
    </div>
  )
}

export default Rating
