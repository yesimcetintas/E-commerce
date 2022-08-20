import React from 'react'
import { Link } from 'react-router-dom'

import "./ErrorPage.css"

const ErrorPage = () => {
  return (
  <div className='main page-100'>
    <section>
      <h1>404</h1>
      <h3>Sayfa bulunamadı.</h3>
      <Link to="/" className='btn'>
        ürünler sayfasına geri dön.
      </Link>
    </section>
  </div>
  )
}



export default ErrorPage