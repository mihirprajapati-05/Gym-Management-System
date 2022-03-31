import React from 'react'

const footer = () => {
  return (
    <div className='mt-5'>
        <footer id="footer" className="footer-1 mt-auto bg-dark text-white ">
          <div className="main-footer widgets-dark typo-dark ">
          <div className="container mt-4 pt-4">
          <div className="row">
            
          <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="widget subscribe no-box">
          <h5 className="widget-title text-uppercase">COMPANY NAME<span></span></h5>
          <p>About the company, little discription will goes here.. </p>
          </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="widget no-box">
          <h5 className="widget-title text-uppercase">Quick Links<span></span></h5>
          <ul className="thumbnail-widget">
          <li>
          <div className="thumb-content"><a href="#.">Get Started</a></div> 
          </li>
          <li>
          <div className="thumb-content"><a href="#.">Top Leaders</a></div> 
          </li>
          <li>
          <div className="thumb-content"><a href="#.">About</a></div> 
          </li>
          </ul>
          </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="widget no-box">
          <h5 className="widget-title" text-uppercase>Get Started<span></span></h5>
          <p>Get access to your full Training and Marketing Suite.</p>
          </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3">

          <div className="widget no-box">
          <h5 className="widget-title text-uppercase">Contact Us<span></span></h5>

          <p><a href="mailto:info@domain.com" title="glorythemes">info@domain.com</a></p>
          </div>
          </div>
    
          </div>
          </div>
          </div>
            
          <div className="footer-copyright">
          <div className="container">
          <div className="row">
          <div className="col-md-12 text-center">
          <p>Copyright M-Square Gym © 2021. All rights reserved.</p>
          </div>
          </div>
          </div>
          </div>
          </footer>
    </div>
  )
}

export default footer;