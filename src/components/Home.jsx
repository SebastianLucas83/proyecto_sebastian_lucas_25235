import React from 'react';
import CardList from './CardList';
import '../misEstilos.css';

const Home = () => {
  return (
    <div >
      <h1 className='titulo_destacado'>Todos los productos</h1>
      <div className="container">
      <CardList />
      </div>
    </div>
  );
};

export default Home;
