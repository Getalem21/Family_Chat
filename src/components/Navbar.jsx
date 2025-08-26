import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <div className='divcontainer'>
        <nav className='navbar'>
        
            <ul className='navlinks'>
                  <h1 className='logoContainer'>
                <img src=''className="logoimg"alt='logo'/>
                FamilyChat      </h1>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Service">Service</Link>
                </li>
                <li>
                    <Link to="/Family">Family</Link>
                </li>
                    <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Service">Service</Link>
                </li>
                <li>
                    <Link to="/Family">Family</Link>
                </li>
                
        
            </ul>
        </nav>
    </div>
    </>
  );
}

export default Navbar;