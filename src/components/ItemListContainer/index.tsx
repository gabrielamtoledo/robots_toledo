import React from 'react';
interface Props{
  texto: string;
}

const ItemListContainer = ({texto}:Props) => {
  return (
    <div>
      <h1>{texto}</h1>
    </div>
  );
};

export default ItemListContainer;
