import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Meeting from './Meeting';

import { BrowserRouter as Router} from 'react-router-dom'

function App() {

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
