import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Links for redirection
import Navbar_Style from '../../Styles/components/Navbar.module.css'; // Styles

// Pages
import Home from '../../pages/Home.jsx';
import About from '../../pages/About.jsx';

const Navbar = () => {
  return (
    <Router>
      <nav className={Navbar_Style.navbar}>
        <div className={Navbar_Style['navbar-container']}>
          <div className={Navbar_Style.logo}>
            <Link to="/">
              <img 
                src="/Logo.png" 
                alt="Logo" 
                className={Navbar_Style['navbar-logo']} 
              />
            </Link>
          </div>
          <ul className={Navbar_Style['navbar-links']}>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
