import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productCommission, setProductCommission] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const productSnapshot = await firestore.collection('products').get();

      setProducts(
        productSnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    };

    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firestore.collection('products').add({
        name: productName,
        commission: parseFloat(productCommission),
      });

      setProductName('');
      setProductCommission('');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div>
      <h2>Product Manager</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name</label>
        <input
          id="productName"
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <label htmlFor="productCommission">Commission</label>
        <input
             id="productCommission"
             type="number"
             step="0.01"
             value={productCommission}
             onChange={(e) => setProductCommission(e.target.value)}
             required
           />
           <button type="submit">Add Product</button>
         </form>
       
         <table>
           <thead>
             <tr>
               <th>Product Name</th>
               <th>Commission</th>
             </tr>
           </thead>
           <tbody>
             {products.map((product) => (
               <tr key={product.id}>
                 <td>{product.data.name}</td>
                 <td>{product.data.commission.toFixed(2)}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
        );
    };

    export default ProductManager;
