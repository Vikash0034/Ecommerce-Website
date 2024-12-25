import React from 'react'
import './Newbanner.css'

const NewBanner = () => {
  return (
    <div>
      <section id="sm-banner" className='section-p1'>
        <div className="banner-box">
            <h4>Crazy deals</h4>
            <h2>Buy 1 Get 1 Free</h2>
            <span>The best classic dress in on sale at cara</span>
            <button className='white'>Learn More</button>
        </div>

        <div className="banner-box banner-box2">
            <h4>Spring/Summer</h4>
            <h2>Upcoming Season</h2>
            <span>The best classic dress in on sale at cara</span>
            <button className='white'>Collection</button>
        </div>
      </section>
    </div>
  )
}

export default NewBanner
