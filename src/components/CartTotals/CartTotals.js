import React from 'react'
import { useCartContext } from '../../context/cart_context'
import { formatPrice } from '../../utils/helpers'

import "./CartTotals.css"

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext()

  return (
    
      <div className='carttotals-section'>
        <article>
          <h5>
            toplam : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            kargo ücreti : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            genel toplam :{' '}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
      </div>
  )
}

export default CartTotals