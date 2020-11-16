import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Meeting from './Meeting';
import FormDialog from './FormDialog';
import FormLogIn from './FormLogIn';
import FormSignUp from './FormSignUp';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  // dialog box states
  const [showLogIn, setLogIn] = useState(false);
  const [showSignUp, setSignUp] = useState(false);

  // event handlers
  const handleLogInOpen = () => { setLogIn(true); }
  const handleSignUpOpen = () => { setSignUp(true); }

  const handleDialogClose = () => {
    setLogIn(false);
    setSignUp(false);
  }

  // render
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Meeting />

        <h3>Hackbridge Gateway - Contact Tracing App</h3>

        {/* Placeholder log in and sign up buttons. To be replaced in navbar */}
        <Button variant="contained" color="primary" onClick={handleLogInOpen}>
          Log in
        </Button>
        <Button variant="contained" color="primary" onClick={handleSignUpOpen}>
          Sign up
        </Button>

        {/* Form pop-ups */}      
        <FormDialog open={showLogIn} onClose={handleDialogClose}>
          <FormLogIn onClose={handleDialogClose}></FormLogIn>
        </FormDialog>
        <FormDialog open={showSignUp} onClose={handleDialogClose}>
          <FormSignUp onClose={handleDialogClose}></FormSignUp>
        </FormDialog>

      </div>
    </Router>
  );
}

export default App;
