import React from 'react'
import { Link } from 'react-router-dom'

import "./PageHero.css"

const PageHero = ({ title, product }) => {
  return (
    <div className='pagehero-section'>
      <div className='section-center'>
        <h3>
          {product && <Link to='/'>Ürünler</Link>} {title}
        </h3>
      </div>
    </div>
  )
}

export default PageHero