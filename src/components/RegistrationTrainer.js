import React,{useState,useEffect} from 'react'
import './css/registrationtrainer.css'
import AdminDashboard from './AdminDashboard'
import img1 from '../components/images/body.jfif'

// import DatePicker from 'react-datetime';
// import moment from 'moment';
// import { Link } from 'react-router-dom'

function RegistrationTrainer() {

    // disable past dates....
    const disableDates=()=>{

        const today=new Date();
        const dd=String(today.getDate()+1).padStart(2,"0");
        const mm=String(today.getMonth()+1).padStart(2,"0");
        const yyyy=today.getFullYear();
        return  yyyy+"-"+mm+"-"+dd;
    }

    //Validations...
    const initialvalue={trainername:"",traineremail:"",trainercontactno:"",trainerheight:"",trainerweight:"",trainerexp:"",trainerbatch:"",trainerspeciality:"",traineraddress:"",trainergender:"",trainerpassword:""};
    const [formValues,setFormValues]=useState(initialvalue);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setisSubmit]=useState(false);
    const [hselects,sethselects]=useState();

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
        const contactregx= /^(\+\d{1,3}[- ]?)?\d{10}$/;

        // Name
        if(!values.trainername){
            errors.trainername="Name is Required...!";
        }
        // Email
        if(!values.traineremail){
            errors.traineremail="Email Address is Required...!";
        }else if(!emailregex.test(values.traineremail)){
            errors.traineremail="This is not a valid Email formate...!";
        }
        // Contact no
        if(!values.trainercontactno){
            errors.trainercontactno="Contact number is required..!";
        }else if(!contactregx.test(values.trainercontactno)){
            errors.trainercontactno="10-Digit Number Must Be Required..!";
        }
        // Address
        if(!values.traineraddress){
            errors.traineraddress="Address is Required..!";
        }
        // DOB
        if(!values.trainerdob){
            errors.trainerdob="Select Your Birth Date..!";
        }
        // Gender
        // if(!values.trainergender){
        //     errors.trainergender="Select Gender..!";
        // }   
        // height
        if(!values.trainerheight){
            errors.trainerheight="Height is Required..!";
        }       
        // weight
        if(!values.trainerweight){
            errors.trainerweight="Weight is Required..!";
        }          
        // exp
        if(!values.trainerexp){
            errors.trainerexp="Experience is Required..!";
        }
        //batch
        if(!values.trainerbatch){
            errors.trainerbatch="Batch is Required..!";
        }                                        
                //speciality
                if(!values.trainerspeciality){
                    errors.trainerspeciality="Speciality is Required..!";
                }                                        
        // Password
        if(!values.trainerpassword){
            errors.trainerpassword="Password is required...!";
        }else if(values.trainerpassword.length < 8){
            errors.trainerpassword="Minimum 8 characters password must be required..!";
        }else if(values.trainerpassword.length > 15){
            errors.trainerpassword="Password cannot exceed more than 15 characters..!";
        }

        return errors;
    };







  return (
      <>
        <AdminDashboard/>    
      
    <div className='mt-5'>
        <section className="h-100 bg-black">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
                <div className="card card-registration my-4">
                <div className="row g-0">
                    <div className="col-xl-6 d-none d-xl-block">
                    <img src={img1} alt="register" className="img-fluid" 
                        style={{borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' ,width: "800",height:"100%",objectFit:"cover"}}
                    />
                    </div>
                    <div className="col-xl-6">
                    <form onSubmit={handleSubmit}>
                    <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase text-center">TRAINER REGISTRATION</h3>
                        {/* name  */}
                        <div className="form-outline mb-4">
                            <input type="text" name="trainername" value={formValues.trainername} onChange={handleChange} placeholder="Enter Your Name.." id="form3Example97" className="form-control form-control-lg" />
                            {/* <label className="form-label">Name</label> */}
                            <label className="form-label" style={{color:'red'}}>{formErrors.trainername}</label>
                        </div>
                        {/* Email  */}                        
                        <div className="form-outline mb-4">
                            <input type="text" name="traineremail" value={formValues.traineremail} onChange={handleChange} placeholder="Enter Email-ID.." id="form3Example97" className="form-control form-control-lg"  />
                            {/* <label className="form-label">Email ID</label> */}
                            <label className="form-label" style={{color:'red'}}>{formErrors.traineremail}</label>
                        </div>
                        {/* DOB and Contactno  */}
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input type="date" name="trainerdob" value={formValues.trainerdob} onChange={handleChange} max={disableDates()} id="form3Example1m1" className="form-control form-control-lg"  />
                                    <label className="form-label" for="form3Example1m1">DOB</label>
                                    {/* <label className="form-label" style={{color:'red'}}>{formErrors.trainerdob}</label> */}
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input type="tel" name="trainercontactno" value={formValues.trainercontactno} onChange={handleChange} placeholder="Enter Contact Number.." id="form3Example1n1" className="form-control form-control-lg"  />
                                    <label className="form-label" for="form3Example1n1" >Contact Number</label>
                                    <label className="form-label " style={{color:'red',textAlign:'left'}}>{formErrors.trainercontactno}</label>
                                </div>
                            </div>
                        </div>
                        {/* Address */}
                        <div className="form-outline mb-4">
                            <input type="text" name="traineraddress" value={formValues.memberaddress} onChange={handleChange} placeholder="Enter Your Address.." className="form-control form-control-lg"  />
                            {/* <label className="form-label" for="form3Example8">Address</label> */}
                            <label className="form-label" style={{color:'red'}}>{formErrors.traineraddress}</label>
                        </div>
                        {/* Gender  */}
                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                            <h6 className="mb-0 me-4">Gender: </h6>
                            <div className="form-check form-check-inline mb-0 me-4">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="trainergender"
                                // value={formValues.trainergender}
                                //  onChange={handleChange}
                                id="femaleGender"
                                />
                                <label className="form-check-label" for="femaleGender">Female</label>
                            </div>
                            <div className="form-check form-check-inline mb-0 me-4">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="trainergender"
                                // value={formValues.trainergender} onChange={handleChange}
                                id="maleGender"
                                />
                                <label className="form-check-label" for="maleGender">Male</label>
                            </div>
                            {/* <label className="form-label" style={{color:'red'}}>{formErrors.trainergender}</label> */}
                        </div>

                        {/* Height and Weight  */}
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                {/* <select className="select">
                                    <option value="1">Select Height</option>
                                    <option value="2">Option 1</option>
                                    <option value="3">Option 2</option>
                                    <option value="4">Option 3</option>
                                </select> */}
                                <div className="form-outline">
                                    <input type="number" name="trainerheight" max={10} value={formValues.trainerheight} onChange={handleChange} placeholder="Height :ex.5 Feet" id="form3Example1n1" className="form-control form-control-lg"  />
                                    {/* <label className="form-label" for="form3Example1n1" >Height</label> */}
                                    <label className="form-label ml-5" style={{color:'red'}}>{formErrors.trainerheight}</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                {/* <select className="select">
                                    <option value="1">Select Weight</option>
                                    <option value="2">Option 1</option>
                                    <option value="3">Option 2</option>
                                    <option value="4">Option 3</option>
                                </select> */}
                                <div className="form-outline">
                                    <input type="number" name="trainerweight" value={formValues.trainerweight} onChange={handleChange} placeholder="Weight :ex.70 kg" id="form3Example1n1" className="form-control form-control-lg"  />
                                        {/* <label className="form-label" for="form3Example1n1" >Weight</label> */}
                                    <label className="form-label" style={{color:'red'}}>{formErrors.trainerweight}</label>
                                </div>
                            </div>
                        </div>

                        {/* Register Date  */}
                        <div className="form-outline mb-4">
                            <input type="date" name="trainerregisterdob" value={formValues.trainerrdate} onChange={handleChange} min={disableDates()} id="registerdate"  className="form-control form-control-lg"  />    {/*min={this.disableDates()} */}
                            <label className="form-label" for="form3Example1m1">Register Date</label>
                            <label className="form-label" style={{color:'red'}}>{formErrors.trainerrdate}</label>
                        </div>

                        {/* experience and batch  */}
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input type="number" name="trainerexp" value={formValues.trainerexp} onChange={handleChange} placeholder='ex. 5' id="form3Example1m1" className="form-control form-control-lg"  />
                                    <label className="form-label" for="form3Example1m1">Experience</label>
                                    <label className="form-label" style={{color:'red'}}>{formErrors.trainerexp}</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <select className="select">
                                    <option>---Select Batch---</option>
                                    <option value="2">Morning</option>
                                    <option value="3">Afternoon</option>
                                    <option value="4">Evening</option>
                                </select>
                            </div>
                        </div>
                        {/* Speciality  */}
                        <div className="form-outline mb-4">
                            <input type="text" name="trainerspeciality" value={formValues.trainerspeciality} onChange={handleChange} placeholder="Enter Specialities here..." className="form-control form-control-lg"  />
                            {/* <label className="form-label" for="form3Example99">Password</label> */}
                            <label className="form-label" style={{color:'red'}}>{formErrors.trainerspeciality}</label>
                        </div>
                        {/* Password  */}
                        <div className="form-outline mb-4">
                            <input type="password" name="trainerpassword" value={formValues.trainerpassword} onChange={handleChange} placeholder="Enter Password.." className="form-control form-control-lg"  />
                            {/* <label className="form-label" for="form3Example99">Password</label> */}
                            <label className="form-label" style={{color:'red'}}>{formErrors.trainerpassword}</label>
                        </div>

                        {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="ui message success">Registration Successfull...</div> 
                        ) : (
                            <div className="ui message fail" style={{textAlign:'center',fontFamily:'-moz-initial',fontSize:'20px',color:'blue'}}>Fill out Form</div> 
                        )}

                        {/* Buttons  */}
                        <div className="d-flex justify-content-end pt-3">
                            <button type="submit" className="btn btn-warning btn-lg ms-2">Register</button>
                        </div>
                    </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
    </>
  )
}

export default RegistrationTrainer;