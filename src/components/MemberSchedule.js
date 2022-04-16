import React from 'react'
import img1 from '../components/images/FitnessSchedule.png'
import MemberDashboard from './MemberDashboard'

function MemberSchedule() {
  return (
    <>
      <MemberDashboard/>
      <div>
      <div className='bg-black' style={{marginTop:'80px'}}>
          <img src={img1} className='' style={{height:'80%',width:'80%',objectFit:"cover"}} alt="form"/>
      </div>
      </div>
    </>
  )
}

export default MemberSchedule
