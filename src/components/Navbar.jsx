import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active links
import styles from './Navbar.module.css';
import Logo from '../assets/icons/logo.svg'; // Assuming your SVG logo file is in this path

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={Logo} alt="TravelTrucks Logo" className={styles.logo} />
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.navLink
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.navLink
            }
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
