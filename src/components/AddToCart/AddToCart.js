import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cart_context'
import AmountButtons from '../AmontButton/AmontButton'

import "./AddToCart.css"

const AddToCart = ({product}) => {
    const {addToCart} = useCartContext()
    const {id} =product
    const [amount, setAmount] =useState(1);

    const increase = () => {
       setAmount((oldAmont) => {
         return oldAmont +1
        })
    }

    const decrease = () => {
        setAmount((oldAmont) => {
         return oldAmont - 1
         })
     }

     return (
        <div className='addtocart-section'>
          <div className='btn-container'>
            <AmountButtons
              amount={amount}
              increase={increase}
              decrease={decrease}
            />
            <Link
              to='/cart'
              className='btn'
              onClick={() => addToCart(id, amount, product)}
            >
              sepete ekle
            </Link>
          </div>
        </div>
      )
    }
    
    
export default AddToCart