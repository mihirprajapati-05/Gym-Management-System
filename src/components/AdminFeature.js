import React from 'react'
import img1 from '../components/images/gym_dark.jpg'
import './css/adminfeature.css'

import fimg1 from '../components/images/membericon.jpg'
import fimg2 from '../components/images/trainericon.jpg'
import fimg3 from '../components/images/membershipicon.png'


function AdminFeature() {
  return (
    <div className='mt-5 bg-black'>
      <div className="card pmd-card bg-dark text-white text-center overlay-card">
        <img src={img1} className="pmd-card-media" alt='feature' style={{height:'100%',width:'100%',objectFit:"cover"}}/>
        
        <div className="card-img-overlay bg-black">
          <h2 className="card-title" style={{fontSize:'40px',marginTop:'50px',marginBottom:'100px'}}>ADMIN DASHBOARD</h2>
          <div class="card-deck">
            <div class="card bg-dark">
              <img class="card-img-top" src={fimg1} style={{height:'80%',width:'80%',objectFit:"cover"}} alt="Card1"/>
              <div class="card-body">
                <h5 class="card-title">Total Members : 10</h5>
                {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
              </div>
              <div class="card-footer">
                <small class="text-muted">M-Square Gym</small>
              </div>
            </div>
            <div class="card bg-dark">
              <img class="card-img-top" src={fimg2} style={{height:'80%',width:'80%',objectFit:"cover"}} alt="Card2"/>
              <div class="card-body">
                <h5 class="card-title">Total Trainers : 5</h5>
                {/* <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
              </div>
              <div class="card-footer">
                <small class="text-muted">M-Square Gym</small>
              </div>
            </div>
            <div class="card bg-dark">
              <img class="card-img-top" src={fimg3} style={{height:'75%',width:'80%',objectFit:"cover"}} alt="Card3"/>
              <div class="card-body">
                <h5 class="card-title">Memberships : 4</h5>
                {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p> */}
              </div>
              <div class="card-footer">
                <small class="text-muted">M-Square Gym</small>
              </div>
            </div>
          </div>   
        </div>
      
      </div> 
    </div>
  )
}

export default AdminFeature
