import React, { useContext } from "react";
import { Routes, Route, Link, Redirect } from "react-router-dom";
import { RoleContext } from "../contexts/RoleContext";
import CustomerInput from "./CustomerInput";
import ProductSalesInput from "./ProductSalesInput";
import SalesDataTable from "./SalesDataTable";
import Logout from "./Logout";
import CommissionDisplay from "./CommissionDisplay";
import ManagerDashboard from "./ManagerDashboard";

const Dashboard = () => {
  let userRole = localStorage.getItem("role");
  // const { userRole } = useContext(RoleContext);

  return (
    <div>
      {userRole === "salesRep" ? (
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/customer-input'>Customer Input</Link>
              </li>
              <li>
                <Link to='/product-sales-input'>Product Sales Input</Link>
              </li>
              <li>
                <Link to='/sales-data'>Sales Data</Link>
              </li>
              <li>
                <Link to='/commission'>Commission</Link>
              </li>
              <li>
                <Link to='/logout'>Logout</Link>
              </li>
            </ul>
          </nav>
          {/* <Routes>
            <Route path='/customer-input' Component={CustomerInput} />
            <Route path='/product-sales-input' Component={ProductSalesInput} />
            <Route path='/sales-data' Component={SalesDataTable} />
            <Route path='/commission' Component={CommissionDisplay} />
            <Route path='/logout' Component={Logout} />
          </Routes> */}
        </div>
      ) : (
        <ManagerDashboard />
      )}
    </div>
  );
};

export default Dashboard;
