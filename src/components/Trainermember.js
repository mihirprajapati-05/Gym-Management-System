import React from 'react'
import TrainerDashboard from './TrainerDashboard'
import img1 from '../components/images/vidyutprofile.png'
import img2 from '../components/images/anupprofile.jpg'
import img3 from '../components/images/zyanprofile.png'

function Trainermember() {
  return (
    <div className='bg-black' style={{paddingTop:'20px',paddingBottom:'80px'}}>
        <TrainerDashboard/>


        <div className="container">
            <h2 style={{color:'white',margin:'50px'}}>YOUR MEMBERS</h2>
    <div className="row">
        <div className="col-lg-4">
            <div className="card p-0">
                <div className="card-image"> <img src={img2} alt=""/> </div>
                <div className="card-content d-flex flex-column align-items-center">
                    <h4 className="pt-2">Thakur Anup Singh</h4>
                    <h5></h5>
                    <ul className="social-icons d-flex justify-content-center">
                        <li style={{paddingTop: '2em'}}> <a href="#"> <span className="fab fa-facebook"></span> </a> </li>
                        {/* <li style="--i:2"> <a href="#"> <span className="fab fa-twitter"></span> </a> </li>
                        <li style="--i:3"> <a href="#"> <span className="fab fa-instagram"></span> </a> </li> */}
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="card p-0">
                <div className="card-image"> <img src={img1} alt=""/> </div>
                <div className="card-content d-flex flex-column align-items-center">
                    <h4 className="pt-2">Vidhyut Jamwal</h4>
                    <h5></h5>
                    <ul className="social-icons d-flex justify-content-center">
                        <li style={{paddingTop: '2em'}}> <a href="#"> <span className="fab fa-facebook"></span> </a> </li>
                        {/* <li style="--i:2"> <a href="#"> <span className="fab fa-twitter"></span> </a> </li>
                        <li style="--i:3"> <a href="#"> <span className="fab fa-instagram"></span> </a> </li> */}
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="card p-0">
                <div className="card-image"> <img src={img3} alt=""/> </div>
                <div className="card-content d-flex flex-column align-items-center">
                    <h4 className="pt-2">Zyan Malik</h4>
                    <h5></h5>
                    <ul className="social-icons d-flex justify-content-center">
                        <li style={{paddingTop: '2em'}}> <a href="#"> <span className="fab fa-facebook"></span> </a> </li>
                        {/* <li style="--i:2"> <a href="#"> <span className="fab fa-twitter"></span> </a> </li>
                        <li style="--i:3"> <a href="#"> <span className="fab fa-instagram"></span> </a> </li> */}
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="row mt-5">
        <div className="col-lg-4">
            <div className="card p-0">
                <div className="card-image"> <img src={img2} alt=""/> </div>
                <div className="card-content d-flex flex-column align-items-center">
                    <h4 className="pt-2">Thakur Anup Singh</h4>
                    <h5></h5>
                    <ul className="social-icons d-flex justify-content-center">
                        <li style={{paddingTop: '2em'}}> <a href="#"> <span className="fab fa-facebook"></span> </a> </li>
                        {/* <li style="--i:2"> <a href="#"> <span className="fab fa-twitter"></span> </a> </li>
                        <li style="--i:3"> <a href="#"> <span className="fab fa-instagram"></span> </a> </li> */}
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="card p-0">
                <div className="card-image"> <img src={img1} alt=""/> </div>
                <div className="card-content d-flex flex-column align-items-center">
                    <h4 className="pt-2">Vidhyut Jamwal</h4>
                    <h5></h5>
                    <ul className="social-icons d-flex justify-content-center">
                        <li style={{paddingTop: '2em'}}> <a href="#"> <span className="fab fa-facebook"></span> </a> </li>
                        {/* <li style="--i:2"> <a href="#"> <span className="fab fa-twitter"></span> </a> </li>
                        <li style="--i:3"> <a href="#"> <span className="fab fa-instagram"></span> </a> </li> */}
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="card p-0">
                <div className="card-image"> <img src={img3} alt=""/> </div>
                <div className="card-content d-flex flex-column align-items-center">
                    <h4 className="pt-2">Zyan Malik</h4>
                    <h5></h5>
                    <ul className="social-icons d-flex justify-content-center">
                        <li style={{paddingTop: '2em'}}> <a href="#"> <span className="fab fa-facebook"></span> </a> </li>
                        {/* <li style="--i:2"> <a href="#"> <span className="fab fa-twitter"></span> </a> </li>
                        <li style="--i:3"> <a href="#"> <span className="fab fa-instagram"></span> </a> </li> */}
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
