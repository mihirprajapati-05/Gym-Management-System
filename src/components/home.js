import React from 'react'
import Slider from './Slider';
import Feature from './Feature';

// import FeatureSlider from './FeatureSlider'

function home() {
  return (
    <div className='bg-black'>
        <Slider/>
        <Feature/>

        {/* <FeatureSlider/> */}
    </div>
  )
}

export default home