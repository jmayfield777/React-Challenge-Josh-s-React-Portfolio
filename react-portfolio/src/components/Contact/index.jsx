import React from "react";
import { getImage } from "../../utils/getImageHelper";

export const Contact = () => {
  return (
    <footer>
      <div>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul>
        <li>
          <img 
            src={getImage("Contact/emailIcon.png")} 
            alt="Email icon" 
          />
          <a href="mailto:josh.mayfield45@gmail.com">
            josh.mayfield45@gmail.com
          </a>
        </li>
        <li>
          <img 
            src={getImage("Contact/githubIcon.png")} 
            alt="Github icon" 
          />
          <a href="https://www.github.com/jmayfield777">
            github.com/jmayfield777
          </a>
        </li>
      </ul>
    </footer>
  );
};