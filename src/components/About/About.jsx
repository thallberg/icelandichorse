import React from "react";
import styles from "./About.module.css";


const About = () => {


  return (
    <section
      className={`${styles.container}`}
      id="about"
   
    >
      <h2 className={styles.title}>This is us</h2>
      <div className={styles.content}>
        <img src="./about/aboutImg1.webp" alt="" className={styles.aboutImage} />

        <div className={styles.aboutItemText}>
          <h3>The journey begins here</h3>
          <p>
            Our focus is on providing memorable experiences through horse
            rentals that are safe, enjoyable, and suited for all levels of
            riders. We aim to make your time with these incredible horses both
            relaxing and inspiring, ensuring a connection with nature and this
            unique breed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
