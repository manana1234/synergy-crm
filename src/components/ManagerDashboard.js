import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import SalesRepOverview from './SalesRepOverview';
import ProductPerformance from './ProductPerformance';
import Logout from './Logout';

const ManagerDashboard = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/sales-rep-overview">Sales Rep Overview</Link>
          </li>
          <li>
            <Link to="/product-performance">Product Performance</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/sales-rep-overview" component={SalesRepOverview} />
        <Route path="/product-performance" component={ProductPerformance} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </>
  );
};

export default ManagerDashboard;