import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to our site</h1>
        <p className={styles.description}>
        We are a family with a love for Icelandic horses.
        </p>
        <p className={styles.description}>
        The Icelandic horse holds a special place in our hearts,<br /> 
        and we are committed to preserving and celebrating this amazing breed.
        </p>
      </div>

      <div>
        <img className={styles.heroImg} src="./hero/heroImg1.webp" alt="Hero image of a horse" />
      </div>
    </section>
  );
};

export default Hero;
