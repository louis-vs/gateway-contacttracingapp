import React, { useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useAuth } from '../contexts/AuthContext';

// log in form content. Place within FormDialog
function FormLogIn(props) {
  // authentication
  const { logIn } = useAuth();

  // state
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ error, setError ] = useState("");
  const [ loading, setLoading ] = useState(false);

  // event handlers
  const handleChange = (event) => {
    switch(event.target.id) {
      case 'email': setEmail(event.target.value); break;
      case 'password': setPassword(event.target.value); break;
      default: break;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); // stop browser from auto-redirecting

    // TODO: add client-side validation

    
    try {
      setLoading(true);
      setError("");
      await logIn(email, password);
    } catch {
      setError("Failed to log in.");
    }

    setLoading(false);

  }

  // render
  return (
    <form onSubmit={handleSubmit}>
      <DialogTitle id='form-dialog-title'>Log In</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please log in.
        </DialogContentText>

        <TextField 
          id="email" 
          label="Email" 
          variant="outlined" 
          value={email}
          onChange={handleChange}
          required
        />
        <TextField 
          id="password" 
          label="Password" 
          variant="outlined" 
          type="password"
          value={password}
          onChange={handleChange}
          required
        />
        { error && <DialogContentText>{error}</DialogContentText> }
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={loading}>
          Log In
        </Button>
      </DialogActions>
    </form>
  );
}

export default FormLogIn;