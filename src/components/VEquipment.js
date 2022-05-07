import React from 'react'
import AdminDashboard from './AdminDashboard'
import { Link } from 'react-router-dom'
// import {useHistory} from 'react-router-dom'

function VEquipment() {

  // const history = useHistory();
  
  // const routeChange = () =>{ 
  //   let path = `/admindashboard/ved`; 
  //   history.push(path);
  // }

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
                    <th>CATEGORY</th>
                    <th>DESCRIPTION</th>
                    <th>ACTION</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                <tr>
                  <td></td>
                    <td>Dubmbell</td>
                    <td>5</td>
                    <td>Dumbell</td>
                    <td>For Build Muscules</td>
                    <td><Link to="/admindashboard/ueq"><button type="submit" className="btn btn-outline-primary btn-sm ms-2">UPDATE</button></Link></td>
                    <td><button type="submit" className="btn btn-outline-danger btn-sm ms-2">REMOVE</button></td>
                </tr>
                <tr>
                  <td></td>
                  <td>Dubmbell</td>
                    <td>5</td>
                    <td>Dumbell</td>
                    <td>For Build Muscules</td>
                    <td><Link to="/admindashboard/ueq"><button type="submit" className="btn btn-outline-primary btn-sm ms-2">UPDATE</button></Link></td>
                    <td><button type="submit" className="btn btn-outline-danger btn-sm ms-2">REMOVE</button></td>
                </tr>
                <tr>
                        <td></td>
                        <td></td>
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
