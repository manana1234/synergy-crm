import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

const AllCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const customerSnapshot = await firestore.collection('customers').get();

      setCustomers(
        customerSnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    };

    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>All Customers</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.data.customerName}</td>
              <td>{customer.data.address}</td>
              <td>{customer.data.phoneNumber}</td>
              <td>{customer.data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCustomers;