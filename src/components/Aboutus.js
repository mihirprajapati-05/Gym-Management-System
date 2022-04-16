import React from 'react';
import {Card} from 'react-bootstrap'

import img1 from '../components/images/gym_dark8.jpg'

const Aboutus = () => {
  return (
 
      <div className='bg-black' style={{paddingTop:'5px',paddingBottom:'50px'}}>
          <h1 style={{ color:'#FFFFFF' , textAlign:'center' ,fontWeight:'bold' ,marginTop:'60px' }}>About US</h1>
          <hr style={{ color:'#FFFFFF' ,marginLeft:'150px ' ,marginRight:'150px'}}/>
          <Card style={{ width: '60rem' ,height: '36rem' ,alignItems:'center' ,marginLeft:'260px'}}>
            
            <Card.Img variant="top" src={img1} style={{width: '60rem' ,height: '25rem'}}/>
            <Card.Body>
              <Card.Title style={{ textAlign: 'center'}}>M-SQUARE</Card.Title>
              <Card.Text style={{ marginBottom: '80px'}}>
                M-Square was conceptualized keeping in mind the rationale behind multi specialty centre concept. At Ozone we integrate all the possible relaxation, exercises and group exercise techniques, i,e.,“gym, spa, yoga, aerobics” centers.are all under a single roof.
                Ozone Clubs are the luxury health clubs and salons launched to satisfy the niche segment by revitalizing their senses and soothe the jitteriness of city life.
                Ozone Spa Pvt. Ltd., incorporated on November 1, 2002 is the country's first largest chain of premier boutique health, fitness and spa.
                
              </Card.Text>
            </Card.Body>
          </Card>
      </div>

  )
}

export default Aboutus;