import React from 'react'
import './css/login.css'

const Login = () => {
  return (
    <div classNameName='mt-5'>

    <div className="sidenav font-weight-bold">
     <div className="login-main-text">
        <h2><br/> Login Page</h2>
        <p>Login or register from here to access.</p>
     </div>
  </div>
  <div className="main">
     <div className="col-md-6 col-sm-12">
        <div className="login-form text-light font-weight-bold">
           <form>
              <div className="form-group">
                 <label>User Name</label>
                 <input type="text" className="form-control" placeholder="User Name" />
              </div>
              <div className="form-group">
                 <label>Password</label>
                 <input type="password" className="form-control" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-black">Login</button>
              <button type="submit" className="btn btn-secondary" onClick="./RegistrationUser">Register</button>
              <button type="reset" className="btn btn-black">Reset</button><br/><br/>
              <div class="text text-center">
                <a href="" className='textAlign:center'>Forgotten Password?</a>
              </div>
           </form>
        </div>
     </div>
  </div>

</div>
  )
}

export default Login;