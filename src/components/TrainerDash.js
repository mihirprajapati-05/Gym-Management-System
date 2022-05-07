import React from 'react'
import TrainerDashboard from './TrainerDashboard'
import TrainerFeature from './TrainerFeature'
import {Card,Button} from 'react-bootstrap' 

import img1 from '../components/images/imgs4.jpg'
import img2 from '../components/images/gym2.jpg'

function TrainerDash() {
  return (
    <div>
      <TrainerDashboard/>
      <TrainerFeature/>  

      <>
  <Card>
    <Card.Img variant="top" src={img1} style={{height:'100%',width:'100%',objectFit:"cover"}}/>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src={img2} style={{height:'100%',width:'100%',objectFit:"cover"}} />
  </Card>
</>


    </div>
  )
}

export default TrainerDash
