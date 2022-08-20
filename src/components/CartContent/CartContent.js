import React from 'react'
import { useCartContext } from '../../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from '../CartColumns/CartColumns'
import CartItem from '../CartItem/CartItem'
import CartTotals from '../CartTotals/CartTotals'

import "./CartContent.css"

const CartContent = () => {
  const { cart, clearCart } = useCartContext()
  return (
    <div className='section section-center'>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <hr />
      <div className='link-container'>
        <Link to='/' className='link-btn'>
          alışverişe devam et
        </Link>
        <button
          type='button'
          className='link-btn clear-btn'
          onClick={clearCart}
        >
          sepeti sil
        </button>
      </div>
      <CartTotals />
    </div>
  )
}

export default CartContent