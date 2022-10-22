import React from 'react';
import { NavLink } from 'react-router-dom';
import {
//   MdArrowBackIosNew,
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
      <span>World Map</span>

      <NavLink to="/settings">
        <IoIosSettings />
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
