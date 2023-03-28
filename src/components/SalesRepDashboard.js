import React from 'react';
import CustomerInput from './CustomerInput';
import ProductSalesInput from './ProductSalesInput';
import DataTable from './DataTable';
import ProductPerformance from './ProductPerformance';

const SalesRepDashboard = () => {
  return (
    <div>
      <h1>Sales Rep Dashboard</h1>
      <CustomerInput />
      <ProductSalesInput />
      <ProductPerformance />
      <DataTable />
    </div>
  );
};

export default SalesRepDashboard;