import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { Table } from "react-bootstrap";

const SalesHistory = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("sales")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setSalesData(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sales-history">
      <h2>Sales History</h2>
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Rep ID</th>
            <th>Customer Name</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.data.repId}</td>
              <td>{sale.data.customerName}</td>
              <td>{sale.data.product}</td>
              <td>{sale.data.quantity}</td>
              <td>{new Date(sale.data.timestamp?.toDate()).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SalesHistory;