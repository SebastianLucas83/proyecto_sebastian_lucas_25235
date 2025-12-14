import React, { useEffect, useState , useContext} from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductHome from './ProductHome';
import Swal from "sweetalert2";
import { CartContext } from './CartContext';

const ProductList = ({ type = null }) => 
    {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { agregarAlCarrito } = useContext(CartContext);


    useEffect(() => 
    {
    let url = 'https://693dcaf5f55f1be79303b682.mockapi.io/Products';

      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        //console.log(data)
        setLoading(false);
      })
  
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  });


  if (loading) {
    return <div>Cargando...</div>;
  }  

  
  return (
    <Row>
      {products.map((product) => (
        <Col md={4} key={product.id} className="mb-4">
          <ProductHome product={product} agregarAlCarrito={agregarAlCarrito}  />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
