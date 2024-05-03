import React from "react";

import styles from "./ProjectCard.module.css";

import { getImage } from '../../utils/getImageHelper';

export const ProjectCard = ({ 
  project: {title, imageSrc, description, skills, demo, source}
}) => {
  return (
    <div className={styles.container}>
      <img 
        src={getImage(imageSrc)} 
        alt={`Image of ${title}`} 
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          <li key={id} className={styles.skill}>{skill}</li>;
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>Demo</a>
        <a href={source} className={styles.link}>Source</a>
      </div>
    </div>
  );
};