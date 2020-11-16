import React, {useState} from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import FormDialog from './FormDialog';
import FormSignUp from './FormSignUp';

export function SignUpButton () {
    const [showSignUp, setSignUp] = useState(false);

  // event handlers
    const handleSignUpOpen = () => { setSignUp(true); }

    const handleDialogClose = () => {
        setSignUp(false);
    };

    return (
        <>
            <Link to='sign=up'>
                <button className='btn' onClick={handleSignUpOpen}>
                Sign Up
                </button>

                <FormDialog open={showSignUp} onClose={handleDialogClose}>
                    <FormSignUp onClose={handleDialogClose}></FormSignUp>
                </FormDialog>

            </Link>
        </>      
    );
}

