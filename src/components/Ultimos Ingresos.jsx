import React from 'react';
import CardList from './CardList';
import '../misEstilos.css';

const UltimosIngresos = () => {
return (
  <div >
    <h1 className='titulo_destacado'>Ultimos Ingresos</h1>
    <div className="container">
    <CardList type="creature" />
    </div>
  </div>
);
};
export default UltimosIngresos;
