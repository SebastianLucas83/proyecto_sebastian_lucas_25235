import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Swal from "sweetalert2";

const ProductHome = ({ product, agregarAlCarrito }) => {


  return (
      // Armo la cards
   <Card className=" h-100 d-flex flex-column">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        className="card-img-top img-fluid" 
        style={{ height: '400px', objectFit: 'contain'}} 
      />

      
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className='h-50'>
          {product.description}
        </Card.Text>
        <Card.Text className='text-center'>
          <strong> ${product.price}</strong>
        </Card.Text>
        <Button variant="primary" onClick={() => { agregarAlCarrito(product),
           Swal.fire({
              position: "center",
              icon: "success",
              title: `CARD ${product.title} agregado al carrito`,
              showConfirmButton: false,
              timer: 800
              });
        }}>
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductHome;
