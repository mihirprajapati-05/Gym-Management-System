import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logo from '../components/images/logo.png';

export default function Navbar(props) {
  return (
    <div className='mb-5'>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-black">
        <div className="container-fluid">
          <Link className="navbar-brand ml-5" to="/home"><img src={logo} width={100} height={40} alt='HomePage'></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">{props.home}</Link>
              </li>         
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/registrationuser">{props.signup}</Link>
              </li>   
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">{props.signin}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contactus">{props.contactus}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/aboutus">{props.aboutus}</Link>
              </li>


              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/RegistrationTrainer">{props.RegistrationTrainer}</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/VMemberDetails">VMembers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/VTrainerDetails">VTrainers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/MemberProfile">MemberProfile</Link>
              </li> */}

            </ul>

          </div>
        </div>
    </nav>
    </div>
  )
}

Navbar.propTypes = {
  Home: PropTypes.string.isRequired,
  AboutUs:PropTypes.string.isRequired,
  ContactUs:PropTypes.string.isRequired,
  Login:PropTypes.string.isRequired,
  RegistrationUser:PropTypes.string.isRequired,
  RegistrationTrainer:PropTypes.string.isRequired
}

// Navbar.defaultProps = { 
    
//     Home:'Home',
//     AboutUs:'About Us',
//     ContactUs:'Contact Us',
//     Login:'Login',
//     RegistrationUser:'Registration',
//     RegistrationTrainer:'RegistrationTrainer'

// }
