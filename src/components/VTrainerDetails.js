import React from 'react'

function VTrainerDetails() {
  return (
    <div className='mt-5'>
    <div class="container">
        <h2>VIEW TRAINER DETAILS</h2>
        <table class="table table-dark table-striped table-hover" style={{border:'10px solid grey',textAlign:'center'}}>
            <thead>
            <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th style={{width:'112px'}}>CONTACT NO</th>
                <th>GENDER</th>
                <th style={{width:'105px'}}>BIRTH DATE</th>
                <th>HEIGHT</th>
                <th>WEIGHT</th>
                <th style={{width:'128px'}}>REGISTER DATE</th>
                <th>ADDRESS</th>
                <th>ACTIONS</th>
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
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
            <tr>
                <td>Mihir</td>
                <td>Mihir@gmail.com</td>
                <td>9875641230</td>
                <td>Male</td>
                <td>01/01/2001</td>
                <td>5F 9inch</td>
                <td>62</td>
                <td>01/05/2020</td>
                <td>Behind Gandhi Road,Bardoli</td>
                <td><button type="submit" className="btn btn-outline-danger btn-sm ms-2">REMOVE</button></td>
            </tr>
            <tr>
                <td>Vidhyut Jamwal</td>
                <td>Vidhyut@gmail.com</td>
                <td>9852365256</td>
                <td>Male</td>
                <td>01/05/1980</td>
                <td>6Foot 2inch</td>
                <td>68</td>
                <td>05/05/2020</td>
                <td>Mumbai</td>
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
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
            </tbody>
        </table>
        </div>    
</div>
  )
}

export default VTrainerDetails