import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

// log in form content. Place within FormDialog
function FormLogIn(props) {
  return (<div>
    <DialogTitle id='form-dialog-title'>Log In</DialogTitle>
    <DialogContent>

    </DialogContent>
    <DialogActions>
      <Button onClick={props.onClose}>
        Cancel
      </Button>
      <Button onClick={props.onClose}>
        Log In
      </Button>
    </DialogActions>
  </div>);
}

export default FormLogIn;