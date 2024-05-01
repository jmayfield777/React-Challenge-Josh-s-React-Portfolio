import React from 'react';
import { useState } from 'react';

import styles from './index.module.css';
import { getImage } from '../../utils/getImageHelper';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <nav className={styles.navbar}>
    <a className={styles.title} href="/">Josh's Portfolio</a>
    <div className={styles.menu}>
      <img 
        className={styles.menuBtn} 
        src={menuOpen 
          ? getImage("Nav/closeIcon.png")
          : getImage("Nav/menuIcon.png")
        } 
        alt="menu-button" 
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
      onClick={() => setMenuOpen(false)}
      >
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
  </nav>
  );
};