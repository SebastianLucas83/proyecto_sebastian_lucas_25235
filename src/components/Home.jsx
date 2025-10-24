import React from 'react';
import CardList from './CardList';

const Home = () => {
  return (
    <div className="container">
      <h1 className='titulo_destacado'>Todos los productos</h1>
      <CardList />
    </div>
  );
};

export default Home;
