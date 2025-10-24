import React from 'react';
import CardList from './CardList';

const Infaltables = () => {
  return (
    <div >
      <h1 className='titulo_destacado'>Infaltables</h1>
      <div className="container">
      <CardList type="vanguard" />
      </div>
    </div>
  );
};

export default Infaltables;
