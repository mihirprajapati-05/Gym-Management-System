import React,{useState} from 'react'
import './css/forgotpasswd.css'
import img1 from '../components/images/forgotpasswd.jpg'
// import { Link } from 'react-router-dom';

function ForgotPassword() {

    
    const [formData,setFormData]=useState({ useremail:"" });
    const { useremail } =formData;

        const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    // Submit Event
    const onSubmit = async(e) => {
        e.preventDefault();

        const newUser = {
            useremail
        }
        // console.log(
        //     useremail
        // );



        //You can write API code Here.....


    }

  return (
    <div className='form-v6'>
        <div className="page-content">
            <div className="form-v6-content">   
                <div className="form-left">
                    <img src={img1} className='' style={{height:'100%',width:'500px',objectFit:"cover"}} alt="form"/>
                </div>
                <form className="form-detail" onSubmit={e => onSubmit(e)} action="#" method="post">
                    <h2 className=''>FORGOT PASSWORD</h2>
                    <div className="form-row">
                        <input type="email" name="useremail" value={useremail}  onChange={e => onChange(e)} id="your-email" className="input-text" placeholder="Enter Your E-mail..." required/>
                        {/* <label className="form-label ml-5" style={{color:'red'}}>{formErrors.useremail}</label> */}
                    </div>
                    <div className="form-row-last">
                        <input type="submit" name="register" className="register" value="SEND OTP"/>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword
