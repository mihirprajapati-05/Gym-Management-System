import React from 'react'
import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <div className='bg-black'>
        <footer id="footer" className="footer-1 mt-auto text-white ">
          <div className="main-footer widgets-dark typo-dark ">
          <div className="container mt-4 pt-4">
          <div className="row">
            
          <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="widget subscribe no-box">
          <h5 className="widget-title text-uppercase">M-Square Fitness Hub<span></span></h5>
          <p>About the company, little discription will goes here.. </p>
          </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3" style={{textAlign:'left'}}>
            <div className="widget no-box text-uppercase">
              <h5 className="widget-title text-uppercase ">Quick Links<span></span></h5>
              <ul className="thumbnail-widget">
                <li>
                  <div className="thumb-content"><Link to="/Home">Home</Link></div> 
                 </li>
                <li>
                  <div className="thumb-content"><Link to="/Aboutus">About Us </Link></div> 
                </li>
                <li>
                  <div className="thumb-content"><Link to="/Contactus">Contact Us</Link></div> 
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3" style={{textAlign:'left'}}>
            <div className="widget no-box text-uppercase">
              <h5 className="widget-title text-uppercase">Quick Links<span></span></h5>
                <ul className="thumbnail-widget">
                <li>
                <div className="thumb-content"><Link to="/Login">Login</Link></div> 
                </li>
                <li>
                <div className="thumb-content"><Link to="/RegistrationUser">Register </Link></div> 
                </li>
                </ul>          
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3" style={{textAlign:'left'}}>

          <div className="widget no-box text-uppercase">
          <h5 className="widget-title text-uppercase">Contact Us<span></span></h5>

          <p><a href="mailto:info@M-Square.com" title="glorythemes">info@M-Square.com</a></p>
          </div>
          </div>
    
          </div>
          </div>
          </div>
            
          <div className="footer-copyright">
          <div className="container">
          <div className="row">
          <div className="col-md-12 text-center" style={{fontSize:'15px'}}>
          <p>Copyright M-Square Gym © 2022. All rights reserved.</p>
          </div>
          </div>
          </div>
          </div>
          </footer>
    </div>
  )
}

export default footer;