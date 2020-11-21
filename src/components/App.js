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
        
      </div>
    </Router>
  );
}

export default App;
