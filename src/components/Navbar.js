import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../components/images/logo.png';

export default function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lgtop navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home"><img className='' src={logo}></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>            
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/footer">Footer</Link>
              
              </li>
            </ul>

          </div>
        </div>
    </nav>
    </div>
  )
}
