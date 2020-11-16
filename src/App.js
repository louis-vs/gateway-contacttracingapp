import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Meeting from './Meeting';

import Button from '@material-ui/core/Button';
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  // dialog box states
  // const [showLogIn, setLogIn] = useState(false);
  // const [showSignUp, setSignUp] = useState(false);

  // // event handlers
  // const handleLogInOpen = () => { setLogIn(true); }
  // const handleSignUpOpen = () => { setSignUp(true); }

  // const handleDialogClose = () => {
  //   setLogIn(false);
  //   setSignUp(false);
  // }

  // render
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Meeting />

        <h3>Hackbridge Gateway - Contact Tracing App</h3>

        {/* Placeholder log in and sign up buttons. To be replaced in navbar */}
        

        {/* Form pop-ups */}      
        
        
      </div>
    </Router>
  );
}

export default App;
