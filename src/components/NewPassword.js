import React from 'react'
import img1 from '../components/images/changepwd.jpeg'

function NewPassword() {
  return (
    <div>
          <div className='form-v6'>
    <div class="page-content">
        <div class="form-v6-content">
            <div class="form-left">
                <img src={img1} className='ml-3' style={{height:'100%',width:'550px',objectFit:"cover"}} alt="form"/>
            </div>
            <form class="form-detail" action="#" method="post">
                <h2 className=''>CREATE PASSWORD</h2>
                <div class="form-row">
                    <input type="password" name="password1" id="password" class="input-text" placeholder="Create New Password Here..." required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"/>
                </div>
                <div class="form-row">
                    <input type="password" name="password2" id="password" class="input-text" placeholder="Re-Enter New Password Again..." required/>
                </div>
                <div class="form-row">
                    <label className='' name="errordisplay" />
                </div>
                <div class="form-row-last">
                    <input type="submit" name="register" class="register" value="Change"/>
                </div>
            </form>
        </div>
    </div>
 
  </div>
    </div>
  )
}

export default NewPassword
