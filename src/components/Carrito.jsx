import React, { useContext } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const Carrito = () => {
  const { carrito, setCarrito } = useContext(CartContext);
  const navigate = useNavigate();
  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(producto => producto.id !== id));
  
   // alerta carrito
   Swal.fire({
    position: "center",
    icon: "success",
    title: `Producto eliminado del carrito`,
    showConfirmButton: false,
    timer: 1000
    });
  };

  const total = carrito.reduce((acc, item) => acc + Number(item.price) * item.cantidad, 0);

  const pagar =()=>{
    // alerta carrito
   Swal.fire({
    position: "center",
    icon: "success",
    title: `CARD pagadas exitosamente`,
    showConfirmButton: false,
    timer: 900
    });
    carrito.map((item) => (
             item.id=0,
             setCarrito(prev => prev.filter(producto => producto.id !== item.id))
          ))
    navigate('/');
  }
  if (carrito.length === 0) {
    return (
      <Container className="mt-4">
        <h3>Tu carrito está vacío</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      
       <h1 className='titulo_destacado'>Carrito de compras</h1>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${Number(item.price).toFixed(2)}</td>
              <td>{item.cantidad}</td>
              <td>${(Number(item.price) * item.cantidad).toFixed(2)}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h5 className="text-end">Total a pagar: ${total.toFixed(2)}</h5>
      <Button className="btn btn-info" onClick={() => pagar()}>Pagar</Button>
    </Container>
  );
};

export default Carrito;
