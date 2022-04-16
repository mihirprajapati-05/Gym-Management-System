import React from 'react'
import './css/otp.css'
import img1 from '../components/images/otp.jpg'

function OTP() {
  return (
    <div>
         <div class="page-content bg-black">
            <div class="form-v6-content">
                <div class="form-left">
                    <img src={img1} className='' style={{height:'80%',width:'550px',objectFit:"cover"}} alt="form"/>
                </div>
                <form class="form-detail" action="#" method="post">
                    <h2>Verify OTP</h2>
                    <div class="form-row">
                        <input type="text" name="otp" id="your-email" class="input-text" placeholder="Enter OTP Here..." required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"/>
                    </div>
                    <div class="form-row-last">
                        <label name="message" class="register" value=""/>
                    </div>
                    <div class="form-row-last">
                        <input type="submit" name="register" class="register" value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default OTP
