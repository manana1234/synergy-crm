import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';

const SalesDataTable = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchSalesData = async () => {
      const salesRepRef = db.collection('salesReps').doc(auth.currentUser.uid);
      const salesSnapshot = await db
        .collection('sales')
        .where('salesRep', '==', salesRepRef)
        .get();

      const sales = salesSnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      const data = await Promise.all(
        sales.map(async (sale) => {
          const customer = await sale.data.customer.get();
          const product = await sale.data.product.get();

          return {
            id: sale.id,
            customerName: customer.data().customerName,
            productName: product.data().name,
          };
        })
      );

      setSalesData(data);
    };

    fetchSalesData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Customer</th>
          <th>Product</th>
        </tr>
      </thead>
      <tbody>
        {salesData.map((sale) => (
          <tr key={sale.id}>
            <td>{sale.customerName}</td>
            <td>{sale.productName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesDataTable;