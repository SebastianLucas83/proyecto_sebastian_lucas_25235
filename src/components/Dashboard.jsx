// Dashboard.js
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import Swal from "sweetalert2";
import '../misEstilos.css';
const API_URL = 'https://693dcaf5f55f1be79303b682.mockapi.io/Products';

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
  title: "Esta seguro de cerrar session?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "SI",
  cancelButtonText: "NO"
}).then((result) => {
  if (result.isConfirmed) {
    logout();           // limpia token y localStorage
           navigate('/login'); // redirige a login
  }
});
            
  };

  const [productos, setProductos] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ title: '', description: '', price: '', stock: '', image: '' });
  const [editId, setEditId] = useState(null);

  const getProductos = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setProductos(data);
  };

  const handleClose = () => {
    setShow(false);
    setForm({ title: '', description: '', price: '', stock: '', image: '' });
    setEditId(null);
  };

  const handleShow = (producto) => {
    setShow(true);
    if (producto) {
      setForm({
        ...producto,
        price: Number(producto.price),
        stock: Number(producto.stock)
      });
      setEditId(producto.id);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock)
    };

    const method = editId ? 'PUT' : 'POST';
    const url = editId ? `${API_URL}/${editId}` : API_URL;

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData)
    });

    handleClose();
    getProductos();
    Swal.fire({
      title: "CARD Exitosa!",
      icon: "success",
      showConfirmButton: false,
      timer: 1000
    });

  };

  const eliminarProducto = async (id) => {
  try {
    // Mostrar la alerta y esperar la respuesta del usuario
    const result = await Swal.fire({
      title: '¿Estás seguro de eliminar la CARD seleccionada?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI',
      cancelButtonText: 'NO'
    });
    // Si el usuario confirma
    if (result.isConfirmed) {
      Swal.fire({
      title: "CARD eliminada exitosamente",
      icon: "success",
      showConfirmButton: false,
      timer: 1000
    });
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      getProductos();
    } else {
      Swal.fire({
      title: "CANCELADO",
      icon: "info",
      showConfirmButton: false,
      timer: 800
    });
    }
  } catch (error) {
    console.error('Error al mostrar la alerta:', error);
    Swal.fire('Error', 'Ocurrió un error al procesar tu solicitud.', 'error');
  }
}

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div className="container mt-4">
       <h1 className="titulo_destacado">CRUD de Productos</h1>
<div class="container mt-4">
  <div class="d-flex justify-content-between p-3">
      <Button className="btn btn-info" onClick={() => handleShow()}>Agregar Producto</Button>
      <Button className="btn btn-danger" onClick={handleLogout}>Cerrar sesión</Button>
  </div>
</div>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(prod => (
            <tr key={prod.id}>
              <td>{prod.title}</td>
              <td>{prod.description}</td>
              <td>${Number(prod.price).toFixed(2)}</td>
              <td>{prod.stock}</td>
              <td>
                {prod.image?.startsWith('http') ? (
                  <img src={prod.image} alt={prod.title} width={50} />
                ) : (
                  <span>{prod.image}</span>
                )}
              </td>
              <td class="btn-crud d-flex justify-content-center p-3 gap-2">
                <button type="button" class="btn-warning-crud btn btn-warning 5" onClick={() => handleShow(prod)}>Editar</button>{' '}
                <button type="button" class="btn btn-danger" onClick={() => eliminarProducto(prod.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? 'Editar' : 'Agregar'} Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Título</Form.Label>
              <Form.Control
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                value={form.price}
                onChange={e => setForm({ ...form, price: Number(e.target.value) })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                value={form.stock}
                onChange={e => setForm({ ...form, stock: Number(e.target.value) })}
                required
              /> 
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Imagen (URL)</Form.Label>
              <Form.Control
                value={form.image}
                onChange={e => setForm({ ...form, image: e.target.value })}
                required
              />
            </Form.Group>
            <Button type="submit" className="mt-2">Guardar</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Dashboard;



