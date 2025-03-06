import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import '../styles/globals.css'; 
import Accordion from 'react-bootstrap/Accordion';
 
import { Button } from 'react-bootstrap'
import Header from '../app/components/Header';
import ButtomFooter from '../app/components/ButtomFooter';







function Home() {
  return (
    <> 

    <Header />
    <div className='home-first-container'>
    <Container>
      <Row>
        <Col xs={6}>
        <div className='home-container-first'>
        <h4><strong>Unleash Your Potential</strong></h4>
        <h1><b>Empowering <br />Minds,<br /> Shaping<br /> Futures.</b></h1>
        <p>At CodyDude, we are dedicated to transforming careers and businesses
             through our comprehensive software training, internship programs, and IT
             recruitment solutions. Our mission is to connect talent with
            opportunity, providing the tools and support necessary for success in
            the ever-evolving tech industry.</p><br />
            <Button className='btn-home' variant="info">Our Vision</Button>
            
            </div>
       
       
       
        </Col>
        <Col xs={4}>
       


 

        </Col>
        
      </Row>
     
    </Container>





    </div>






    <div className="background-image">
       <div className='home-container'>
        <h4>Guiding Principles</h4>
        <h1><strong>Our Vision & Mission
        </strong></h1>
        <p>Finding the right IT talent can be challenging, but with CodyDude, it doesn’t have to be. ,<br/>Let us help you build a strong, skilled, and motivated IT team that 
            drives your business forward.<br/> Contact us today to learn more about our IT Recruitment Services and how we can support your hiring needs.</p>
      </div>
      <Container>
      <div className='column-container-home'>
      <Row>
        
        <Col>
        <div className='column-container-home1'>
          <Button className='btn-home' variant="info">Our Vision</Button><br/><br/>
          <p>Our vision is to be the leading provider of software training, internships, and IT recruitment services, fostering a world where skilled professionals and innovative companies thrive. We believe in the power of education, the importance of the right career match, and the impact of skilled talent on business success.</p>
          </div></Col>
        
        <Col>
        <div className='column-container-home2'>
        <Button className='btn-home' variant="info">Our Vision</Button><br/><br/>
     
          <p><b>Empower Learners :</b> Provide high-quality software training that equips individuals with the latest skills and knowledge required to excel in their careers.<br/>
          <b>Facilitate Career Growth : </b>Offer placement and internship services that help our trainees find rewarding job opportunities and practical experience in top companies.<br/>
          <b>Support Businesses :</b> Deliver customized IT recruitment solutions that connect businesses with highly skilled professionals tailored to their specific needs.

</p>
</div>
</Col>
      
      </Row>
      </div>


     


      <div className='home-questioncontainer1'>
 
    <Container>
      <Row>
        <Col xs={5}>
        <div className='img-axxording'>


        </div>
        
        </Col>
        <Col xs={7}>
 
        <h4><b>Quick Answers</b></h4>
        <h1><b>Frequently Asked Questions</b></h1>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className='home-questioncontainer'>
        <Accordion.Header><b>What industries do you specialize in for IT recruitment?</b></Accordion.Header>
        <Accordion.Body>
        We specialize in IT recruitment across various
        industries, including finance, healthcare,
        manufacturing, e-commerce, and technology, among others.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='home-questioncontainer'>
        <Accordion.Header><b>How do you find and vet candidates?</b></Accordion.Header>
        <Accordion.Body>
        We use a combination of methods including job boards, social media, networking,
         and our own database of candidates.
         We also conduct thorough interviews and background checks to ensure
         the best fit for your requirements.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='home-questioncontainer'>
        <Accordion.Header><b>What is your process for understanding our hiring needs?</b></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className='home-questioncontainer'>
        <Accordion.Header><b>How do you ensure the quality of candidates?</b></Accordion.Header>
        <Accordion.Body>
        Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className='home-questioncontainer'>
        <Accordion.Header><b>What is the typical turnaround time for finding a suitable candidate?</b></Accordion.Header>
        <Accordion.Body>
        We use a combination of methods including job boards, social media,
        networking, and our own database of candidates.
         We also conduct thorough interviews and background checks to ensure the
         best fit for your requirements.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
       
       
       
        </Col>
       
      </Row>
     
    </Container>
 
 
 
 
 
 
    </div>






    </Container>
    <div className='home-container2'>
                <Container fluid="md">
                    <Row>
                        <Col><div className='home-image1'> </div></Col>
                        <Col>
                            <div className='Home-column2'>

                                <h4>INTRODUCTION</h4>
                                <    h1><b>“Welcome to Our Talent Community!”</b></h1>

                                <p>We understand that finding the right talent is essential for your business’s success. Our customized IT
                                    Recruitment Services are designed to connect you with top professionals who fit seamlessly into your
                                    organization.From sourcing to onboarding, we handle the entire recruitment process, ensuring you receive
                                    the best candidates swiftly and efficiently.</p>




                            </div>




                        </Col>
                    </Row><br /><br />
                </Container>

            </div>      

    </div>
   </>
  )
}

export default Home