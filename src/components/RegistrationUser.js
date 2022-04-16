import React,{useState,useEffect} from 'react';
import './css/registrationuser.css';
import img1 from '../components/images/gym_dark5.jfif';
import { Link } from 'react-router-dom';

function RegistrationUser() {

        // disable future dates....
        const disableDates=()=>{

            const today=new Date();
            const dd=String(today.getDate()+1).padStart(2,"0");
            const mm=String(today.getMonth()+1).padStart(2,"0");
            const yyyy=today.getFullYear();
            return  yyyy+"-"+mm+"-"+dd;
        }

    const initialvalue={membername:"",memberemail:"",memberdob:"",membercontactno:"",memberaddress:"",membergender:"",memberpassword:""};
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
        if(!values.membername){
            errors.membername="Name is Required...!";
        }
        // Email
        if(!values.memberemail){
            errors.memberemail="Email Address is Required...!";
        }else if(!emailregex.test(values.memberemail)){
            errors.memberemail="This is not a valid Email formate...!";
        }
        // Contact no
        if(!values.membercontactno){
            errors.membercontactno="Contact number is required..!";
        }else if(!contactregx.test(values.membercontactno)){
            errors.membercontactno="10-Digit Number Must Be Required..!";
        }
        // Address
        if(!values.memberaddress){
            errors.memberaddress="Address is Required..!";
        }
        // DOB
        if(!values.memberdob){
            errors.memberdob="Select Your Birth Date..!";
        }
        // Gender
        // if(!values.membergender){
        //     errors.membergender="Select Gender..!";
        // }   
        // Password
        if(!values.memberpassword){
            errors.memberpassword="Password is required...!";
        }else if(values.memberpassword.length < 8){
            errors.memberpassword="Minimum 8 characters password must be required..!";
        }else if(values.memberpassword.length > 15){
            errors.memberpassword="Password cannot exceed more than 15 characters..!";
        }

        return errors;
    };

    return (
    <div className='mt-5'>
        <section className="h-100 bg-black">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
                <div className="card card-registration my-4">
                <div className="row g-0">
                    <div className="col-xl-6 d-none d-xl-block">
                    <img src={img1} alt="register" className="img-fluid"
                        style={{borderTopLeftRadius: '.25rem', height:'100%',width:'550px',objectFit:"cover"}}
                    />
                    </div>
                    <div className="col-xl-6">
                        {/* Form Tag */}
                    <form onSubmit={handleSubmit}>
                    <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase text-center">REGISTER HERE..</h3>
                        {/* name  */}
                        <div className="form-outline mb-4">
                            <input type="text" name="membername" value={formValues.membername} onChange={handleChange}  placeholder="Enter Name.." id="form3Example97" className="form-control form-control-lg" />
                            {/* <label className="form-label">Name</label> */}
                            <label className="form-label ml-5" style={{color:'red'}}>{formErrors.membername}</label>
                        </div>
                        {/* Email  */}                        
                        <div className="form-outline mb-4">
                            <input type="text" name="memberemail" value={formValues.memberemail} onChange={handleChange} placeholder="Enter Email-ID.." id="form3Example97" className="form-control form-control-lg" />
                            {/* <label className="form-label">Email ID</label> */}
                            <label className="form-label ml-5" style={{color:'red'}}>{formErrors.memberemail}</label>                            
                        </div>
                        {/* DOB and Contactno  */}
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input type="date" name="memberdob" max={disableDates()} value={formValues.memberdob} onChange={handleChange} id="form3Example1m1" className="form-control form-control-lg" />
                                    <label className="form-label" for="form3Example1m1">DOB</label><label className="form-label" style={{color:'red'}}>{formErrors.memberdob}</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input type="tel" name="membercontactno" value={formValues.membercontactno} onChange={handleChange} placeholder="Enter Contact Number.." id="form3Example1n1" className="form-control form-control-lg" />
                                    <label className="form-label" for="form3Example1n1" >Contact Number</label><label className="form-label" style={{color:'red'}}>{formErrors.membercontactno}</label>
                                </div>
                            </div>
                        </div>
                        {/* Address */}
                        <div className="form-outline mb-4">
                            <input type="text" name="memberaddress" value={formValues.memberaddress} onChange={handleChange} placeholder="Enter Address.." className="form-control form-control-lg" />
                            {/* <label className="form-label" for="form3Example8">Address</label><label className="form-label ml-5" style={{color:'red'}}>{formErrors.memberaddress}</label> */}
                        </div>
                        {/* Gender  */}
                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                            <h6 className="mb-0 me-4">Gender: </h6>
                            <div className="form-check form-check-inline mb-0 me-4">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="membergender"
                                id="femaleGender"
                                // value={formValues.membergender}
                                // onChange={handleChange}
                                />
                                <label className="form-check-label" for="femaleGender">Female</label>
                            </div>
                            <div className="form-check form-check-inline mb-0 me-4">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="membergender"
                                id="maleGender"
                                // value={formValues.membergender}
                                // onChange={handleChange}
                                />
                                <label className="form-check-label" for="maleGender">Male</label>
                            </div>
                            {/* <label className="form-label ml-5" style={{color:'red'}}>{formErrors.membergender}</label> */}
                        </div>

                        {/* Height and Weight  */}
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                {/* <h3>{hselects}</h3> */}
                                {/* 1 foot = 12 inches */}
                                {/* <select className="select" value={hselects} onChange={e=>sethselects(e.target.value)}>
                                    <option>--Select Height--</option>
                                    <option value="1">1 Inches</option>
                                    <option value="2">2 Inches</option>
                                    <option value="3">3 Inches</option>
                                </select> */}
                                <div className="form-outline">
                                    <input type="number" name="memberheioght"  placeholder="ex.5 Feet" id="form3Example1n1" className="form-control form-control-lg" />
                                    <label className="form-label" for="form3Example1n1" >Height</label>
                                </div>
                                
                            </div>
                            <div className="col-md-6 mb-4">
                                {/* <select className="select">
                                    <option>--Select Weight--</option>
                                    <option value="2">Option 1</option>
                                    <option value="3">Option 2</option>
                                    <option value="4">Option 3</option>
                                </select> */}
                                <div className="form-outline">
                                    <input type="number" name="memberweight"  placeholder="ex.80 Kg" id="form3Example1n1" className="form-control form-control-lg" />
                                    <label className="form-label" for="form3Example1n1" >Weight</label>
                                </div>
                            </div>
                        </div>
                        {/* Password  */}
                        <div className="form-outline mb-4">
                            <input type="password" name="memberpassword" value={formValues.memberpassword} onChange={handleChange} placeholder="Enter Password.." className="form-control form-control-lg" />
                            {/* <label className="form-label" for="form3Example99">Password</label><label className="form-label ml-5" style={{color:'red'}}>{formErrors.memberpassword}</label> */}
                        </div>

                        {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="ui message success" style={{fontSize:'20px',color:'blue'}}>Register Successfully..</div> 
                        ) : (
                            <div className="ui message fail" style={{textAlign:'center',fontFamily:'-moz-initial',fontSize:'20px',color:'blue'}}>Fill out Form</div> 
                        )}

                        {/* Buttons  */}
                        <div className="d-flex justify-content-end pt-3">
                            <button type="submit" className="btn btn-warning btn-lg ms-2">Register</button>
                        </div>
                        <div className="d-flex justify-content-end">
                            <Link className="" to="/Login">Already Have An Account? Login Here...</Link>
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
  )
}

export default RegistrationUser;