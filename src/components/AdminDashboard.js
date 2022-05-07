import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../components/images/logo.png';

function AdminDashboard() {
  return (
    <div className='mb-5' style={{paddingBottom:'5px'}}>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-black">
        <div className="container-fluid">
          <Link className="navbar-brand ml-5" to="/"><img src={logo} width={100} height={40} alt='HomePage'></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admindashboard">Home</Link>
              </li>
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admindashboard/vmd">View Members</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admindashboard/regt">Register Trainer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admindashboard/vtd">View Trainers</Link>
              </li> */}
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Trainer
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/admindashboard/regt">Register Trainer</Link></li>
                  <li><Link className="dropdown-item" to="/admindashboard/vtd">View Trainer Details</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admindashboard/ved">View Equipments</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">Add Equipments</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">Update Equipments</Link>
              </li> */}
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Equipments
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/admindashboard/adeq">Add Equipments</Link></li>
                  {/* <li><Link className="dropdown-item" to="/admindashboard/ueq">Update Equipments</Link></li> */}
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/admindashboard/ved">View Equipment Detail</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">Logout</Link>
              </li>
            </ul>

          </div>
        </div>
    </nav>

    </div>
  )
}

export default AdminDashboard
