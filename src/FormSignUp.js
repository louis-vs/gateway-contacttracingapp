import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

// sign up form content. Place within FormDialog
function FormSignUp(props) {
  return (<div>
    <DialogTitle id='form-dialog-title'>Sign Up</DialogTitle>
    <DialogContent>

    </DialogContent>
    <DialogActions>
      <Button onClick={props.onClose}>
        Cancel
      </Button>
      <Button onClick={props.onClose}>
        Sign Up
      </Button>
    </DialogActions>
  </div>);
}

export default FormSignUp;