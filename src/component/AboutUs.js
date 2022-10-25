import React from "react";
 import photo from "./photome.jpg"
 import styles from "./AboutUs.module.css"

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.img} src={photo} alt="photo" />
      </div>
      <h3>
        .I am Alireza Daniyali and the developer of Front End. Thank you for
        visiting my site
      </h3>
    </div>
  );
};

export default AboutUs;
