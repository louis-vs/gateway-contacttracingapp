import React, { useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useAuth } from '../contexts/AuthContext';

// sign up form content. Place within FormDialog
function FormSignUp(props) {
  // authentication
  const { signUp } = useAuth();

  // state
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ passwordConfirmation, setPasswordConfirmation ] = useState("");
  const [ error, setError ] = useState("");
  const [ loading, setLoading ] = useState(false);

  // events
  const handleChange = (event) => {
    switch(event.target.id) {
      case 'email': setEmail(event.target.value); break;
      case 'password': setPassword(event.target.value); break;
      case 'password-confirmation': setPasswordConfirmation(event.target.value); break;
      default: break;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); // stop browser from auto-redirecting
    
    // TODO: add more client-side validation
    if(password !== passwordConfirmation) {
      return setError("Passwords do not match!");
    }

    try {
      setLoading(true);
      setError("");
      await signUp(email, password);
    } catch {
      setError("Failed to create account.");
    }
    // TODO: close popup & reload on success

    setLoading(false);
  }

  // render
  return (
    <form onSubmit={handleSubmit}>
      <DialogTitle id='form-dialog-title'>Sign Up</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter your details below.
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
        <TextField 
          id="password-confirmation" 
          label="Confirm password" 
          variant="outlined" 
          type="password"
          value={passwordConfirmation}
          onChange={handleChange}
          required
          error={error}
          helperText={error}
        />

      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={loading}>
          Sign Up
        </Button>
      </DialogActions>
    </form>
  );
}

export default FormSignUp;