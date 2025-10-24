import React from 'react';
import { Card, Button } from 'react-bootstrap';
import miImagen from '../assets/images/sinImagen.png'

const ProductCard = ({ card, agregarAlCarrito }) => {

  //validacion si la imagen no existe
  let img =''
  if(!card.imageUrl)
  {
    img = miImagen;
  }
  else{
    img = card.imageUrl
  }

  return (
      // Armo la cards
   <Card className=" h-100 d-flex flex-column">
      <Card.Img
        variant="top"
        src={img}
        alt={card.name}
        className="card-img-top img-fluid" 
        style={{ height: '400px', objectFit: 'contain'}} 
      />

      
      <Card.Body className="d-flex flex-column">
        <Card.Title>{card.name}</Card.Title>
        <Card.Text className='h-50'>
          {card.text.slice(0, 100)}...
        </Card.Text>
        <Card.Text className='text-center'>
          <strong>$800</strong>
        </Card.Text>
        <Button variant="primary" onClick={() => agregarAlCarrito(card)}>
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
