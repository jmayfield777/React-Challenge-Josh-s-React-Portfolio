import React from 'react';

import styles from './index.module.css';

export const Navbar = () => {
  return <nav className={styles.Navbar}>
    <a className={styles.title} href="/">Josh's Portfolio</a>
    <div className={styles.menu}>
      <ul className={styles.menuItems}>
        <li><a href="#About">About</a></li>
      </ul>
      <ul>
        <li><a href="#Projects">Projects</a></li>
      </ul>
      <ul>
        <li><a href="#Resume">Resume</a></li>
      </ul>
      <ul>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </div>
  </nav>;
};