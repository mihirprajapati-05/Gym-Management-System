import React,{useState} from 'react'
import './css/updatemember.css';
import img1 from '../components/images/regtrainer4.jpg';
import MemberDashboard from './MemberDashboard';

function UpdateMember() {

    const initialvalue={membername:"",memberdob:"",membercontactno:"",memberaddress:"",membergender:"",memberheight:"",memberweight:""};

    const [membergender,setmembergender]=useState();
    const [formData,setFormData]=useState(
        {membername:"",memberdob:"",membercontactno:"",memberaddress:"",memberheight:"",memberweight:""});
        const { membername,memberdob,membercontactno,memberaddress,memberheight,memberweight } =formData;
 
        const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    // Submit Event
    const onSubmit = async(e) => {
        e.preventDefault();

        const newUser = {
            membername,
            memberdob,
            membercontactno,
            memberaddress,
            membergender,
            memberheight,
            memberweight
        }
        // console.log(
        //     membername,
        //     memberdob,
        //     membercontactno,
        //     memberaddress,
        //     membergender,
        //     memberheight,
        //     memberweight
        // );

        //You can write API code Here.....


    }

  return (
    <div>
        <MemberDashboard/>
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
                    <form onSubmit={e => onSubmit(e)} method="post">
                    <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase text-center">UPDATE HERE..</h3>
                        {/* name  */}
                        <div className="form-outline mb-4">
                            <input type="text" name="membername" value={membername}  onChange={e => onChange(e)}  placeholder="Enter Name.." id="form3Example97" className="form-control form-control-lg" required/>
                            {/* <label className="form-label">Name</label> */}
                            {/* <label className="form-label ml-5" style={{color:'red'}}>{formErrors.membername}</label> */}
                        </div>
                        {/* Email  */}                        
                        {/* <div className="form-outline mb-4">
                            <input type="text" name="memberemail" value={formValues.memberemail} onChange={handleChange} placeholder="Enter Email-ID.." id="form3Example97" className="form-control form-control-lg" />
                            <label className="form-label ml-5" style={{color:'red'}}>{formErrors.memberemail}</label>                            
                        </div> */}
                        {/* DOB and Contactno  */}
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input type="date" name="memberdob" value={memberdob}  onChange={e => onChange(e)} id="form3Example1m1" className="form-control form-control-lg" required/>
                                    <label className="form-label" for="form3Example1m1">DOB</label>
                                    {/* <label className="form-label" style={{color:'red'}}>{formErrors.memberdob}</label> */}
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input type="text" name="membercontactno" value={membercontactno} minLength={10} maxLength={10} onChange={e => onChange(e)}  placeholder="Enter Contact Number.." id="form3Example1n1" className="form-control form-control-lg" required />
                                    <label className="form-label" for="form3Example1n1" >Contact Number</label>
                                    {/* <label className="form-label" style={{color:'red'}}>{formErrors.membercontactno}</label> */}
                                </div>
                            </div>
                        </div>
                        {/* Address */}
                        <div className="form-outline mb-4">
                            <input type="text" name="memberaddress" value={memberaddress}  onChange={e => onChange(e)} placeholder="Enter Address.." className="form-control form-control-lg" required />
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
                                value="F"
                                onChange={e=>setmembergender(e.target.value)}
                                required
                                />
                                <label className="form-check-label" for="femaleGender">Female</label>
                            </div>
                            <div className="form-check form-check-inline mb-0 me-4">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="membergender"
                                id="maleGender"
                                value="M"
                                onChange={e=>setmembergender(e.target.value)}
                                required
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
                                    <input type="number" name="memberheight" value={memberheight}  onChange={e => onChange(e)} placeholder="ex.5 Feet" id="form3Example1n1" className="form-control form-control-lg" required />
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
                                    <input type="number" name="memberweight" value={memberweight}  onChange={e => onChange(e)} placeholder="ex.80 Kg" id="form3Example1n1" className="form-control form-control-lg" required/>
                                    <label className="form-label" for="form3Example1n1" >Weight</label>
                                </div>
                            </div>
                        </div>

                        {/* Buttons  */}
                        <div className="d-flex justify-content-end pt-3">
                            <button type="submit" className="btn btn-warning btn-lg ms-2">UPDATE</button>
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

export default UpdateMember
