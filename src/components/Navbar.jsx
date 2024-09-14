import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Importing the CSS module for Navbar
import Logo from '../assets/icons/logo.svg'; // Assuming your SVG logo file is in this path

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={Logo} alt="TravelTrucks Logo" className={styles.logo} />
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
