import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { RoleContext } from "../contexts/RoleContext";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("salesRep");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUserRole, userRole } = useContext(RoleContext);
  const { setCurrentUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setError("");
      await auth.signInWithEmailAndPassword(email, password);
      localStorage.setItem("role", role);

      // setUserRole(role);
      setCurrentUser(email);

      navigate("/");
    } catch (err) {
      setError("Failed to log in");
    }
    setLoading(false);
  };

  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p>{error}</p>}
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div>
          <label htmlFor='role'>Role: </label>
          <select
            id='role'
            value={role}
            onChange={(e) => setRole(e.target.value)}>
            <option value='salesRep'>Sales Rep</option>
            <option value='manager'>Manager</option>
          </select>
        </div>
        <button disabled={loading} type='submit'>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
