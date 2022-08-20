import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

import "./AmontButton.css"

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <div className='amount-button-wrapper'>
      <div className='amount-btns'>
        <button type='button' className='amount-btn' onClick={decrease}>
          <FaMinus />
        </button>
        <h2 className='amount'>{amount}</h2>
        <button type='button' className='amount-btn' onClick={increase}>
          <FaPlus />
        </button>
      </div>
    </div>

  )
}

export default AmountButtons