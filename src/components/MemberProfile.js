import React from 'react'
import './css/memberprofile.css'
import MemberDashboard from './MemberDashboard'
import { Link } from 'react-router-dom'

function MemberProfile() {
  return (
      <>
      <MemberDashboard/>
    <div className='mt-5' style={{paddingTop:'20px'}}>
        <div className="container mt-5 mb-5">   
            <div className="row no-gutters" style={{border:'10px solid grey'}}>
                <div className="col-md-4 col-lg-4">
                    <img src="https://i.imgur.com/aCwpF7V.jpg" style={{width:'100%',objectFit:"cover"}}/>
                </div>
                <div className="col-md-8 col-lg-8">
                    <div className="d-flex flex-column">
                        <div className="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
                            {/* User Name */}
                            <h3 className="display-5">Vidhyut Jamwal</h3>
                        </div>
                        <div className="p-3 bg-black text-white">
                            <h6>PERSONAL DETAILS</h6>
                        </div>
                        <div className="w-32 d-flex flex-row text-white">
                            <div className="p-4 bg-primary text-center skill-block">
                                <h5>Email</h5>
                                <h6>Vidhyut123kjjkjk@gmail.com</h6>
                            </div>
                            <div className="p-3 bg-success text-center skill-block">
                                <h5>Contact No</h5>
                                <h6>9852147852</h6>
                            </div>
                        </div>
                        <div className="d-flex flex-row text-white">
                        <div className="p-3 bg-warning text-center skill-block">
                                <h4>Gender</h4>
                                <h6>Male</h6>
                            </div>
                            <div className="p-3 bg-danger text-center skill-block">
                                <h4>DOB</h4>
                                <h6>01/05/2000</h6>
                            </div>
                            <div className="p-4 bg-primary text-center skill-block">
                                <h4>Height</h4>
                                <h6>6"4'</h6>
                            </div>
                            <div className="p-3 bg-success text-center skill-block">
                                <h4>Weight</h4>
                                <h6>68 KG</h6>
                            </div>
                        </div>
                        <div className="w-32 d-flex flex-row text-white">
                            <div className="p-4 bg-primary text-center skill-block">
                                <h5>Address</h5>
                                <h6>B-404,Soubhagya Residency,Near Lal-Baugh,Mumbai</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MemberProfile