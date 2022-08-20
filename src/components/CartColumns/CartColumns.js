import React from 'react'

import "./CartColumns.css"

const CartColumns = () => {
  return (
    <div className='cartcolumns-section'>
      <div className='content'>
        <h5>ürün</h5>
        <h5>fiyat</h5>
        <h5>adet</h5>
        <h5>toplam</h5>
        <span></span>
      </div>
      <hr />
    </div>
  )
}

export default CartColumns