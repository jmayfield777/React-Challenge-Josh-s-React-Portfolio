import React from "react";

import styles from './AboutPage.module.css';
import { getImage } from '../utils/getImageHelper';

export default function About() {
  return (
  <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img 
            src={getImage("About/cursorIcon.png")} 
            alt="cursor icon" 
          />
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>
              I'm a frontend developer with experience in building optimized sites.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img 
            src={getImage("About/serverIcon.png")} 
            alt="server icon" 
          />
          <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>
              I have experience developing fast and optimized backend systems and API's.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img 
            src={getImage("About/uiIcon.png")} 
            alt="UI icon" 
          />
          <div className={styles.aboutItemText}>
            <h3>UI Designer</h3>
            <p>
              I have designed multiple landing pages and have created design systems as well.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  );
}