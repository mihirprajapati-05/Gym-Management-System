import React from 'react'
import './css/registeruser.css'

const RegistrationUser = () => {
  return (
    <div classNameName='mt-5'>

    <div className="sideheader font-weight-bold">
     <div className="register-main-text">
        <h2> Register Here..</h2>
        <p>register or register from here to access.</p>
     </div>
  </div>
  <div className="main">
     <div className="col-md-6 col-sm-12">
        <div className="register-form text-light font-weight-bold">
           <form>
              <div className="form-group">
                 <label>Enter Name</label>
                 <input type="text" name="username" className="form-control" placeholder="enter name.." />
              </div>
              <div className="form-group">
                 <label>Enter Email</label>
                 <input type="email" name="useremail" className="form-control" placeholder="enter email.." />
              </div>
              <div className="form-group">
                 <label>Enter Contact Number</label>
                 <input type="tel" name="usercontactno" className="form-control" placeholder="enter contact number.." />
              </div>
              <div className="form-group">
                 <label>Enter Address</label>
                 <textarea type="text" id="message" name="useraddress" rows="2" class="form-control md-textarea" placeholder="enter address.."></textarea>
              </div>
              <div class="form-group">
                  <label>Select Gender</label>                  
                  <select type="gender" placeholder="Select Gender" class="form-control">
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
              </div>
              <div className="form-group">
                 <label>Select Date Of Birth</label>
                 <input type="date" name="userdate" placeholder="Select Date-Of-Birth" class="form-control"/>
              </div>
              
              <div className="form-group">
                 <label>Select Height</label>
                 <input type="number" name="userheight" className="form-control" placeholder="Select Height" />
                 <label>Select Weight</label>
                 <input type="number" name="userweight" min={0} max={200} className="form-control" placeholder="Select Weight" />
              </div>
              
              <div className="form-group">
                 <label>Password</label>
                 <input type="password" name="userpassword" className="form-control" placeholder="Password" />
              </div>
              <div class="text text-center">
              <button type="submit" className="btn btn-secondary">Register</button>
              <button type="reset" className="btn btn-black">Reset</button><br/><br/>
              </div>
              <div class="text text-center">
                <a href="/Login" className='textAlign:center'>Already Register , register Here...</a>
              </div>
           </form>
        </div>
     </div>
  </div>

</div>
  )
}

export default RegistrationUser;