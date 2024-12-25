import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import Logo from '../assets/logo.png'
import AppStore from '../assets/pay/app.jpg'
import PlayStore from '../assets/pay/play.jpg'
import Pay from '../assets/pay/pay.png'

const Footer = () => {
  return (
    <div>
      <footer className="ft">
        <div className="col">
            <img className='logo' src={Logo} alt="logo" />
            <h4>Contact</h4>
            <p><strong>Address :</strong> Rahashu janobiPatti Puraina, Kushinagarh Uttar Pradesh 274401</p>
            <p><strong>Phone :</strong> 1234567890</p>
            <p><strong>Hours :</strong> 10:00am - 6pm Mon-Sat</p>
            <div className="follow">
                <h4>Follow Us</h4>
                <div className="icon">
                <i><FaFacebook /></i>
                <i><FaTwitter /></i>
                <i><FaInstagram /></i>
                <i><FaPinterestP /></i>
                <i><FaYoutube /></i>
                </div>
            </div>
        </div>

        <div className="col vol">
            <h4>About</h4>
           <Link to="#">About Us</Link>
           <Link to="#">Delivery Information</Link>
           <Link to="#">Privacy Policy</Link>
           <Link to="#">Terms And Conditions</Link>
           <Link to="#">Contact Us</Link>
        </div>

        <div className="col vol">
            <h4>My Accouts</h4>
           <Link to="#">Sign In</Link>
           <Link to="#">View Cart</Link>
           <Link to="#">My Wishlist</Link>
           <Link to="#">Track My Order</Link>
           <Link to="#">Help</Link>
        </div>

        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
                <img src={AppStore} alt="App Store" />
                <img src={PlayStore} alt="Google Play" />
            </div>
            <p>Secured Payment Gateways</p>
            <img src={Pay} alt="Pay" />
        </div>

        <div className="copyright">
            <p>2024, Ecommerce website - HTML, CSS, React Ecommerce Template</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
