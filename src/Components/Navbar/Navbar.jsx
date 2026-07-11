import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>

      <div className='navlogo'>
        <div>
          <img src={logo} height="50px" alt="logo" />
        </div>
      </div>

      <div className='nav-menu'>
        <p>Home</p>
        <p>Courses</p>
        <p>Careers</p>
        <p>Blog</p>
        <p>About us</p>
      </div>

      <div className='nav-button'>
        <button>Login</button>
        <button>Signup</button>
      </div>

    </nav>
  );
};

export default Navbar;