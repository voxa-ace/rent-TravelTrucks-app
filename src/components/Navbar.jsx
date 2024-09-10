import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Importing the CSS module for Navbar

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>TravelTrucks</h1>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
