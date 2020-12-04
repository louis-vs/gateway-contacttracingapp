import React, {useState} from 'react';
import './Navbar.css';
import LogInButton from './LogInButton';
import SignUpButton from './SignUpButton';
import LogOutButton from './LogOutButton';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { currentUser } = useAuth();
  console.dir(currentUser);

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };


  return (
    <>
      <nav className="navbar">
        <Link to ='/' className='navbar-logo'>
          COVID TRACING
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          >
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Services <i className='fas fa-caret-down'/>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
        { currentUser ? 
          <>
            <LogOutButton />
          </>
          : 
          <>
            <LogInButton />
            <SignUpButton />
          </>
        }
        

      </nav>
    </>
  );
};

export default Navbar;