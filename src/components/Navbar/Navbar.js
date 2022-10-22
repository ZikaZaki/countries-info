import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  IoIosArrowBack,
  IoIosSettings,
} from 'react-icons/io';

// Import Styling
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles['navbar-container']}>
      <NavLink to="/">
        <IoIosArrowBack />
      </NavLink>
      <span>COUNTRIES INFO 2022</span>

      <NavLink to="/settings">
        <IoIosSettings />
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
