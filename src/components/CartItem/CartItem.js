import React from 'react'
import { formatPrice } from '../../utils/helpers'
import AmountButtons from '../AmontButton/AmontButton'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../../context/cart_context'

import "./CartItem.css"

const CartItem = ({ id, image, title, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext()
  const increase = () => {
    toggleAmount(id, 'inc')
  }
  const decrease = () => {
    toggleAmount(id, 'dec')
  }
  return (
    <div className='cartitem-article'>
      <div className='title'>
        <img src={image} alt={title} />
        <div>
          <h5 className='title'>{title}</h5>
          <h5 className='price-small'>{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className='price'>{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
      <button
        type='button'
        className='remove-btn'
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </div>
  )
}


export default CartItem