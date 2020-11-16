import React, { useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// sign up form content. Place within FormDialog
function FormSignUp(props) {
  // state
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ passwordConfirmation, setPasswordConfirmation ] = useState("");

  // events
  const handleChange = (event) => {
    switch(event.target.id) {
      case 'email': setEmail(event.target.value); break;
      case 'password': setPassword(event.target.value); break;
      case 'password-confirmation': setPasswordConfirmation(event.target.value); break;
      default: break;
    }
  }

  const handleSubmit = (event) => {
    // TODO: add client-side validation
    // TODO: add POST request.then(redirect as needed). This requires router & firebase set up.
    console.log("trying sign up...");
    console.log("email: " + email);
    console.log("pw: " + password);
    console.log("pwC: " + passwordConfirmation);
    event.preventDefault(); // stop browser from auto-redirecting
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
        />

      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>
          Cancel
        </Button>
        <Button type="submit">
          Sign Up
        </Button>
      </DialogActions>
    </form>
  );
}

export default FormSignUp;