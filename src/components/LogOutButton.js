import React from 'react';
import './Button.css';
import { useAuth } from '../contexts/AuthContext';

function LogOutButton () {
  const { logOut } = useAuth();


  const handleLogOut = async () => {
    try {
      await logOut();
    } catch {
      console.log("failed to log out");
    }
  }

  return (
    <>
      <button className='btn' onClick={handleLogOut}>
        Log Out
      </button>
    </>      
  );
}

export default LogOutButton;
