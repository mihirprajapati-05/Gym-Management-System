import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../components/images/logo.png';
import 'mdbreact';

function MemberDashboard() {
  return (
    <div className='' style={{paddingBottom:'0px'}}>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-black">
        <div className="container-fluid">
          <Link className="navbar-brand ml-5" to="/"><img src={logo} width={100} height={40} alt='HomePage'></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <h3 style={{marginLeft:'50px',color:'white',textAlign:'center',marginTop:'20px'}}>WELCOME TO GYM</h3>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>             */}
              

              <li className="nav-item">
                <Link className="nav-link active" to="/memberdashboard/mprofile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/memberdashboard/mupdate">Update</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/memberdashboard/membership">Membership</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">Payment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/memberdashboard/mschedule">Schedule</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">Logout</Link>
              </li>
            </ul>

          </div>
        </div>
    </nav>
    </div>
  )
}

export default MemberDashboard
