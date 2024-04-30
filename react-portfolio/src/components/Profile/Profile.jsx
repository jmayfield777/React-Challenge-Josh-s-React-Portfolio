import React from "react";

import styles from '.'
import { getImage } from '../../utils';

export const Hero = () => {
  return <section>
    <div>
      <h1>Welcome to my Portfolio!</h1>
      <p>I'm a full stack developer with experience usiing React and NodeJS.</p>
      <a href="mailto:josh.mayfield45@gmail.com"></a>
    </div>
    <img src={getImage("profile-image/profile.png")} alt="profile image" />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
  </section>;

};