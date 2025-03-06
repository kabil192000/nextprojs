import React from 'react'
import { Button } from 'react-bootstrap';

export default function footer() {
  return (
    <div>

<div className='footer'>
    <Container>
      <Row >
       
        <Col xs={7}>
        <div className='home-container-first3'>
        <h4><strong>Address & Contact</strong></h4>
       
        <span><Button variant="outline-info" className="m-2">
        <FaAddressBook />
      </Button>No.1131/18D, KR Nataraja Gounder Valagam,
           Nadarmedu, Moolapalayam, Erode - 638002</span>
     
 
        </div>
        <div className='home-container-first3'>
       
        <span><Button variant="outline-primary" className="m-2">
        <FaPhone />
      </Button> Call Us : (+91) 9345702658
        We are open from Monday to Saturday - 10.00 AM - 08.00 PM.</span>
     
 
        </div>
       
       
       
        </Col>
        <Col xs={3}>
        <div className='footer-container-home2'>
          <h4><strong>Quick Links</strong></h4>
 
 
 
        </div>
        </Col>
        <Col xs={2}>
       
        <div className='footer-container-home3'>
          <h4><strong>Social Media</strong></h4>
         
 
 
 
 
          <div>
         
      <Button variant="outline-dark" className="m-2" href="https://www.instagram.com" target="_blank">
        <FaInstagram />
      </Button>
      <Button variant="outline-primary" className="m-2" href="https://www.linkedin.com" target="_blank">
        <FaLinkedin />
      </Button>
      <Button variant="outline-info" className="m-2" href="https://www.facebook.com" target="_blank">
        <FaFacebook />
      </Button>
    </div>
 
         
       
 
 
 
        </div>
       
        </Col>
        <div><h5>Copyright © 2024. All Rights Reserved.</h5></div>
       
      </Row>
     
    </Container>
    </div>

        




    </div>
  )
}
