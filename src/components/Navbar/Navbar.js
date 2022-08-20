import React from 'react'
import logo from '../../assets/logo.jpeg'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../../utils/constants'
import CartButtons from '../CartButtons/CartButtons'
import { useProductsContext } from '../../context/products_context'

import "./Navbar.css"

const Navbar = () => {
    const {isSidebarOpen, openSidebar}=useProductsContext();

  return (
    <div className='nav-center'>
        <div className='nav-header'>
            <Link to="/">
                <img src={logo} alt="comfy sloth"/>
            </Link>
            <button type='button' className='nav-toggle' onClick={openSidebar}>
                <FaBars></FaBars>
            </button>
        </div>
        <ul className='nav-links'>
            {links.map((link) =>{
                const {id, text, url} =link
                return (
                    <li key={id}>
                        <Link to={url}>{text}</Link>
                    </li>
                )
            })}
        </ul>
        <CartButtons></CartButtons>
        
    </div>
  );
}



export default Navbar;