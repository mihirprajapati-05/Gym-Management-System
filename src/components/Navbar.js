import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../components/images/logo.png';

const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home" smooth={true} duration={1000}><img src={logo} width={100} height={40} alt='HomePage'></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>            
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Aboutus">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Contactus">Contact Us</Link>
              </li>

            </ul>
            <li className="d-flex nav-item mb-2 mb-lg-0 text-white">
                <Link className="nav-link" aria-current="page" to="/Login">Login</Link>
              </li>
          </div>
        </div>
    </nav>
    </div>
  )
}

export default navbar;