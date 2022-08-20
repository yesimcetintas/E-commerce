import React from 'react'

import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <h5>
            &copy; {new Date().getFullYear()}
        </h5>
    </div>
  )
  
}



export default Footer;