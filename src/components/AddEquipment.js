import React,{useState} from 'react'
import AdminDashboard from './AdminDashboard'
import './css/addequipment.css';
import img1 from '../components/images/regtrainer2.png'

function AddEquipment() {

    const [formData, setFormData] = useState({
      eqname: "",
      eqquantity: "",
      eqdescription: "",
    });
  
    const { eqname, eqquantity, eqdescription} = formData;
  
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    // Submit Click
    const onSubmit = async(e) => {
      e.preventDefault();
      
        // const newUser = {
        //   eqname,
        //   eqquantity,
        //   eqdescription  
        // }
        // console.log(eqname,eqquantity,eqdescription);
    
        // You can write API Code Here....
    }

  return (
    <>
        <AdminDashboard/>
        <div className='mt-5' style={{paddingTop:'20px',paddingBottom:'80px'}}>
        <section className="h-100 bg-black">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
                <div className="card card-registration my-4">
                <div className="row g-0">
                    <div className="col-xl-6 d-none d-xl-block">
                    <img src={img1} alt="register" className="img-fluid" 
                        style={{borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' ,width: "800px",height:"100%",objectFit:"cover"}}
                    />
                    </div>
                    <div className="col-xl-6">
                        {/* Form Tag */}
                    <form onSubmit={e => onSubmit(e)} method="post">
                    <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase text-center">ADD EQUIPMENTS</h3>
                        {/* Name  */}
                        <div className="form-outline mb-4">
                            <input type="text" name="eqname" value={eqname} onChange={e => onChange(e)} placeholder="Enter Equipment Name.." id="form3Example97" className="form-control form-control-lg" required/>
                            {/* <label className="form-label">Name</label> */}
                        </div>
                        {/* Quantity  */}                        
                        <div className="form-outline mb-4">
                            <input type="number" name="eqquantity" value={eqquantity} onChange={e => onChange(e)}  min="0" max="100"  placeholder="Enter Equipment Quantity.." id="form3Example97" className="form-control form-control-lg" required/>
                            {/* <label className="form-label">Quantity</label> */}
                        </div>
                        {/* Description*/}
                        <div className="form-outline mb-4">
                            <input type="text" name="eqdescription" value={eqdescription} onChange={e => onChange(e)} placeholder="Enter Equipment Description.." className="form-control form-control-lg" required/>
                            {/* <label className="form-label" for="form3Example8">Description</label> */}
                        </div>

                        {/* Buttons  */}
                        <div className="d-flex justify-content-end pt-3">
                            <button type="submit" className="btn btn-warning btn-lg ms-2">Submit</button>
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

export default AddEquipment
