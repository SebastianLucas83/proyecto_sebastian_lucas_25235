import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import Swal from "sweetalert2";

const ProductList = ({ type = null }) => 
    {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);


    useEffect(() => 
    {
    let url = 'https://api.magicthegathering.io/v1/cards';
    if (type) 
    {
      url = `https://api.magicthegathering.io/v1/cards?types=${type}`;
    }

      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCards(data.cards.slice(0, 12));
        //console.log(data.cards)
        setLoading(false);
      })
  
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [type]);


    const handleAgregarAlCarrito = (cards) => {
   // alerta carrito
   Swal.fire({
    position: "center",
    icon: "success",
    title: `Producto ${cards.name} agregado al carrito`,
    showConfirmButton: false,
    timer: 1500
    });
  };



  if (loading) {
    return <div>Cargando...</div>;
  }  

  
  return (
    <Row>
      {cards.map((card) => (
        <Col md={4} key={card.code} className="mb-4">
          <ProductCard card={card} agregarAlCarrito={handleAgregarAlCarrito} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
