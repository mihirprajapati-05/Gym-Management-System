import React from 'react'
import './css/login.css'
import { Link } from 'react-router-dom'
import img1 from '../components/images/gym_room.jfif'

function Login() {
  return (
   <div className='form-v6'>
   <div class="page-content">
       <div class="form-v6-content">
           <div class="form-left">
               <img src={img1} className='ml-3 mt-3' style={{height:'400px',width:'550px'}} alt="form"/>
           </div>
           <form class="form-detail" action="#" method="post">
               <h2>LOGIN</h2>
               <div class="form-row">
                   <input type="text" name="useremail" id="your-email" class="input-text" placeholder="Enter Username Here..." required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"/>
               </div>
               <div class="form-row">
                   <input type="password" name="password" id="password" class="input-text" placeholder="Enter Password Here..." required/>
               </div>
               <div class="form-row-last">
                   <input type="submit" name="register" class="register" value="Login"/>
               </div>
               <div class="form-row-last">
                    <Link className="imput-text" to="/ForgotPassword">Forgot Password</Link>
                    <Link className="imput-text" to="/RegistrationUser">Register First!</Link>
               </div>

           </form>
       </div>
   </div>

 </div>

   )
}

export default Login