import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";
import { RoleContext } from "./contexts/RoleContext";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ProtectedRoute from './components/ProtectedRoute';
import "./App.css";

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
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/" component={Dashboard} />
          </Routes>
        </Router>
      </RoleContext.Provider>
    </AuthProvider>
  );
}

export default App;