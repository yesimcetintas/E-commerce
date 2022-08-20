import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../../context/products_context'
import { useCartContext } from '../../context/cart_context'

import "./CartButtons.css"

const CartButtons = () => {
  const { closeSidebar } = useProductsContext()
  const { total_items, clearCart } = useCartContext()

  return (
    <div className='cartbuttons-section'>
      <div className='cart-btn-wrapper'>
        <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
          Sepet
          <span className='cart-container'>
            <FaShoppingCart />
            <span className='cart-value'>{total_items}</span>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default CartButtons