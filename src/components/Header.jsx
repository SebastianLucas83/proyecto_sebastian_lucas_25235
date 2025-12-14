import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button,  Badge  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo.png'
import banner from '../assets/images/01_banner_mp.png'
import banner1 from '../assets/images/02_banner_ahora12.png'
import banner2 from '../assets/images/03_banner_tarjetas.jpg'
import { CartContext } from './CartContext';
import '../misEstilos.css';

const Header = () => {
    const { carrito } = useContext(CartContext);
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  return (
    <div className='pb-2'>
    <Navbar  bg="secondary" variant="dark" expand="lg" className=" pb-4 px-4 justify-content-center">
      <Container className='tit mt-4 ms-2'>       
        <Navbar.Brand as={Link} to="/" className="me-8 d-flex align-items-center">
          <img
            src= {logo} 
            alt="Logo"
            className="d-inline-block align-top me-2"
            style={{ height: '20px', objectFit: 'cover' }} 
          
          />
          <span className='titulo me-2' style={{ color: "rgb(255 252 0 / 67%)", fontStyle: 'italic',fontWeight: 'bold',fontSize: '2rem', fontFamily: 'Hanalei Fill'}} >ARGCARD</span>
           <img
            src= {logo} 
            alt="Logo"
            className="d-inline-block align-top me-2"
            style={{ height: '20px', objectFit: 'cover' }} 
          
          />
          <span  style={{fontSize:'10px', textAlign:'center'}} >TRADING CARD OFICIAL EN ARGENTINA</span>
        </Navbar.Brand>

        <Nav className="nav ms-auto align-items-center">
          <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
          <Nav.Link as={Link} to="/UltimosIngresos" className="me-3">Ultimos Ingresos</Nav.Link>
          <Nav.Link as={Link} to="/infaltables" className="me-3">Infaltables</Nav.Link>

          <div className="d-flex align-items-center">
            <Button variant="outline-light" as={Link} to="/administracion" className="me-2">
              Administración
            </Button>
            <Link to="/carrito" className="text-white position-relative">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              {totalItems > 0 && (
                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                  {totalItems}
                </Badge>
              )}
            </Link>
          </div>
        </Nav>
        </Container>
    </Navbar>
    <div className="slider"> 
    <ul className="animacion">
        <li><img src={banner}  alt="" /></li>
        <li><img src={banner1}  alt="" /></li>
        <li><img src={banner2}  alt="" /></li>
    </ul>
</div>
</div>
  );
};

export default Header;
