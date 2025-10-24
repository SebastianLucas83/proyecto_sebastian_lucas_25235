import React from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    //alerta login exitoso
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Login Realizado con EXITO!!!`,
      showConfirmButton: false,
      timer: 1500
    }).then((result) => {
      // Finalizada la alerta se redirecciona a HOME
      navigate('/');
    });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Iniciar Sesión</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su usuario" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Ingrese su contraseña" required />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Ingresar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
