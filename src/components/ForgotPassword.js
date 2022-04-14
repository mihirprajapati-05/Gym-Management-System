import React from 'react'
import './css/forgotpasswd.css'
import img1 from '../components/images/forgotpasswd.jpg'

function ForgotPassword() {
  return (
    <div className='form-v6'>
        <div className="page-content">
            <div className="form-v6-content">   
                <div className="form-left">
                    <img src={img1} className='ml-3 mt-3' style={{height:'320px',width:'500px'}} alt="form"/>
                </div>
                <form className="form-detail" action="#" method="post">
                    <h2 className=''>FORGOT PASSWORD</h2>
                    <div className="form-row">
                        <input type="email" name="useremail" id="your-email" className="input-text" placeholder="Enter Your E-mail..." required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"/>
                    </div>
                    <div className="form-row-last">
                        <input type="submit" name="register" className="register" value="SUBMIT"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword
