import React from 'react'
import './css/changepasswd.css'
import img1 from '../components/images/changepwd.jpeg'

const ChangePassword = () => {
  return (
    <div className='form-v6'>
    <div class="page-content">
        <div class="form-v6-content">
            <div class="form-left">
                <img src={img1} className='ml-3 mt-3' style={{height:'380px',width:'550px'}} alt="form"/>
            </div>
            <form class="form-detail" action="#" method="post">
                <h2 className=''>CHANGE PASSWORD</h2>
                <div class="form-row">
                    <input type="password" name="password1" id="password" class="input-text" placeholder="Enter Password Here..." required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"/>
                </div>
                <div class="form-row">
                    <input type="password" name="password2" id="password" class="input-text" placeholder="Enter Password Again..." required/>
                </div>
                <div class="form-row-last">
                    <input type="submit" name="register" class="register" value="Change"/>
                </div>
            </form>
        </div>
    </div>
 
  </div>
  )
}

export default ChangePassword;