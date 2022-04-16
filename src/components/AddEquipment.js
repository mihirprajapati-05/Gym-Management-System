import React from 'react'
import AdminDashboard from './AdminDashboard'
import img1 from '../components/images/addeqp.png'


function AddEquipment() {
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
                        style={{borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' ,width: "800px",height:"80%",objectFit:"cover"}}
                    />
                    </div>
                    <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase text-center">ADD EQUIPMENTS</h3>
                        {/* Name  */}
                        <div className="form-outline mb-4">
                            <input type="text" name="eqname"  placeholder="Enter Equipment Name.." id="form3Example97" className="form-control form-control-lg" />
                            {/* <label className="form-label">Name</label> */}
                        </div>
                        {/* Quantity  */}                        
                        <div className="form-outline mb-4">
                            <input type="number" name="eqquantity"  placeholder="Enter Equipment Quantity.." id="form3Example97" className="form-control form-control-lg" />
                            {/* <label className="form-label">Quantity</label> */}
                        </div>
                        {/* Description*/}
                        <div className="form-outline mb-4">
                            <input type="text" name="eqdescription"  placeholder="Enter Equipment Description.." className="form-control form-control-lg" />
                            {/* <label className="form-label" for="form3Example8">Description</label> */}
                        </div>

                        {/* Category  */}
                        {/* <div className="row">
                            <div className="col-md-6 mb-4">
                                <select className="select">
                                    <option value="1">Select Category</option>
                                    <option value="2">Category 1</option>
                                    <option value="3">Membership 2</option>
                                    <option value="4">Membership 3</option>
                                </select>
                            </div>
                        </div> */}
                        {/* Buttons  */}
                        <div className="d-flex justify-content-end pt-3">
                            <button type="button" className="btn btn-warning btn-lg ms-2">Submit form</button>
                        </div>
                    </div>
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
