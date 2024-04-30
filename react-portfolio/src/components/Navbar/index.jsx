import React from 'react';

import styles from './index.module.css';

export const Navbar = () => {
  return <nav className={styles.navbar}>
    <a className={styles.title} href="/">Josh's Portfolio</a>
    <div className={styles.menu}>
      <ul className={styles.menuItems}>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Resume">Resume</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>;
};