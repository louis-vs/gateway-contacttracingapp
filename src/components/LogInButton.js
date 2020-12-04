import React, {useState} from 'react';
import './Button.css';
import FormDialog from './FormDialog';
import FormLogIn from './FormLogIn';


function LogInButton () {
  const [showLogIn, setLogIn] = useState(false);

  // event handlers
  const handleDialogOpen = () => { 
    setLogIn(true); 
  };

  const handleDialogClose = () => {
    setLogIn(false);
  };

  return (
    <>
      <button className='btn' onClick={handleDialogOpen}>
        Log In
      </button>


      <FormDialog open={showLogIn} onClose={handleDialogClose}>
        <FormLogIn onClose={handleDialogClose}></FormLogIn>
      </FormDialog>
    </>      
  );
}

export default LogInButton;
