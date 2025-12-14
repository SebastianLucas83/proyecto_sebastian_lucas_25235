import React from 'react';
import ProductList from './ProductList';
import '../misEstilos.css';

const Home = () => {
  return (
    <div >
      <h1 className='titulo_destacado'>Todos los productos</h1>
      <div className="container">
      <ProductList/>
      </div>
    </div>
  );
};

export default Home;
