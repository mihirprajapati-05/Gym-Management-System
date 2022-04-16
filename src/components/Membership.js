import React from 'react'
import img1 from '../components/images/chris-1.png'
import { Link } from 'react-router-dom'
import MemberDashboard from './MemberDashboard'

function Membership() {
  return (
    <>
    <MemberDashboard/>
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
                    <h3 className="mb-5 text-uppercase text-center">PROMO-MEMBERSHIP</h3>
                    
                     <div className="form-outline mb-4">
                        <h3><label className="form-label">RECEIVE 50% OFF YOUR FIRST MONTH + FREE GYM BAG + FREE WATER BOTTLE!</label></h3>
                        <p>Rs. 4000 /-</p>
                    </div>
                    
                    <div className="form-outline mb-4">
                        <label className="form-label">How It Works ?</label>
                        <p>1. CHOOSE a membership type and pay $49 sign-up fees.</p>
                        <p>2. You will receive PROMO items based on type of membership selected.</p>
                        <p>3. You will receive a CONFIRMATION email once your reservation is complete.</p>
                    </div>
                    <div className="row">
                        <div className="form-outline mb-4">
                            <h3><label className="form-label" for="form3Example1n1" >Choose Membership type :</label></h3>
                        </div>                     
                        <div className="form-outline mb-4">
                            <select className="select">
                                <option value="1">Select Membership</option>
                                <option value="2">1. Year (Rs.2100/biweekly)</option>
                                <option value="3">2. Flex (Rs.2450/biweekly)</option>
                            </select>
                        </div>
                    </div>



                    {/* Buttons  */}
                    <div className="d-flex justify-content-end pt-3">
                        {/* <button type="button" className="btn btn-light btn-lg">Reset all</button> */}
                        <button type="button" className="btn btn-warning btn-lg ms-2">PURCHASE</button>
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
</>
  )
}

export default Membership