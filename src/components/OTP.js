import React,{useState,useEffect} from 'react'
import './css/otp.css'
import img1 from '../components/images/otp.jpg'

function OTP() {

    const initialvalue={ otp:""};
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

        if(!values. otp){
            errors. otp="OTP is Required...!";
        }
        return errors;
    };


  return (
    <div>
         <div class="page-content bg-black">
            <div class="form-v6-content">
                <div class="form-left">
                    <img src={img1} className='' style={{height:'80%',width:'550px',objectFit:"cover"}} alt="form"/>
                </div>
                <form class="form-detail" onSubmit={handleSubmit} action="#" method="post">
                    <h2>Verify OTP</h2>
                    <div class="form-row">
                        <input type="number" name="otp" value={formValues. otp} onChange={handleChange} id="your-email" class="input-text" placeholder="Enter OTP Here..."/>
                        <label className="form-label ml-5" style={{color:'red'}}>{formErrors.otp}</label>
                    </div>
                    {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="ui message success">OTP Match..</div> 
                        ) : (
                            <div className="ui message fail" style={{textAlign:'center',fontFamily:'-moz-initial',fontSize:'20px',color:'blue'}}></div> 
                        )}
                    <div class="form-row-last">
                        <input type="submit" name="register" class="register" value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default OTP
