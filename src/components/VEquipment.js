import React from 'react'
import AdminDashboard from './AdminDashboard'

function VEquipment() {
  return (
    <>
    <AdminDashboard/>
    <div className='mt-5 bg-black' style={{paddingTop:'40px',paddingBottom:'100px'}}>
        <div class="container">
            <h2 className='h2 h2-white' style={{color:'white',marginBottom:'50px'}}>VIEW EQUIPMENT DETAILS</h2>
                        
            <table class="table table-dark table-striped table-hover" style={{border:'10px solid grey',textAlign:'center'}}>
                <thead>
                <tr>
                    <th>IMAGE</th>
                    <th>NAME</th>
                    <th>QUANTITY</th>
                    <th>DESCRIPTION</th>
                    <th>ACTION</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                <tr>
                  <td></td>
                    <td>Mihir</td>
                    <td>Mihir@gmail.com</td>
                    <td>9875641230</td>
                    <td><button type="submit" className="btn btn-outline-danger btn-sm ms-2">REMOVE</button></td>
                </tr>
                <tr>
                  <td></td>
                    <td>Vidhyut Jamwal</td>
                    <td>Vidhyut@gmail.com</td>
                    <td>9852365256</td>
                    <td><button type="submit" className="btn btn-outline-danger btn-sm ms-2">REMOVE</button></td>
                </tr>
                <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </div>    
    </div>

    </>
  )
}

export default VEquipment
