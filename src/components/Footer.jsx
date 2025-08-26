import React from 'react'
import {Link} from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footerdiv'>
      <h1>logo</h1>
      <p>wellcome to misraq ethiopia</p>
      <div className='footerall'>
        <div className='footerlinks'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </div>
        <div className='footerlinks'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </div>
      </div>
      <div className='copyRight'>
      <p>@copy</p>

      </div>
    </div>
  );
}

export default Footer;