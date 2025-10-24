import React from 'react';
import CardList from './CardList';

const UltimosIngresos = () => {
  return (
    <div className="container">
      <h1>Ultimos Ingresos</h1>
      <CardList type="creature" />
    </div>
  );
};

export default UltimosIngresos;
