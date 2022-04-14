import React from 'react'
import './css/login.css'
import { Link } from 'react-router-dom'
import img1 from '../components/images/login.jpg'

function Login() {
  return (
   <div className='form-v6'>
   <div class="page-content bg-black">
       <div class="form-v6-content">
           <div class="form-left">
               <img src={img1} className='' style={{height:'100%',width:'550px',objectFit:"cover"}} alt="form"/>
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
                   <label name="message" class="register" value=""/>
               </div>
               <div class="form-row-last">
                   <input type="submit" name="register" class="register" value="Login"/>
               </div>
               <div class="form-row-last" style={{display:'flex',justifyContent:'space-between'}}>
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