import React from "react";

import styles from './index.module.css';
import { getImage } from '../../utils/getImageHelper';

export const About = () => {
  return (
  <section>
    <h2>About</h2>
    <div>
      <ul>
        <li>
          <img 
            src={getImage("About/cursorIcon.png")} 
            alt="cursor icon" 
          />
          <div>
            <h3>Frontend Developer</h3>
            <p>
              I'm a frontend developer with experience in building optimized sites.
            </p>
          </div>
        </li>
        <li>
          <img 
            src={getImage("About/serverIcon.png")} 
            alt="server icon" 
          />
          <div>
            <h3>Backend Developer</h3>
            <p>
              I have experience developing fast and optimized backend systems and API's.
            </p>
          </div>
        </li>
        <li>
          <img 
            src={getImage("About/uliIcon.png")} 
            alt="uli icon" 
          />
          <div>
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