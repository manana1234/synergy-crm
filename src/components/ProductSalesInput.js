import React, { useState } from 'react';
import { db } from '../firebase';

function ProductSalesInput() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('sales').add({
      name: productName,
      price: productPrice,
    });
    setProductName('');
    setProductPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Product Name"
      />
      <input
        type="number"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        placeholder="Product Price"
      />
      <button type="submit">Add Sale</button>
    </form>
  );
}

export default ProductSalesInput;
