import React from 'react'
import TrainerDashboard from './TrainerDashboard'
import img1 from '../components/images/vidyutprofile.png'
import img2 from '../components/images/anupprofile.jpg'
import img3 from '../components/images/zyanprofile.png'

function Trainermember() {
  return (
    <div classNameName='bg-black'>
        <TrainerDashboard/>


        <div class="container">
            <h2 style={{color:'white',margin:'50px'}}>Your Trainees</h2>
    <div class="row">
        <div class="col-lg-4">
            <div class="card p-0">
                <div class="card-image"> <img src={img2} alt=""/> </div>
                <div class="card-content d-flex flex-column align-items-center">
                    <h4 class="pt-2">Thakur Anup Singh</h4>
                    <h5></h5>
                    <ul class="social-icons d-flex justify-content-center">
                        <li style={{paddingTop: '2em'}}> <a href="#"> <span class="fab fa-facebook"></span> </a> </li>
                        {/* <li style="--i:2"> <a href="#"> <span class="fab fa-twitter"></span> </a> </li>
                        <li style="--i:3"> <a href="#"> <span class="fab fa-instagram"></span> </a> </li> */}
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card p-0">
                <div class="card-image"> <img src={img1} alt=""/> </div>
                <div class="card-content d-flex flex-column align-items-center">
                    <h4 class="pt-2">Vidhyut Jamwal</h4>
                    <h5></h5>
                    <ul class="social-icons d-flex justify-content-center">
                        <li style={{paddingTop: '2em'}}> <a href="#"> <span class="fab fa-facebook"></span> </a> </li>
                        {/* <li style="--i:2"> <a href="#"> <span class="fab fa-twitter"></span> </a> </li>
                        <li style="--i:3"> <a href="#"> <span class="fab fa-instagram"></span> </a> </li> */}
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card p-0">
                <div class="card-image"> <img src={img3} alt=""/> </div>
                <div class="card-content d-flex flex-column align-items-center">
                    <h4 class="pt-2">Zyan Malik</h4>
                    <h5></h5>
                    <ul class="social-icons d-flex justify-content-center">
                        <li style={{paddingTop: '2em'}}> <a href="#"> <span class="fab fa-facebook"></span> </a> </li>
                        {/* <li style="--i:2"> <a href="#"> <span class="fab fa-twitter"></span> </a> </li>
                        <li style="--i:3"> <a href="#"> <span class="fab fa-instagram"></span> </a> </li> */}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Trainermember
