import React,{useState} from 'react'
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

    const [trainerbatch,settrainerbatch]=useState();
    const [trainergender,settrainergender]=useState();

    const [formData, setFormData] = useState({
        trainername:"",
        traineremail:"",
        trainerdob:"",
        trainercontactno:"",
        traineraddress:"",
        trainerheight:"",
        trainerweight:"",
        trainerrdate:"",
        trainerexp:"",
        trainerspeciality:"",
        trainerpassword:"",
      });

      const {  
        trainername,
        traineremail,
        trainerdob,
        trainercontactno,
        traineraddress,
        trainerheight,
        trainerweight,
        trainerrdate,
        trainerexp,
        trainerspeciality,
        trainerpassword
    } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    // Submit Event
    const onSubmit = async(e) => {
        e.preventDefault();

          const newUser = {
            trainername,
            traineremail,
            trainerdob,
            trainercontactno,
            traineraddress,
            trainergender,
            trainerheight,
            trainerweight,
            trainerrdate,
            trainerexp,
            trainerbatch,
            trainerspeciality,
            trainerpassword
          }
        //   console.log(
        //     trainername,
        //     traineremail,
        //     trainerdob,
        //     trainercontactno,
        //     traineraddress,
        //     trainergender,
        //     trainerheight,
        //     trainerweight,
        //     trainerrdate,
        //     trainerexp,
        //     trainerbatch,
        //     trainerspeciality,
        //     trainerpassword,);


        // You can write API code Here....
      }

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
                        {/* From Tag */}
                    <form onSubmit={e => onSubmit(e)} method="post">
                    <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase text-center">TRAINER REGISTRATION</h3>
                        {/* name  */}
                        <div className="form-outline mb-4">
                            <input type="text" name="trainername" value={trainername} onChange={e => onChange(e)} placeholder="Enter Your Name.." id="form3Example97" className="form-control form-control-lg" required/>
                        </div>
                        {/* Email  */}                        
                        <div className="form-outline mb-4">
                            <input type="email" name="traineremail" value={traineremail} onChange={e => onChange(e)} placeholder="Enter Email-ID.." id="form3Example97" className="form-control form-control-lg" required />
                        </div>
                        {/* DOB and Contactno  */}
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input type="date" name="trainerdob" value={trainerdob} onChange={e => onChange(e)} max={disableDates()} id="form3Example1m1" className="form-control form-control-lg" required />
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input type="text" name="trainercontactno" value={trainercontactno} onChange={e => onChange(e)} minLength={10} maxLength={10} placeholder="Enter Contact Number.." id="form3Example1n1" className="form-control form-control-lg" required />
                                </div>
                            </div>
                        </div>
                        {/* Address */}
                        <div className="form-outline mb-4">
                            <input type="text" name="traineraddress" value={traineraddress} onChange={e => onChange(e)} placeholder="Enter Your Address.." className="form-control form-control-lg"  required/>
                        </div>
                        {/* Gender  */}
                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                            <h6 className="mb-0 me-4">Gender: </h6>
                            <div className="form-check form-check-inline mb-0 me-4">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="trainergender"
                                value="F"
                                onChange={e=>settrainergender(e.target.value)}
                                id="femaleGender"
                                required
                                />
                                <label className="form-check-label" for="femaleGender">Female</label>
                            </div>
                            <div className="form-check form-check-inline mb-0 me-4">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="trainergender"
                                value="M"
                                onChange={e=>settrainergender(e.target.value)}
                                id="maleGender"
                                required
                                />
                                <label className="form-check-label" for="maleGender">Male</label>
                            </div>
                        </div>

                        {/* Height and Weight  */}
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input type="number" name="trainerheight" max={10} value={trainerheight} onChange={e => onChange(e)} placeholder="Height :ex.5 Feet" id="form3Example1n1" className="form-control form-control-lg" required />
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input type="number" name="trainerweight" value={trainerweight} onChange={e => onChange(e)} placeholder="Weight :ex.70 kg" id="form3Example1n1" className="form-control form-control-lg" required />
                                </div>
                            </div>
                        </div>

                        {/* Register Trainer  */}
                        <div className="form-outline mb-4">
                            <input type="date" name="trainerrdate" value={trainerrdate} onChange={e => onChange(e)} min={disableDates()} id="form3Example97" className="form-control form-control-lg" required/>
                            <label className="form-label" for="form3Example1m1">Register Date</label>
                        </div>
                        {/* experience and batch  */}
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input type="number" name="trainerexp" value={trainerexp} onChange={e => onChange(e)} placeholder='ex. 5' id="form3Example1m1" className="form-control form-control-lg" required />
                                    <label className="form-label" for="form3Example1m1">Experience</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <select className="select" value={trainerbatch} onChange={e => settrainerbatch(e.target.value)} required>
                                    <option value="morning">Morning</option>
                                    <option value="afternoon">Afternoon</option>
                                    <option value="evening">Evening</option>
                                </select>
                                <label className="form-label" for="form3Example1m1">Select Batch</label>
                                {/* <h3>Selected Value:{trainerbatch}</h3> */}
                            </div>
                        </div>
                        {/* Speciality  */}
                        <div className="form-outline mb-4">
                            <input type="text" name="trainerspeciality" value={trainerspeciality} onChange={e => onChange(e)} placeholder="Enter Specialities here..." className="form-control form-control-lg"  required/>
                        </div>
                        {/* Password  */}
                        <div className="form-outline mb-4">
                            <input type="password" name="trainerpassword" value={trainerpassword} onChange={e => onChange(e)} placeholder="Enter Password.." className="form-control form-control-lg" required />

                        </div>
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