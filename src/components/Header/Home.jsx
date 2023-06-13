import './Home.css';
import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Home() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
     <div className='homesection1' id="Home">
      <div className="container">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-3 text-center">
            <img src="anjali09.jpg" className="leftimg" alt="" />
          </div>
          
          <div className="col-lg-7">
            <h2 className='Heading01 pt-4'>My name is Anjali.</h2>
            <h2 className='Heading02'> A professional MERN Stack Developer</h2>
            <center>
                
           
            {values.map((v, idx) => (
          <Button key={idx} className="Modal1 mt-5" onClick={() => handleShow(v)}>
           View my CV
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
           </Button>
            // </div>
          
      ))}
       </center>
            </div>
            <div className="col-lg-1">
          
           </div>
           <div  className="col-lg-1"></div>
           </div>
     
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
      
        <Modal.Header closeButton>
          <Modal.Title>Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={6} >
              <img src="oo.jpg" alt="" />
            </Col>
            <Col xs={6}>
            <img src="kk.jpg" alt="" />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      </Modal>
      </div>
      </div>
   
    </>
  );
}

export default Home
