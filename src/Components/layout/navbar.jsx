// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar_Style from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={Navbar_Style.navbar}>
      <div className={Navbar_Style['navbar-container']}>
        <div className={Navbar_Style.logo}>
          
          {/*Home link*/}
          <Link to="/">
            <img 
              src="/Logo.png" 
              alt="Logo" 
              className={Navbar_Style['navbar-logo']} 
            />
          </Link>
        </div>

        {/*Another links*/}
        <ul className={Navbar_Style['navbar-links']}>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/carbon">Tu huella</Link></li>
          <li><Link to="/news">News</Link></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
