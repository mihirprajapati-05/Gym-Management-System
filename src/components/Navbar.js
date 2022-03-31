import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logo from '../components/images/logo.png';

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-black">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home"><img src={logo} width={100} height={40} alt='HomePage'></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">{props.Home}</Link>
              </li>            
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Menu">{props.Feature}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Aboutus">{props.AboutUs}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Contactus">{props.ContactUs}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Login">{props.Login}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/RegistrationUser">{props.Registration}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/ChangePassword">Change Password</Link>
              </li>
            </ul>

          </div>
        </div>
    </nav>
    </div>
  )
}

Navbar.propTypes = {
  Home: PropTypes.string.isRequired,
  Feature:PropTypes.string.isRequired,
  AboutUs:PropTypes.string.isRequired,
  ContactUs:PropTypes.string.isRequired,
  Login:PropTypes.string.isRequired,
  Registration:PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    Home:'Home',
    Feature:'Feature',
    AboutUs:'About Us',
    ContactUs:'Contact Us',
    Login:'Login',
    Registration:'Registration'
}
