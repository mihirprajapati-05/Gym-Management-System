import React from 'react'
import img1 from '../components/images/gym_dark.jpg'
import './css/feature.css'

import fimg1 from '../components/images/1.svg'
import fimg2 from '../components/images/2.svg'
import fimg3 from '../components/images/3.svg'

function Feature() {
  return (
    <div className='mt-5 bg-black'>
      <div className="card pmd-card bg-dark text-white text-center overlay-card">
        <img src={img1} className="pmd-card-media" alt='feature' style={{height:'100%',width:'100%',objectFit:"cover"}}/>
        
        <div className="card-img-overlay bg-black">
          <h2 className="card-title">FEATURE</h2>
          <div class="card-deck">
            <div class="card bg-dark">
              <img class="card-img-top" src={fimg1} alt="Card1"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div class="card bg-dark">
              <img class="card-img-top" src={fimg2} alt="Card2"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div class="card bg-dark">
              <img class="card-img-top" src={fimg3} alt="Card3"/>
              <div class="card-body">
                <h5 class="card-title">Personal Training</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>   
        </div>
      
      </div> 
    </div>
  )
}

export default Feature