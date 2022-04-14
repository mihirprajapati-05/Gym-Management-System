import React from 'react'
import './css/registrationtrainer.css'
import img1 from '../components/images/gym_dark5.jfif'
import { Link } from 'react-router-dom'

function RegistrationUser() {

    // const disableDates=()=>
    // {
    //     var today,dd,mm,yyyy;
    //     today=new Date();
    //     dd=today.getDate()+1;
    //     mm=today.getMonth()+1;
    //     yyyy=today.getFullYear();
    //     return yyyy+"-"+mm+"-"+dd;
    // }

  return (
    <div className='mt-5'>
        <section className="h-100 bg-black">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
                <div className="card card-registration my-4">
                <div className="row g-0">
                    <div className="col-xl-6 d-none d-xl-block">
                    <img src={img1} alt="register" className="img-fluid" 
                        style={{borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' ,width: "900px",height:"100%",objectFit:"cover"}}
                    />
                    </div>
                    <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase text-center">REGISTRATION PAGE</h3>
                        {/* name  */}
                        <div className="form-outline mb-4">
                            <input type="text" name="trainername"  placeholder="Enter Your Name.." id="form3Example97" className="form-control form-control-lg" />
                            <label className="form-label">Name</label>
                        </div>
                        {/* Email  */}                        
                        <div className="form-outline mb-4">
                            <input type="text" name="traineremail"  placeholder="Enter Email-ID.." id="form3Example97" className="form-control form-control-lg" />
                            <label className="form-label">Email ID</label>
                        </div>
                        {/* DOB and Contactno  */}
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input type="date" name="trainerdob" id="form3Example1m1" className="form-control form-control-lg" />
                                    <label className="form-label" for="form3Example1m1">DOB</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input type="tel" name="trainercontactno"  placeholder="Enter Contact Number.." id="form3Example1n1" className="form-control form-control-lg" />
                                    <label className="form-label" for="form3Example1n1" >Contact Number</label>
                                </div>
                            </div>
                        </div>
                        {/* Address */}
                        <div className="form-outline mb-4">
                            <input type="text" name="traineraddress"  placeholder="Enter Your Address.." className="form-control form-control-lg" />
                            <label className="form-label" for="form3Example8">Address</label>
                        </div>
                        {/* Gender  */}
                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                            <h6 className="mb-0 me-4">Gender: </h6>
                            <div className="form-check form-check-inline mb-0 me-4">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="femaleGender"
                                id="femaleGender"
                                value="option1"
                                />
                                <label className="form-check-label" for="femaleGender">Female</label>
                            </div>
                            <div className="form-check form-check-inline mb-0 me-4">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="maleGender"
                                id="maleGender"
                                value="option2"
                                />
                                <label className="form-check-label" for="maleGender">Male</label>
                            </div>
                        </div>

                        {/* Height and Weight  */}
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <select className="select">
                                    <option value="1">Select Height</option>
                                    <option value="2">Option 1</option>
                                    <option value="3">Option 2</option>
                                    <option value="4">Option 3</option>
                                </select>
                            </div>
                            <div className="col-md-6 mb-4">
                                <select className="select">
                                    <option value="1">Select Weight</option>
                                    <option value="2">Option 1</option>
                                    <option value="3">Option 2</option>
                                    <option value="4">Option 3</option>
                                </select>
                            </div>
                        </div>


                        {/* Register Date  */}
                        <div className="form-outline mb-4">
                            <input type="date" name="trainerregisterdob" id="registerdate"  className="form-control form-control-lg" />
                            <label className="form-label" for="form3Example1m1">Register Date</label>
                        </div>
                        {/* min={this.disableDates()} */}

                        {/* Password  */}
                        <div className="form-outline mb-4">
                            <input type="password" name="memberpassword"  placeholder="Enter Password.." className="form-control form-control-lg" />
                            <label className="form-label" for="form3Example99">Password</label>
                        </div>

                        {/* Buttons  */}
                        <div className="d-flex justify-content-end pt-3">
                            <button type="button" className="btn btn-light btn-lg">Reset all</button>
                            <button type="button" className="btn btn-warning btn-lg ms-2">Submit form</button>
                        </div>
                        <div className="d-flex justify-content-end">
                            <Link className="" to="/Login">Already Have An Account? Login Here...</Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default RegistrationUser;