import React,{useState,useEffect} from 'react'
import './css/login.css'
import { Link, useNavigate } from 'react-router-dom'
import img1 from '../components/images/login.jpg'
import axios from 'axios'
function Login() {

    const initialvalue={useremail:"",userpassword:""};
    const [formValues,setFormValues]=useState(initialvalue);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setisSubmit]=useState(false);
    const  result= axios.post('http://localhost:5000/auth/member_login',{ initialvalue });
    const tresult = axios.post('http://localhost:5000/auth/register',{ initialvalue});

    // const [hselects,sethselects]=useState();
    
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormValues({...formValues,[name]:value});
    };
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setisSubmit(true);
        
        if(initialvalue.useremail === "admin@gmail.com" && initialvalue.userpassword ==="admin123")
        {
            navigate('/admindashboard')
        }
        else if(result) 
        {
         // result= axios.post('http://localhost:5000/auth/member_login',{ initialvalue });

        navigate('/memberdashboard')
        }
        else
        {
           
            console.log(tresult)
        navigate('/trainerdashboard')
        }

    };

    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors]); 

    const validate=(values) =>{
        const errors={}
        const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        // Email
        if(!values.useremail){
            errors.useremail="Email Address is Required...!";
        }else if(!emailregex.test(values.useremail)){
            errors.useremail="This is not a valid Email formate...!";
        }
        // Password
        if(!values.userpassword){
            errors.userpassword="Password is required...!";
        }else if(values.userpassword.length < 5){
            errors.userpassword="Minimum 8 characters password must be required..!";
        }else if(values.userpassword.length > 15){
            errors.userpassword="Password cannot exceed more than 15 characters..!";
        }

        return errors;
    };        

  return (
   <div className='form-v6'>
   <div class="page-content bg-black">
       <div class="form-v6-content">
           <div class="form-left">
               <img src={img1} className='' style={{height:'100%',width:'550px',objectFit:"cover"}} alt="form"/>
           </div>
           <form class="form-detail" onSubmit={handleSubmit} action="#" method="post">
               <h2>LOGIN</h2>
               <div class="form-row">
                   <input type="text" name="useremail" value={formValues.useremail} onChange={handleChange} id="your-email" class="input-text" placeholder="Enter Username Here..." />
                   <label className="form-label ml-5" style={{color:'red'}}>{formErrors.useremail}</label>                
               </div>
               <div class="form-row">
                   <input type="password" name="userpassword" value={formValues.userpassword} onChange={handleChange} id="password" class="input-text" placeholder="Enter Password Here..." />
                   <label className="form-label ml-5" style={{color:'red'}}>{formErrors.userpassword}</label>
               </div>

               {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="ui message success" style={{fontSize:'20px',color:'blue'}}>Login Successfully..</div> 
                        ) : (
                            <div className="ui message fail" style={{textAlign:'center',fontFamily:'-moz-initial',fontSize:'20px',color:'blue'}}>Fill out Form</div> 
                        )}   

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