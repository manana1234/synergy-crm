import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

const SalesRepOverview = () => {
  const [salesReps, setSalesReps] = useState([]);

  useEffect(() => {
    const fetchSalesReps = async () => {
      const salesRepSnapshot = await firestore.collection('salesReps').get();

      setSalesReps(
        salesRepSnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    };

    fetchSalesReps();
  }, []);

  return (
    <div>
      <h2>Sales Rep Overview</h2>
      <ul>
        {salesReps.map((salesRep) => (
          <li key={salesRep.id}>{salesRep.data.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SalesRepOverview;