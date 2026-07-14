import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>

      <div className="navlogo">
        <img src={logo} alt="logo" />
      </div>

      <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <p >Home</p>
        <p >Courses</p>
        <p >Careers</p>
        <p >Blog</p>
        <p >About us</p>
      </div>

      <div className="nav-button">
        <button>Login</button>
        <button>Signup</button>
      </div>

      

    </nav>
  );
};

export default Navbar;