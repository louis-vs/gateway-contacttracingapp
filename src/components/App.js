import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { AuthProvider } from "../contexts/AuthContext"

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  // render
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <Switch>
            <Home />
            <Route exact path="/" component={Home} />

            
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
