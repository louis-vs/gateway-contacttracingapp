import React, {useState} from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import FormDialog from './FormDialog';
import FormLogIn from './FormLogIn';


export function LogInButton () {
  const [showLogIn, setLogIn] = useState(false);

  // event handlers
  const handleLogInOpen = () => { setLogIn(true); }

  const handleDialogClose = () => {
    setLogIn(false);
  };

  return (
    <>
      <Link to='sign=up'>
        <button className='btn' onClick={handleLogInOpen}>
        Log In
        </button>


        <FormDialog open={showLogIn} onClose={handleDialogClose}>
          <FormLogIn onClose={handleDialogClose}></FormLogIn>
        </FormDialog>

      </Link>
    </>      
  );
}

