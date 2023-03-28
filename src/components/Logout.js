import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Logout = () => {
  const history = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      history.push('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;