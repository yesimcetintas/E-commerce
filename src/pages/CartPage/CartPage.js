import React from 'react'
import { useCartContext } from '../../context/cart_context'
import { Link } from 'react-router-dom'
import CartContent from "../../components/CartContent/CartContent";
import PageHero from "../../components/PageHero/PageHero"

import "./CartPage.css"

const CartPage = () => {
  const { cart } = useCartContext()
  if (cart.length < 1) {
    return (
      <div className='page-100'>
        <div className='empty'>
          <h2>sepet boş</h2>
          <Link to='/' className='btn'>
            alışverişe devam et
          </Link>
        </div>
      </div>
    )
  }
  return (
    <main>
      <PageHero title='sepet' />
      <div className='page'>
        <CartContent />
      </div>
    </main>
  )
}


export default CartPage