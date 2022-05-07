import React,{useState,useEffect} from 'react'
import './css/login.css'
import { Link } from 'react-router-dom'
import img1 from '../components/images/login.jpg'
 
function Login() {

    const [formValues,setFormValues]=useState({useremail:"",userpassword:""});
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setisSubmit]=useState(false);

    const {useremail,userpassword}=formValues;

    // const [hselects,sethselects]=useState();
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormValues({...formValues,[name]:value});
    };

    // Here Submit Click Event
    const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setisSubmit(true);

        const newuser={
            useremail,
            userpassword
        }
        // console.log(useremail,userpassword);



// You Can write API code Hare......




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
            errors.userpassword="Minimum 5 characters password must be required..!";
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
           {/* Form tag */}
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