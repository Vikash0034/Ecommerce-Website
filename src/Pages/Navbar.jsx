import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaOutdent } from "react-icons/fa6";
import './Navbar.css'





const Navbar = () => {
  return (
    <div>
      <section id="header">
        <a href="#"><img src={Logo} className='logo' alt="logo" /></a>
        <div>
            <ul id="navbar">
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart"><RiShoppingBag4Line /></Link></li>
            </ul>
        </div>
        <div className="mobile">
          <Link to="/cart"><i><RiShoppingBag4Line /></i></Link>
          <i className="bar"><FaOutdent /></i>

        </div>
      </section>
    </div>
  )
}

export default Navbar