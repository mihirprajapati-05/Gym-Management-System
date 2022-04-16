import React,{useState,useEffect} from 'react'
import './css/forgotpasswd.css'
import img1 from '../components/images/forgotpasswd.jpg'
// import { Link } from 'react-router-dom';

function ForgotPassword() {

    const initialvalue={ useremail:""};
    const [formValues,setFormValues]=useState(initialvalue);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setisSubmit]=useState(false);
    // const [hselects,sethselects]=useState();
    
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormValues({...formValues,[name]:value});
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setisSubmit(true);
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
        if(!values. useremail){
            errors. useremail="Email Address is Required...!";
        }else if(!emailregex.test(values. useremail)){
            errors. useremail="This is not a valid Email formate...!";
        }
        return errors;
    };

  return (
    <div className='form-v6'>
        <div className="page-content">
            <div className="form-v6-content">   
                <div className="form-left">
                    <img src={img1} className='' style={{height:'100%',width:'500px',objectFit:"cover"}} alt="form"/>
                </div>
                <form className="form-detail" onSubmit={handleSubmit} action="#" method="post">
                    <h2 className=''>FORGOT PASSWORD</h2>
                    <div className="form-row">
                    {/* required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6} */}
                        <input type="text" name="useremail" value={formValues. useremail} onChange={handleChange} id="your-email" className="input-text" placeholder="Enter Your E-mail..."/>
                        <label className="form-label ml-5" style={{color:'red'}}>{formErrors.useremail}</label>
                    </div>
                    {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="ui message success">Register Successfully..</div> 
                        ) : (
                            <div className="ui message fail" style={{textAlign:'center',fontFamily:'-moz-initial',fontSize:'20px',color:'blue'}}></div> 
                        )}
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
