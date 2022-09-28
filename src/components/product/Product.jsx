import "./Product.css"
import React from 'react'

const Product = ({img,link}) => {
  return (
    <div className="p">
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href={link}>
            <img src={img} target="_blank" alt="" className="p-img" />
        </a>
    </div>
  )
}

export default Product