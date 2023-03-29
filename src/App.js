import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import { RoleContext } from "./contexts/RoleContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";

import "./App.css";
import CustomerInput from "./components/CustomerInput";
import ProductSalesInput from "./components/ProductSalesInput";
import SalesDataTable from "./components/SalesDataTable";
import CommissionDisplay from "./components/CommissionDisplay";
import Logout from "./components/Logout";
import SalesRepOverview from "./components/SalesRepOverview";
import ProductPerformance from "./components/ProductPerformance";

function App() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  return (
    <AuthProvider>
      <RoleContext.Provider value={{ role, setRole }}>
        <Router>
          <Routes>
            <Route path='/login' Component={Login} />
            <Route path='/' Component={ProtectedRoute}>
              <Route path='/customer-input' Component={CustomerInput} />
              <Route
                path='/product-sales-input'
                Component={ProductSalesInput}
              />
              <Route path='/sales-data' Component={SalesDataTable} />
              <Route path='/commission' Component={CommissionDisplay} />
              <Route path='/sales-rep-overview' Component={SalesRepOverview} />
              <Route
                path='/product-performance'
                Component={ProductPerformance}
              />
              <Route path='/logout' Component={Logout} />
              <Route path='/' Component={Dashboard} />
            </Route>
          </Routes>
        </Router>
      </RoleContext.Provider>
    </AuthProvider>
  );
}

export default App;
