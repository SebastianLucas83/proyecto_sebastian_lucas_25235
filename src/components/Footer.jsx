import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css'; 
import logo from '../assets/images/logo.png'
import logo_wsp from '../assets/images/logo_wsp.png'
import logo_face from '../assets/images/logo_twitter.png'
import logo_twitter from '../assets/images/logo_face.png'
import logo_ig from '../assets/images/logo_ig.png'
import '../misEstilos.css';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white text-center py-4 mt-4">
      <Container>
        <Row>
          <Col md={6} style={{width:'100%'}}>
             <img
                        src= {logo} 
                        alt="Logo"
                        className="d-inline-block align-top me-2"
                        style={{ height: '20px', objectFit: 'cover' }} 
                      
                      />
                      <span className='titulo me-2' style={{ color:'white', fontFamily: 'Permanent Marker'}} >ARGCARD</span>
                       <img
                        src= {logo} 
                        alt="Logo"
                        className="d-inline-block align-top me-2"
                        style={{ height: '20px', objectFit: 'cover' }} 
                         />
          </Col>
          <Col md={6} style={{width:'100%'}}>
            <div>
              <a href="#" className="text-white me-3"  >
                  <img src={logo_ig}  alt="" className="img_logo_footer" style={{ width: '40px'}} />
              </a>
              <a href="#" className="text-white me-3">
                   <img src={logo_face}  alt="" className="img_logo_footer" style={{ width: '40px' }} />
              </a>
              <a href="#" className="text-white me-3">
                   <img src={logo_twitter}  alt="" className="img_logo_footer" style={{ width: '40px' }}  />
              </a>
              <a href="#" className="text-white">
                   <img src={logo_wsp}  alt="" className="img_logo_footer" style={{ width: '40px'}} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;