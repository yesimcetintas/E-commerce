import React from 'react'
import { formatPrice } from '../../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import "./Product.css"

const Product = ({ image, title, price, id }) => {
  return (
    <div>
        <div className='container'>
            <img src={image} alt={title} className='dashboard-img'/>
            <Link to={`/products/${id}`} className='link'>
                <FaSearch />
            </Link>
        </div>
        <footer>
            <h5>{title}</h5>
            <p>{formatPrice(price)}</p>
    </footer>
</div>
  )
}

export default Product
