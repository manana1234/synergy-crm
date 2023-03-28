import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

function CommissionDisplay() {
  const [commissions, setCommissions] = useState([]);

  useEffect(() => {
    db.collection('commissions')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setCommissions(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div>
      {commissions.map(({ id, data }) => (
        <div key={id}>
          <p>{data.commissionType}</p>
          <p>{data.amount}</p>
          <p>{new Date(data.timestamp?.toDate()).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default CommissionDisplay;
