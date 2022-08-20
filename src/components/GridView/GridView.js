import React from 'react'
import Product from '../Product/Product'

import "./GridView.css"

const GridView = ({products}) => {
  return (
    <div className='products-container'>
        {products.map((product) => {
            return <Product key={product.id} {...product}></Product>
        })}
    </div>
  )
}



export default GridView