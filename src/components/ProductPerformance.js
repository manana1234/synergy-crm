import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

const ProductPerformance = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productSnapshot = await db.collection('products').get();

      setProducts(
        productSnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product Performance</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.data.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPerformance;