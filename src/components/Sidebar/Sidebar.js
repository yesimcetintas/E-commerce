import React from 'react'
import logo from '../../assets/logo.jpeg'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { links } from '../../utils/constants'

import CartButtons from '../CartButtons/CartButtons'
import { useProductsContext } from '../../context/products_context'

import "./Sidebar.css"

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar}= useProductsContext();

    return (
    
        <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`} >
            <div className='sidebar-header'>
                <img src={logo} className="logo" alt='comfy sloth'></img>
                <button className='close-btn' type='button' onClick={closeSidebar}>
                    <FaTimes></FaTimes>
                </button>
            </div>
            <ul className='links'>
                {links.map(({id, text,url}) => {
                    return (
                        <li key={id}>
                        <Link to={url} onClick={closeSidebar}>{text}</Link>
                    </li>
                    )
                })}
            </ul>
            <CartButtons showButtons="true"></CartButtons>
        </aside>
    )
}

export default Sidebar; 