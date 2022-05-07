import React from 'react'
import img1 from '../components/images/timetable.jpg'
import TrainerDashboard from './TrainerDashboard'

function TrainerSchedule() {
  return (
    <>
        <TrainerDashboard/>
        <div className='bg-black' style={{paddingTop:'20px',paddingBottom:'80px'}}>
            <div className='container'>
                <h2 style={{color:'white',fontSize:'80x'}}>SCHEDULE</h2>
            </div>
            <div className='bg-black' style={{marginTop:'40px'}}>
                <img src={img1} className='' style={{height:'80%',width:'80%',objectFit:"cover"}} alt="form"/>
            </div>
      </div>
    </>
  )
}

export default TrainerSchedule
