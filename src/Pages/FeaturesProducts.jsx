import React from 'react'
import './FeaturesProducts.css'
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import P1 from '../assets/products/f1.jpg'
import P2 from '../assets/products/f2.jpg'
import P3 from '../assets/products/f3.jpg'
import P4 from '../assets/products/f4.jpg'
import P5 from '../assets/products/f5.jpg'
import P6 from '../assets/products/f6.jpg'
import P7 from '../assets/products/f7.jpg'
import P8 from '../assets/products/f8.jpg'


const FeaturesProducts = () => {
  return (
    <div>
      <section id="product1" className='section-p1'>
        <h2>Featured products</h2>
        <p>Summer collection new Mordern Design</p>
        <div className='pro-container'>
            <div className="pro">
                <img src={P1} alt="" />
            <div className="des">
                <span>Adidas</span>
                <h5>cartoon Astronaut t-shirts</h5>
                <div className="star">
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                </div>
                <h4>$78</h4>
            </div>
            <a href="" className='cart'><i><MdOutlineShoppingCart /></i></a>
            </div>

            <div className="pro">
                <img src={P2} alt="" />
            <div className="des">
                <span>Adidas</span>
                <h5>cartoon Astronaut t-shirts</h5>
                <div className="star">
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                </div>
                <h4>$78</h4>
            </div>
            <a href="" className='cart'><i><MdOutlineShoppingCart /></i></a>
            </div>

            <div className="pro">
                <img src={P3} alt="" />
            <div className="des">
                <span>Adidas</span>
                <h5>cartoon Astronaut t-shirts</h5>
                <div className="star">
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                </div>
                <h4>$78</h4>
            </div>
            <a href="" className='cart'><i><MdOutlineShoppingCart /></i></a>
            </div>

            <div className="pro">
                <img src={P4} alt="" />
            <div className="des">
                <span>Adidas</span>
                <h5>cartoon Astronaut t-shirts</h5>
                <div className="star">
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                </div>
                <h4>$78</h4>
            </div>
            <a href="" className='cart'><i><MdOutlineShoppingCart /></i></a>
            </div>

            <div className="pro">
                <img src={P5} alt="" />
            <div className="des">
                <span>Adidas</span>
                <h5>cartoon Astronaut t-shirts</h5>
                <div className="star">
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                </div>
                <h4>$78</h4>
            </div>
            <a href="" className='cart'><i><MdOutlineShoppingCart /></i></a>
            </div>

            <div className="pro">
                <img src={P6} alt="" />
            <div className="des">
                <span>Adidas</span>
                <h5>cartoon Astronaut t-shirts</h5>
                <div className="star">
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                </div>
                <h4>$78</h4>
            </div>
            <a href="" className='cart'><i><MdOutlineShoppingCart /></i></a>
            </div>

            <div className="pro">
                <img src={P7} alt="" />
            <div className="des">
                <span>Adidas</span>
                <h5>cartoon Astronaut t-shirts</h5>
                <div className="star">
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                </div>
                <h4>$78</h4>
            </div>
            <a href="" className='cart'><i><MdOutlineShoppingCart /></i></a>
            </div>

            <div className="pro">
                <img src={P8} alt="" />
            <div className="des">
                <span>Adidas</span>
                <h5>cartoon Astronaut t-shirts</h5>
                <div className="star">
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                </div>
                <h4>$78</h4>
            </div>
            <a href="" className='cart'><i><MdOutlineShoppingCart /></i></a>
            </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesProducts
