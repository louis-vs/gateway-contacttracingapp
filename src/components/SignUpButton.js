import React, {useState} from 'react';
import './Button.css';
import FormDialog from './FormDialog';
import FormSignUp from './FormSignUp';

function SignUpButton () {
	const [showSignUp, setSignUp] = useState(false);

  // event handlers
	const handleDialogOpen = () => { 
		setSignUp(true); 
	};

	const handleDialogClose = () => {
		setSignUp(false);
	};

	return (
		<>
			<button className='btn' onClick={handleDialogOpen}>
			Sign Up
			</button>

			<FormDialog open={showSignUp} onClose={handleDialogClose}>
				<FormSignUp onClose={handleDialogClose}></FormSignUp>
			</FormDialog>
		</>      
	);
}

export default SignUpButton;
