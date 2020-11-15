import React from 'react';
import Dialog from '@material-ui/core/Dialog';

// a container for material-ui pop-up forms
function FormDialog(props) {
  return (<div>
    <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
      {props.children}
    </Dialog>
  </div>);
}
export default FormDialog;